from __future__ import annotations

import math
import os
import subprocess
import wave
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "output" / "video"
TMP_DIR = ROOT / "tmp" / "video-admiscible"
FFMPEG = ROOT / "tmp" / "video-tools" / "node_modules" / "@ffmpeg-installer" / "darwin-arm64" / "ffmpeg"
FONT_DIR = Path(
    "/Users/joseph/.cache/codex-runtimes/codex-primary-runtime/dependencies/"
    "native/libreoffice-headless/libreoffice/LibreOfficeDev.app/Contents/"
    "Resources/fonts/truetype"
)

W, H = 1920, 1080
FPS = 30
DURATION = 66.0
TOTAL_FRAMES = int(DURATION * FPS)

BLUE_DARK = (7, 31, 79)
BLUE = (18, 63, 130)
BLUE_MID = (47, 107, 255)
BLUE_SOFT = (234, 243, 255)
RED = (230, 64, 75)
WHITE = (255, 255, 255)
TEXT = (22, 22, 22)
MUTED = (80, 90, 110)
BG = (250, 253, 255)
BORDER = (207, 221, 237)


VOICE_TEXT = """
Et si l'accès aux bonnes ressources ne dépendait plus du budget d'une famille ?
Admiscible est un service éducatif gratuit, conçu pour rendre le travail scolaire plus clair.
L'élève choisit son profil, son niveau, sa filière, puis la matière à travailler.
Le site l'oriente vers le bon cours, la bonne méthode, le bon exercice, ou la bonne annale.
Chaque outil a un rôle simple : comprendre, s'entraîner, corriger, organiser, progresser.
Les parents peuvent accompagner sans surveiller. Les enseignants peuvent recommander des ressources.
Les établissements peuvent préparer un usage collectif avec des repères de sécurité, de données et d'accessibilité.
Admiscible n'est pas un site officiel de l'État. C'est un projet pensé pour dialoguer avec les exigences d'un service public éducatif.
Gratuit, clair, exigeant. Pour que l'égalité des chances devienne un outil concret.
Admiscible.
""".strip()


SCENES = [
    (0, 6.2, "Et si l'accès aux bonnes ressources ne dépendait plus du budget d'une famille ?", "Ouverture"),
    (6.2, 13.0, "Un service éducatif gratuit, pensé pour rendre le travail scolaire plus clair.", "Mission"),
    (13.0, 21.5, "Un parcours guidé : profil, niveau, filière, matière.", "Parcours"),
    (21.5, 32.5, "Cours. Méthodes. Exercices. Annales.", "Contenus"),
    (32.5, 43.5, "Comprendre, s'entraîner, corriger, organiser, progresser.", "Outils"),
    (43.5, 54.0, "Élèves, parents, enseignants, établissements : chacun son espace.", "Publics"),
    (54.0, 62.0, "Un projet compatible avec les exigences d'un service public éducatif.", "Garanties"),
    (62.0, 66.0, "Admiscible. Gratuit. Clair. Exigeant.", "Final"),
]


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    name = "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
    return ImageFont.truetype(str(FONT_DIR / name), size=size)


F = {
    "tiny": font(25),
    "small": font(31),
    "body": font(42),
    "body_b": font(42, True),
    "mid": font(58, True),
    "large": font(78, True),
    "hero_s": font(86, True),
    "hero": font(104, True),
    "giant": font(132, True),
}


def ease(x: float) -> float:
    x = max(0.0, min(1.0, x))
    return 1 - pow(1 - x, 3)


def smooth(x: float) -> float:
    x = max(0.0, min(1.0, x))
    return x * x * (3 - 2 * x)


def lerp(a, b, t):
    return a + (b - a) * t


def mix_color(a, b, t):
    return tuple(int(lerp(a[i], b[i], t)) for i in range(3))


def scene_progress(t: float, start: float, end: float) -> float:
    return max(0.0, min(1.0, (t - start) / (end - start)))


def current_scene(t: float):
    for idx, (start, end, title, label) in enumerate(SCENES):
        if start <= t < end:
            return idx, start, end, title, label
    idx = len(SCENES) - 1
    return idx, *SCENES[-1]


def rounded(draw, xy, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def draw_text(draw, text, xy, ft, fill, anchor="la", spacing=8, max_width=None, align="left"):
    if not max_width:
        draw.text(xy, text, font=ft, fill=fill, anchor=anchor)
        return
    words = text.split()
    lines, line = [], ""
    for word in words:
        probe = f"{line} {word}".strip()
        box = draw.textbbox((0, 0), probe, font=ft)
        if box[2] - box[0] <= max_width or not line:
            line = probe
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    x, y = xy
    line_h = ft.size + spacing
    for i, ln in enumerate(lines):
        if align == "center":
            box = draw.textbbox((0, 0), ln, font=ft)
            dx = (max_width - (box[2] - box[0])) / 2
        else:
            dx = 0
        draw.text((x + dx, y + i * line_h), ln, font=ft, fill=fill)


def alpha_composite(base: Image.Image, overlay: Image.Image, alpha: float):
    if alpha <= 0:
        return
    if alpha < 1:
        overlay = overlay.copy()
        overlay.putalpha(overlay.getchannel("A").point(lambda p: int(p * alpha)))
    base.alpha_composite(overlay)


def background(t: float) -> Image.Image:
    idx, start, end, *_ = current_scene(t)
    dark = idx in [0, 6, 7]
    top = BLUE_DARK if dark else BG
    bottom = (11, 48, 112) if dark else (239, 247, 255)
    arr = np.zeros((H, W, 3), dtype=np.uint8)
    for y in range(H):
        k = y / (H - 1)
        arr[y, :, :] = mix_color(top, bottom, k)
    img = Image.fromarray(arr, "RGB").convert("RGBA")
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    line_col = (255, 255, 255, 52) if dark else (18, 63, 130, 38)
    for i in range(9):
        y = 110 + i * 112 + 18 * math.sin(t * 0.36 + i)
        pts = []
        for x in range(-80, W + 90, 18):
            yy = y + 22 * math.sin((x / 250) + t * 0.55 + i * 0.6)
            pts.append((x, yy))
        d.line(pts, fill=line_col, width=2)
    if dark:
        d.ellipse((W - 380, -90, W + 110, 400), fill=(255, 255, 255, 20))
    else:
        d.rectangle((0, H - 110, W, H), fill=(232, 242, 255, 115))
    alpha_composite(img, layer, 1)
    return img


def draw_logo(draw: ImageDraw.ImageDraw, x: int, y: int, s: int):
    draw.rounded_rectangle((x, y, x + s, y + s), radius=int(s * 0.25), fill=BLUE_DARK)
    lw = int(s * 0.13)
    draw.line((x + 0.27 * s, y + 0.77 * s, x + 0.47 * s, y + 0.24 * s), fill=BLUE_MID, width=lw, joint="curve")
    draw.line((x + 0.73 * s, y + 0.77 * s, x + 0.53 * s, y + 0.24 * s), fill=RED, width=lw, joint="curve")
    draw.line((x + 0.39 * s, y + 0.58 * s, x + 0.61 * s, y + 0.58 * s), fill=WHITE, width=int(s * 0.11))


def glass_card(img, xy, radius=32, fill=(255, 255, 255, 226), outline=(207, 221, 237, 170), blur=False):
    x1, y1, x2, y2 = map(int, xy)
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.rounded_rectangle((x1, y1, x2, y2), radius=radius, fill=fill, outline=outline, width=2)
    if blur:
        shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        sd = ImageDraw.Draw(shadow)
        sd.rounded_rectangle((x1, y1 + 14, x2, y2 + 14), radius=radius, fill=(18, 63, 130, 28))
        img.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(18)))
    img.alpha_composite(layer)
    return ImageDraw.Draw(img)


def pill(draw, text, x, y, fill, fg, w=None):
    box = draw.textbbox((0, 0), text, font=F["small"])
    width = w or (box[2] - box[0] + 48)
    draw.rounded_rectangle((x, y, x + width, y + 56), radius=28, fill=fill)
    draw.text((x + 24, y + 13), text, font=F["small"], fill=fg)


def intro_scene(img, d, t, p):
    dark_fg = WHITE
    intro = ease(p)
    draw_logo(d, 150, int(158 - 26 * (1 - intro)), 92)
    d.text((270, 169), "Admiscible", font=F["mid"], fill=dark_fg)
    headline = "Et si les bonnes ressources\ndevenaient accessibles\nà tous ?"
    y = int(330 + 24 * (1 - ease(min(1, p * 1.5))))
    draw_text(d, headline, (150, y), F["hero_s"], WHITE, max_width=1180, spacing=10)
    pill(d, "Gratuit", 150, 806, (255, 255, 255, 235), BLUE_DARK)
    pill(d, "Clair", 360, 806, (255, 255, 255, 235), BLUE_DARK)
    pill(d, "Du collège à la prépa", 535, 806, (255, 255, 255, 235), BLUE_DARK, 420)
    # moving cursor dot
    dot_x = 1430 + int(70 * math.sin(t * 2.2))
    dot_y = 335 + int(42 * math.cos(t * 1.7))
    d.rounded_rectangle((dot_x, dot_y, dot_x + 150, dot_y + 54), radius=27, fill=(255, 255, 255, 38), outline=(255, 255, 255, 80), width=2)
    d.text((dot_x + 28, dot_y + 13), "accès", font=F["small"], fill=(255, 255, 255, 225))


def mission_scene(img, d, t, p):
    x = int(155 + 30 * (1 - ease(p)))
    d.text((x, 158), "La promesse", font=F["small"], fill=BLUE)
    draw_text(d, "Un service éducatif gratuit,\nsans premium élève.", (x, 220), F["hero_s"], TEXT, max_width=980, spacing=8)
    draw_text(d, "Le but : rendre le travail scolaire plus lisible,\nplus régulier, plus juste.", (x, 510), F["body"], MUTED, max_width=780)
    for i, txt in enumerate(["Cours", "Méthodes", "Exercices", "Suivi"]):
        yy = 720 + i * 0
        xx = 155 + i * 285
        alpha = ease((p - 0.18 - i * 0.08) / 0.28)
        if alpha <= 0:
            continue
        card_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        cd = ImageDraw.Draw(card_layer)
        cd.rounded_rectangle((xx, yy, xx + 245, yy + 125), radius=28, fill=(255, 255, 255, int(230 * alpha)), outline=(207, 221, 237, int(180 * alpha)), width=2)
        cd.text((xx + 28, yy + 32), txt, font=F["body_b"], fill=(*BLUE_DARK, int(255 * alpha)))
        img.alpha_composite(card_layer)
    # right panel
    panel_x = 1270
    glass_card(img, (panel_x, 188, 1740, 826), blur=True)
    d = ImageDraw.Draw(img)
    d.text((panel_x + 42, 238), "Égalité d'accès", font=F["mid"], fill=BLUE_DARK)
    for i, line in enumerate(["Un cadre clair", "Des contenus utiles", "Des outils de travail", "Une progression suivie"]):
        y = 345 + i * 95
        d.ellipse((panel_x + 44, y + 8, panel_x + 74, y + 38), fill=BLUE_SOFT, outline=BLUE)
        d.text((panel_x + 98, y), line, font=F["body"], fill=TEXT)


def parcours_scene(img, d, t, p):
    d.text((150, 130), "Un parcours qui guide", font=F["small"], fill=BLUE)
    draw_text(d, "Une question à la fois.", (150, 190), F["hero"], TEXT, max_width=980)
    labels = [
        ("Élève", "Profil"),
        ("Collège", "Niveau"),
        ("Troisième", "Classe"),
        ("Maths", "Matière"),
    ]
    for i, (title, sub) in enumerate(labels):
        ap = ease((p - i * 0.13) / 0.35)
        if ap <= 0:
            continue
        x = int(210 + i * 385)
        y = int(490 - 36 * (1 - ap))
        glass_card(img, (x, y, x + 305, y + 230), radius=36, blur=True)
        d = ImageDraw.Draw(img)
        d.text((x + 34, y + 38), sub.upper(), font=F["tiny"], fill=BLUE)
        d.text((x + 34, y + 91), title, font=F["mid"], fill=TEXT)
        d.rounded_rectangle((x + 34, y + 162, x + 190, y + 208), radius=23, fill=BLUE)
        d.text((x + 59, y + 172), "Choisir", font=F["small"], fill=WHITE)
        if i < len(labels) - 1:
            d.line((x + 315, y + 115, x + 373, y + 115), fill=(18, 63, 130, int(210 * ap)), width=5)
            d.polygon([(x + 372, y + 102), (x + 396, y + 115), (x + 372, y + 128)], fill=(18, 63, 130, int(210 * ap)))
    draw_text(d, "Le site évite le catalogue infini.\nIl amène l'utilisateur vers la bonne page.", (150, 815), F["body"], MUTED, max_width=980)


def contents_scene(img, d, t, p):
    d.text((150, 126), "Le coeur du travail", font=F["small"], fill=BLUE)
    draw_text(d, "Cours.\nMéthodes.\nExercices.\nAnnales.", (150, 185), F["large"], TEXT, max_width=700, spacing=6)
    cards = [
        ("Cours", "Comprendre les notions", BLUE),
        ("Méthodes", "Savoir résoudre", (24, 117, 60)),
        ("Exercices", "S'entraîner au bon niveau", RED),
        ("Annales", "Trouver le bon sujet", (179, 64, 0)),
    ]
    for i, (title, body, col) in enumerate(cards):
        row, col_i = divmod(i, 2)
        x = 1010 + col_i * 390
        y = 170 + row * 260
        ap = ease((p - 0.1 - i * 0.08) / 0.35)
        if ap <= 0:
            continue
        y += int(36 * (1 - ap))
        glass_card(img, (x, y, x + 335, y + 205), radius=32, blur=True)
        d = ImageDraw.Draw(img)
        d.rounded_rectangle((x + 34, y + 34, x + 102, y + 46), radius=6, fill=col)
        d.text((x + 34, y + 76), title, font=F["mid"], fill=TEXT)
        draw_text(d, body, (x + 34, y + 144), F["small"], MUTED, max_width=260)
    # search bar
    y = 735
    glass_card(img, (150, y, 1330, y + 130), radius=38, blur=True)
    d = ImageDraw.Draw(img)
    d.text((205, y + 41), "Rechercher : électrocinétique", font=F["body"], fill=TEXT)
    d.rounded_rectangle((1085, y + 32, 1270, y + 96), radius=32, fill=BLUE)
    d.text((1130, y + 46), "Trouver", font=F["small"], fill=WHITE)


def tools_scene(img, d, t, p):
    d.text((150, 126), "Des outils qui servent vraiment", font=F["small"], fill=BLUE)
    draw_text(d, "Chaque action laisse\nune trace utile.", (150, 185), F["hero_s"], TEXT, max_width=920)
    glass_card(img, (1010, 150, 1715, 860), radius=36, blur=True)
    d = ImageDraw.Draw(img)
    d.text((1065, 206), "Tableau de bord", font=F["mid"], fill=BLUE_DARK)
    bars = [0.72, 0.48, 0.64, 0.34]
    names = ["Maths", "Physique", "Méthodes", "Annales"]
    for i, (name, val) in enumerate(zip(names, bars)):
        y = 330 + i * 105
        d.text((1065, y), name, font=F["small"], fill=TEXT)
        d.rounded_rectangle((1255, y + 6, 1648, y + 36), radius=15, fill=(225, 233, 244))
        d.rounded_rectangle((1255, y + 6, int(1255 + 393 * val * ease(p)), y + 36), radius=15, fill=BLUE)
    for i, txt in enumerate(["Cahier d'erreurs", "Timer", "Priorités"]):
        x = 160 + i * 280
        y = 730
        d.rounded_rectangle((x, y, x + 240, y + 105), radius=28, fill=BLUE_DARK if i == 0 else WHITE, outline=BORDER)
        d.text((x + 24, y + 34), txt, font=F["tiny"], fill=WHITE if i == 0 else BLUE_DARK)


def publics_scene(img, d, t, p):
    d.text((150, 126), "Chacun son espace", font=F["small"], fill=BLUE)
    draw_text(d, "Élèves, parents,\nenseignants, établissements.", (150, 185), F["hero"], TEXT, max_width=1180)
    items = [
        ("Élève", "travailler sans se perdre"),
        ("Parent", "accompagner sans surveiller"),
        ("Enseignant", "recommander simplement"),
        ("Établissement", "déployer avec méthode"),
    ]
    for i, (title, body) in enumerate(items):
        ap = ease((p - 0.1 - i * 0.08) / 0.32)
        if ap <= 0:
            continue
        x = 150 + i * 410
        y = int(605 + 38 * (1 - ap))
        glass_card(img, (x, y, x + 350, y + 190), radius=34, blur=True)
        d = ImageDraw.Draw(img)
        d.text((x + 32, y + 36), title, font=F["mid"], fill=BLUE_DARK)
        draw_text(d, body, (x + 32, y + 112), F["small"], MUTED, max_width=260)


def guarantees_scene(img, d, t, p):
    d.text((150, 128), "Compatible service public éducatif", font=F["small"], fill=(255, 255, 255, 230))
    draw_text(d, "Clarté.\nSécurité.\nAccessibilité.", (150, 190), F["giant"], WHITE, max_width=1050, spacing=10)
    draw_text(d, "Admiscible n'est pas un site officiel de l'État.\nLe projet est conçu pour dialoguer avec ses exigences.", (150, 720), F["body"], (230, 240, 255), max_width=980)
    glass_card(img, (1180, 198, 1710, 790), radius=38, fill=(255, 255, 255, 34), outline=(255, 255, 255, 80), blur=False)
    d = ImageDraw.Draw(img)
    for i, item in enumerate(["RGPD", "Contrastes", "Sources", "Signalements", "Déploiement pilote"]):
        y = 260 + i * 92
        d.ellipse((1238, y + 5, 1270, y + 37), fill=(255, 255, 255, 220))
        d.text((1300, y), item, font=F["body"], fill=WHITE)


def final_scene(img, d, t, p):
    draw_logo(d, 150, 145, 118)
    d.text((295, 165), "Admiscible", font=F["large"], fill=WHITE)
    draw_text(d, "Gratuit.\nClair.\nExigeant.", (150, 335), F["giant"], WHITE, max_width=1000, spacing=10)
    draw_text(d, "Pour que l'égalité des chances devienne un outil concret.", (150, 760), F["body"], (230, 240, 255), max_width=960)
    d.rounded_rectangle((1270, 728, 1745, 812), radius=42, fill=WHITE)
    d.text((1320, 748), "Découvrir le site", font=F["body_b"], fill=BLUE_DARK)


def render_frame(frame_idx: int) -> bytes:
    t = frame_idx / FPS
    idx, start, end, title, label = current_scene(t)
    p = scene_progress(t, start, end)
    img = background(t)
    d = ImageDraw.Draw(img)
    if idx == 0:
        intro_scene(img, d, t, p)
    elif idx == 1:
        mission_scene(img, d, t, p)
    elif idx == 2:
        parcours_scene(img, d, t, p)
    elif idx == 3:
        contents_scene(img, d, t, p)
    elif idx == 4:
        tools_scene(img, d, t, p)
    elif idx == 5:
        publics_scene(img, d, t, p)
    elif idx == 6:
        guarantees_scene(img, d, t, p)
    else:
        final_scene(img, d, t, p)
    # progress line
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((150, 1010, 1770, 1018), radius=4, fill=(18, 63, 130, 38) if idx not in [0, 6, 7] else (255, 255, 255, 46))
    d.rounded_rectangle((150, 1010, int(150 + 1620 * (t / DURATION)), 1018), radius=4, fill=WHITE if idx in [0, 6, 7] else BLUE)
    return img.convert("RGB").tobytes()


def write_voice():
    voice = TMP_DIR / "voice.aiff"
    if voice.exists():
        return voice
    subprocess.run([
        "say",
        "-v",
        "Thomas",
        "-r",
        "166",
        "-o",
        str(voice),
        VOICE_TEXT,
    ], check=True)
    return voice


def write_bed():
    sr = 44100
    n = int(DURATION * sr)
    t = np.arange(n) / sr
    bed = np.zeros(n, dtype=np.float32)
    # soft modern pad
    for freq, amp in [(110, 0.035), (165, 0.028), (220, 0.018), (330, 0.012)]:
        bed += amp * np.sin(2 * np.pi * freq * t + 0.4 * np.sin(2 * np.pi * 0.06 * t))
    # low pulse
    pulse = (np.sin(2 * np.pi * 0.5 * t) > 0.68).astype(np.float32)
    bed += 0.018 * pulse * np.sin(2 * np.pi * 55 * t)
    # transition whooshes and clicks
    for start, *_ in SCENES[1:]:
        pos = int((start - 0.42) * sr)
        length = int(0.85 * sr)
        if pos < 0 or pos + length > n:
            continue
        env = np.sin(np.linspace(0, math.pi, length)).astype(np.float32)
        noise = np.random.default_rng(int(start * 10)).normal(0, 1, length).astype(np.float32)
        sweep = np.sin(2 * np.pi * (220 + 1200 * np.linspace(0, 1, length)) * np.arange(length) / sr)
        bed[pos:pos + length] += 0.018 * env * noise + 0.015 * env * sweep
        click_pos = int(start * sr)
        click_len = int(0.08 * sr)
        env2 = np.exp(-np.linspace(0, 6, click_len)).astype(np.float32)
        bed[click_pos:click_pos + click_len] += 0.07 * env2 * np.sin(2 * np.pi * 880 * np.arange(click_len) / sr)
    # fade in/out
    fade = int(1.4 * sr)
    bed[:fade] *= np.linspace(0, 1, fade)
    bed[-fade:] *= np.linspace(1, 0, fade)
    bed = np.clip(bed, -0.5, 0.5)
    out = TMP_DIR / "bed.wav"
    with wave.open(str(out), "wb") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(sr)
        wf.writeframes((bed * 32767).astype("<i2").tobytes())
    return out


def mix_audio(voice: Path, bed: Path):
    mixed = TMP_DIR / "audio-mix.m4a"
    cmd = [
        str(FFMPEG), "-y",
        "-i", str(voice),
        "-i", str(bed),
        "-filter_complex",
        "[0:a]volume=1.12,acompressor=threshold=-18dB:ratio=2.4:attack=20:release=250[v];"
        "[1:a]volume=0.48,acompressor=threshold=-24dB:ratio=3:attack=40:release=350[b];"
        "[v][b]amix=inputs=2:duration=longest:dropout_transition=2,"
        "alimiter=limit=0.92",
        "-c:a", "aac",
        "-b:a", "192k",
        str(mixed),
    ]
    subprocess.run(cmd, check=True)
    return mixed


def render_video(audio: Path):
    out = OUT_DIR / "video-presentation-admiscible.mp4"
    cmd = [
        str(FFMPEG), "-y",
        "-f", "rawvideo",
        "-pix_fmt", "rgb24",
        "-s", f"{W}x{H}",
        "-r", str(FPS),
        "-i", "-",
        "-i", str(audio),
        "-map", "0:v:0",
        "-map", "1:a:0",
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-b:a", "192k",
        "-shortest",
        "-movflags", "+faststart",
        str(out),
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    assert proc.stdin
    for i in range(TOTAL_FRAMES):
        if i % 120 == 0:
            print(f"frame {i}/{TOTAL_FRAMES}", flush=True)
        proc.stdin.write(render_frame(i))
    proc.stdin.close()
    code = proc.wait()
    if code:
        raise RuntimeError(f"ffmpeg exited with {code}")
    return out


def main():
    if not FFMPEG.exists():
        raise SystemExit(f"ffmpeg introuvable : {FFMPEG}")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    TMP_DIR.mkdir(parents=True, exist_ok=True)
    voice = write_voice()
    bed = write_bed()
    audio = mix_audio(voice, bed)
    out = render_video(audio)
    print(out)


if __name__ == "__main__":
    main()

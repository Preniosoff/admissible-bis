from pathlib import Path
from datetime import date

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    Flowable,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT = OUTPUT_DIR / "presentation-admiscible.pdf"

FONT_DIR = Path(
    "/Users/joseph/.cache/codex-runtimes/codex-primary-runtime/dependencies/"
    "native/libreoffice-headless/libreoffice/LibreOfficeDev.app/Contents/"
    "Resources/fonts/truetype"
)


BLUE = colors.HexColor("#123f82")
BLUE_DARK = colors.HexColor("#071f4f")
BLUE_LIGHT = colors.HexColor("#eaf3ff")
BLUE_LINE = colors.HexColor("#a9c7f4")
TEXT = colors.HexColor("#161616")
MUTED = colors.HexColor("#4b5563")
BORDER = colors.HexColor("#dfe8f4")
BG = colors.HexColor("#fbfdff")
WHITE = colors.white
RED = colors.HexColor("#c9191e")
GREEN = colors.HexColor("#18753c")


def register_fonts():
    pdfmetrics.registerFont(TTFont("AdSans", str(FONT_DIR / "DejaVuSans.ttf")))
    pdfmetrics.registerFont(TTFont("AdSansBold", str(FONT_DIR / "DejaVuSans-Bold.ttf")))
    pdfmetrics.registerFont(TTFont("AdSansItalic", str(FONT_DIR / "DejaVuSans-Oblique.ttf")))


class CoverBand(Flowable):
    def __init__(self, height=7.2 * cm):
        super().__init__()
        self.width = 0
        self.height = height

    def draw(self):
        c = self.canv
        w = self._doctemplate.width
        h = self.height
        c.saveState()
        c.setFillColor(BLUE_DARK)
        c.roundRect(0, 0, w, h, 18, fill=1, stroke=0)
        c.setStrokeColor(colors.Color(1, 1, 1, alpha=0.22))
        c.setLineWidth(1.2)
        for offset in [0.5, 1.8, 3.2, 4.7]:
            p = c.beginPath()
            p.moveTo(-1.0 * cm, h - offset * cm)
            p.curveTo(3.2 * cm, h - (offset + 1.0) * cm, 7.8 * cm, h - (offset - 0.2) * cm, w + 1.0 * cm, h - (offset + 0.8) * cm)
            c.drawPath(p, stroke=1, fill=0)
        c.setFillColor(colors.Color(1, 1, 1, alpha=0.08))
        c.circle(w - 1.2 * cm, h - 0.6 * cm, 2.1 * cm, fill=1, stroke=0)
        c.restoreState()


class AdmiscibleLogo(Flowable):
    def __init__(self, size=1.42 * cm):
        super().__init__()
        self.width = size
        self.height = size

    def _p(self, x, y):
        s = self.width / 64
        return x * s, self.height - y * s

    def draw(self):
        c = self.canv
        c.saveState()
        c.setFillColor(BLUE_DARK)
        c.roundRect(0, 0, self.width, self.height, self.width * 0.25, fill=1, stroke=0)
        c.setLineWidth(self.width * 0.14)
        c.setLineCap(1)
        c.setLineJoin(1)
        c.setStrokeColor(colors.HexColor("#2f6bff"))
        c.line(*self._p(17, 49), *self._p(30, 15))
        c.setStrokeColor(colors.HexColor("#e6404b"))
        c.line(*self._p(47, 49), *self._p(34, 15))
        c.setStrokeColor(WHITE)
        c.setLineWidth(self.width * 0.125)
        c.line(*self._p(25, 37), *self._p(39, 37))
        c.restoreState()


class MetricCard(Flowable):
    def __init__(self, title, value, detail, color=BLUE):
        super().__init__()
        self.title = title
        self.value = value
        self.detail = detail
        self.color = color
        self.width = 5.2 * cm
        self.height = 3.0 * cm

    def draw(self):
        c = self.canv
        c.saveState()
        c.setFillColor(WHITE)
        c.setStrokeColor(BORDER)
        c.roundRect(0, 0, self.width, self.height, 9, fill=1, stroke=1)
        c.setFillColor(self.color)
        c.roundRect(0.28 * cm, self.height - 0.52 * cm, 0.74 * cm, 0.18 * cm, 3, fill=1, stroke=0)
        c.setFillColor(TEXT)
        c.setFont("AdSansBold", 9)
        c.drawString(0.28 * cm, self.height - 0.92 * cm, self.title)
        c.setFont("AdSansBold", 18)
        c.drawString(0.28 * cm, self.height - 1.58 * cm, self.value)
        c.setFillColor(MUTED)
        c.setFont("AdSans", 7.5)
        c.drawString(0.28 * cm, self.height - 2.12 * cm, self.detail[:58])
        c.restoreState()


def build_styles():
    base = getSampleStyleSheet()
    base.add(ParagraphStyle(
        name="CoverKicker",
        fontName="AdSansBold",
        fontSize=10,
        leading=14,
        textColor=BLUE,
        alignment=TA_LEFT,
        spaceAfter=8,
    ))
    base.add(ParagraphStyle(
        name="CoverTitle",
        fontName="AdSansBold",
        fontSize=34,
        leading=38,
        textColor=TEXT,
        spaceAfter=12,
    ))
    base.add(ParagraphStyle(
        name="CoverSub",
        fontName="AdSans",
        fontSize=13.5,
        leading=20,
        textColor=MUTED,
        spaceAfter=18,
    ))
    base.add(ParagraphStyle(
        name="H1",
        fontName="AdSansBold",
        fontSize=22,
        leading=27,
        textColor=BLUE_DARK,
        spaceBefore=3,
        spaceAfter=12,
    ))
    base.add(ParagraphStyle(
        name="H2",
        fontName="AdSansBold",
        fontSize=13.5,
        leading=17,
        textColor=BLUE,
        spaceBefore=10,
        spaceAfter=6,
    ))
    base.add(ParagraphStyle(
        name="Body",
        fontName="AdSans",
        fontSize=9.7,
        leading=14.4,
        textColor=TEXT,
        spaceAfter=7,
    ))
    base.add(ParagraphStyle(
        name="Small",
        fontName="AdSans",
        fontSize=8.2,
        leading=11.8,
        textColor=MUTED,
    ))
    base.add(ParagraphStyle(
        name="Quote",
        fontName="AdSansBold",
        fontSize=12,
        leading=17,
        textColor=BLUE_DARK,
        backColor=BLUE_LIGHT,
        borderColor=BLUE_LINE,
        borderWidth=0.7,
        borderPadding=10,
        spaceBefore=6,
        spaceAfter=12,
    ))
    base.add(ParagraphStyle(
        name="TableHead",
        fontName="AdSansBold",
        fontSize=8.2,
        leading=10,
        textColor=WHITE,
    ))
    base.add(ParagraphStyle(
        name="TableCell",
        fontName="AdSans",
        fontSize=7.8,
        leading=10.5,
        textColor=TEXT,
    ))
    base.add(ParagraphStyle(
        name="TableCellBold",
        fontName="AdSansBold",
        fontSize=7.8,
        leading=10.5,
        textColor=BLUE_DARK,
    ))
    base.add(ParagraphStyle(
        name="Footer",
        fontName="AdSans",
        fontSize=7.3,
        leading=9,
        textColor=colors.HexColor("#6b7280"),
        alignment=TA_CENTER,
    ))
    return base


def p(text, style="Body"):
    return Paragraph(text, STYLES[style])


def bullet(items):
    return ListFlowable(
        [ListItem(p(item, "Body"), leftIndent=0) for item in items],
        bulletType="bullet",
        start="disc",
        leftIndent=14,
        bulletFontName="AdSansBold",
        bulletFontSize=6,
        bulletColor=BLUE,
        spaceAfter=6,
    )


def section_title(label, title, intro=None):
    parts = [
        Paragraph(label.upper(), ParagraphStyle(
            name=f"Kicker{label}",
            fontName="AdSansBold",
            fontSize=7.5,
            leading=9,
            textColor=BLUE,
            spaceAfter=3,
        )),
        p(title, "H1"),
    ]
    if intro:
        parts.append(p(intro, "Body"))
    return KeepTogether(parts)


def card(title, body, color=BLUE):
    data = [[p(title, "TableCellBold")], [p(body, "TableCell")]]
    t = Table(data, colWidths=[5.2 * cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), WHITE),
        ("BOX", (0, 0), (-1, -1), 0.7, BORDER),
        ("LINEABOVE", (0, 0), (0, 0), 3, color),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


def card_grid(cards):
    rows = []
    for i in range(0, len(cards), 3):
        row = cards[i:i + 3]
        while len(row) < 3:
            row.append(Spacer(5.2 * cm, 0.1 * cm))
        rows.append(row)
    t = Table(rows, colWidths=[5.35 * cm, 5.35 * cm, 5.35 * cm], hAlign="LEFT")
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return t


def data_table(headers, rows, widths):
    wrapped_headers = [p(h, "TableHead") for h in headers]
    wrapped_rows = [[p(str(cell), "TableCellBold" if i == 0 else "TableCell") for i, cell in enumerate(row)] for row in rows]
    t = Table([wrapped_headers] + wrapped_rows, colWidths=widths, repeatRows=1, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLUE),
        ("BACKGROUND", (0, 1), (-1, -1), WHITE),
        ("GRID", (0, 0), (-1, -1), 0.45, BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


def draw_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(BORDER)
    canvas.line(doc.leftMargin, 1.25 * cm, A4[0] - doc.rightMargin, 1.25 * cm)
    canvas.setFont("AdSans", 7.3)
    canvas.setFillColor(colors.HexColor("#6b7280"))
    canvas.drawString(doc.leftMargin, 0.82 * cm, "Admiscible - dossier de présentation")
    canvas.drawRightString(A4[0] - doc.rightMargin, 0.82 * cm, f"Page {doc.page}")
    canvas.restoreState()


def cover_page(story):
    story.append(CoverBand())
    story.append(Spacer(1, 0.4 * cm))
    story.append(AdmiscibleLogo())
    story.append(Spacer(1, 0.28 * cm))
    story.append(p("DOCUMENT DE PRÉSENTATION", "CoverKicker"))
    story.append(p("Admiscible", "CoverTitle"))
    story.append(p(
        "Service éducatif gratuit de cours, méthodes, exercices et outils de travail, "
        "du collège aux classes préparatoires.",
        "CoverSub",
    ))
    story.append(p(
        "Ce dossier présente le fonctionnement du site, ses publics, son architecture "
        "et les garanties attendues pour un usage éducatif exigeant. Admiscible n'est "
        "pas un site officiel de l'État ; le projet adopte une approche compatible "
        "avec les usages d'un service éducatif public.",
        "Quote",
    ))
    story.append(Spacer(1, 0.25 * cm))
    story.append(Table(
        [[
            MetricCard("Accès", "Gratuit", "Pas de premium ni abonnement élève", BLUE),
            MetricCard("Périmètre", "3 niveaux", "Collège, lycée, CPGE", GREEN),
            MetricCard("Approche", "Claire", "Cours, méthodes, exercices, suivi", RED),
        ]],
        colWidths=[5.4 * cm, 5.4 * cm, 5.4 * cm],
        hAlign="LEFT",
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ]),
    ))
    story.append(Spacer(1, 1.0 * cm))
    story.append(p(f"Version de travail - {date.today().strftime('%d/%m/%Y')}", "Small"))
    story.append(PageBreak())


def add_content(story):
    story.append(section_title(
        "Synthèse",
        "Ce qu'est Admiscible",
        "Admiscible est une plateforme d'apprentissage et d'organisation du travail scolaire. "
        "Elle donne aux élèves un accès direct aux contenus utiles, puis les accompagne vers "
        "la bonne action : comprendre une notion, appliquer une méthode, s'entraîner, corriger "
        "une erreur ou organiser une session de travail.",
    ))
    story.append(card_grid([
        card("Mission", "Rendre le travail scolaire plus lisible et plus accessible, sans créer de barrière financière.", BLUE),
        card("Promesse", "Un élève sait quoi travailler, ou trouver le bon contenu, et comment suivre son avancement.", GREEN),
        card("Positionnement", "Un service gratuit, sobre, documenté, compatible avec les attentes d'un environnement éducatif public.", RED),
    ]))
    story.append(p("Le projet part d'une conviction simple : l'égalité des chances ne doit pas dépendre de la capacité des familles à payer des plateformes privées. Les contenus essentiels, les méthodes et les outils d'organisation doivent être accessibles à tous les élèves, quels que soient leur niveau, leur établissement ou leur situation familiale."))
    story.append(p("Admiscible ne cherche pas à remplacer l'enseignant. Le service structure l'accès au travail : il aide à retrouver les bons supports, à s'entraîner plus régulièrement, à garder une trace des erreurs et à construire des priorités simples."))

    story.append(Spacer(1, 0.3 * cm))
    story.append(p("Principes directeurs", "H2"))
    story.append(bullet([
        "Gratuité pour l'élève : le coeur du service ne repose pas sur un abonnement premium.",
        "Clarté avant abondance : les parcours guident l'utilisateur par choix progressifs.",
        "Séparation nette des usages : cours, méthodes, exercices, annales, orientation et tableau de bord.",
        "Adaptation au profil : niveau, filière, matière et besoin initial structurent l'entrée dans le site.",
        "Transparence : pages dédiées à l'accessibilité, aux données, à la sécurité et au statut du service.",
    ]))
    story.append(PageBreak())

    story.append(section_title(
        "Parcours",
        "Comment fonctionne le site pour un nouvel utilisateur",
        "L'entrée dans Admiscible se fait par couches progressives. Le site évite de demander "
        "à l'utilisateur de tout comprendre dès la première page.",
    ))
    story.append(data_table(
        ["Étape", "Ce que l'utilisateur choisit", "Effet dans le service"],
        [
            ("1. Profil", "Élève, parent, enseignant ou établissement.", "Le vocabulaire, les pages proposées et les actions prioritaires changent."),
            ("2. Niveau", "Collège, lycée ou classes préparatoires.", "Les contenus et les attentes sont adaptés au cadre scolaire."),
            ("3. Classe ou filière", "Exemples : troisième, terminale, MP, PC, PSI, BCPST.", "Le site filtre les cours, méthodes, exercices et annales pertinents."),
            ("4. Objectif initial", "Comprendre, s'entraîner, suivre l'avancement, préparer une classe ou un pilote.", "L'utilisateur arrive sur la page la plus utile au lieu d'être abandonné dans un menu large."),
            ("5. Compte", "Identifiant, mot de passe et confirmation des conditions.", "Le tableau de bord et les traces de travail peuvent être conservés."),
        ],
        [3.1 * cm, 6.1 * cm, 7.0 * cm],
    ))
    story.append(Spacer(1, 0.35 * cm))
    story.append(p("La création de compte utilise un système de cartes : chaque écran pose une seule question, avec un nombre limité de choix. Cette logique permet de garder une expérience ludique sans perdre le sérieux du service."))
    story.append(p("Une fois le compte créé, le site enregistre le contexte de départ : profil, niveau et besoin. Ce contexte sert ensuite à orienter les pages de cours, de méthodes, d'exercices et de suivi."))
    story.append(p("Règle ergonomique centrale", "H2"))
    story.append(p("Chaque grande rubrique doit répondre à une seule intention : apprendre dans Cours, appliquer dans Méthodes, s'entraîner dans Exercices, chercher un sujet dans Annales, se repérer dans Orientation, piloter son travail dans le Tableau de bord.", "Quote"))
    story.append(PageBreak())

    story.append(section_title(
        "Architecture",
        "Organisation actuelle du service",
        "La navigation est organisée autour d'actions compréhensibles plutôt que de filières affichées partout.",
    ))
    story.append(data_table(
        ["Espace", "Rôle", "Fonctionnement"],
        [
            ("Accueil", "Présenter la mission.", "Explique le service, la gratuité et l'idée d'égalité d'accès."),
            ("Cours", "Comprendre les notions.", "Choix par cartes : niveau, filière, matière, puis cours associé."),
            ("Méthodes", "Apprendre les démarches.", "Accès séparé pour éviter de mélanger théorie et résolution."),
            ("Exercices", "S'entraîner.", "Sélection de contenus pratiques par niveau, matière et chapitre."),
            ("Annales", "Travailler sur des sujets.", "Pages séparées pour brevet, bac et concours, avec recherche par mots-clés et banques d'épreuves."),
            ("Orientation", "Comprendre les parcours.", "Repère les choix possibles au collège, au lycée et après le bac."),
            ("Tableau de bord", "Suivre son travail.", "Progression, priorités, outils personnels et bilans."),
            ("Ressources", "Retrouver les pages utiles.", "Annales concours, annales bac, annales brevet, concours et ressources associées."),
        ],
        [3.1 * cm, 4.2 * cm, 8.9 * cm],
    ))
    story.append(Spacer(1, 0.35 * cm))
    story.append(p("Cette organisation a un objectif : réduire le bruit. Le site ne doit pas donner l'impression d'un grand catalogue ; il doit accompagner l'utilisateur vers une action précise."))
    story.append(card_grid([
        card("Cours", "Définitions, théorèmes, propriétés et formules restent ensemble dans le cours.", BLUE),
        card("Méthodes", "Les procédures de résolution sont isolées pour devenir des réflexes de travail.", GREEN),
        card("Exercices", "Les entraînements peuvent être proposés selon chapitre, difficulté et résultat.", RED),
    ]))
    story.append(PageBreak())

    story.append(section_title(
        "Publics",
        "Quatre espaces, quatre besoins",
        "Le service n'adresse pas le même message à un élève, un parent, un enseignant ou un établissement.",
    ))
    story.append(data_table(
        ["Public", "Besoin principal", "Ce qu'Admiscible propose"],
        [
            ("Élèves", "Savoir quoi faire, sans se perdre.", "Cours, méthodes, exercices, annales, priorités, progression, cahier d'erreurs."),
            ("Parents", "Accompagner sans surveiller en permanence.", "Explication du service, bilan volontaire, repère sur la régularité et les points à consolider."),
            ("Enseignants", "Recommander des ressources et structurer une séquence.", "Espace enseignant, recommandations, séquences pédagogiques, export de bilan de classe."),
            ("Établissements", "Évaluer un déploiement collectif.", "Cadre de pilote, pilotage local/anonymisé, matrice RGPD, sécurité, accessibilité, statut du service."),
        ],
        [3.1 * cm, 5.2 * cm, 7.9 * cm],
    ))
    story.append(Spacer(1, 0.35 * cm))
    story.append(p("L'espace élève doit rester le plus direct : choisir ce qu'il travaille, accéder au contenu, faire un exercice, corriger, puis enregistrer la trace utile. L'espace parent doit éviter la surveillance permanente : il sert surtout à comprendre et accompagner. L'espace enseignant doit rester opérationnel : recommander, préparer, exporter. L'espace établissement doit cadrer : rôles, données, limites, pilote et indicateurs."))
    story.append(p("Cette séparation est essentielle : un outil scolaire devient confus quand il montre à tout le monde les mêmes pages avec les mêmes mots. Admiscible doit donc adapter les parcours et le niveau de langage selon l'utilisateur."))
    story.append(PageBreak())

    story.append(section_title(
        "Contenus",
        "Le coeur pédagogique",
        "Admiscible se concentre sur les contenus qui aident concrètement l'élève à travailler.",
    ))
    story.append(card_grid([
        card("Cours", "Notions structurées par niveau, filière, matière et chapitre. Les définitions, propriétés, théorèmes et formules forment la base de compréhension.", BLUE),
        card("Méthodes", "Procédures de résolution : comment démarrer, quels réflexes utiliser, quelles erreurs éviter, comment rédiger.", GREEN),
        card("Exercices", "Entraînements progressifs, reliés aux chapitres et aux méthodes pour mesurer la maîtrise.", RED),
        card("Annales", "Brevet, bac et concours : recherche par mots-clés, chapitres, matières, années et banques d'épreuves.", BLUE),
        card("Attendus officiels", "Programmes et attentes reformulés en mots-clés simples, avec renvoi vers les sources officielles.", GREEN),
        card("Orientation", "Explication des choix scolaires et post-bac, avec des liens vers des ressources publiques pertinentes.", RED),
    ]))
    story.append(Spacer(1, 0.25 * cm))
    story.append(p("Pour les annales de concours, le fonctionnement recommandé est prudent : Admiscible indexe les métadonnées utiles et redirige vers les sources ou partenaires autorisés. Le site ne doit pas recopier ni redistribuer des PDF sans licence explicite ou accord formalisé."))
    story.append(p("À terme, la recherche peut devenir un vrai moteur pédagogique : un élève cherche un chapitre comme 'électrocinétique', 'Pythagore' ou 'fonction logarithme' et obtient les banques d'épreuves ou sujets les plus adaptés, sans devoir connaître à l'avance le nom exact du concours ou du document."))
    story.append(PageBreak())

    story.append(section_title(
        "Suivi",
        "Tableau de bord et outils de travail",
        "Le tableau de bord transforme l'activité de l'élève en repères utiles, sans fabriquer une compétition inutile.",
    ))
    story.append(data_table(
        ["Outil", "Utilité", "Usage attendu"],
        [
            ("Priorités", "Déterminer les actions du moment.", "Trois actions courtes, compréhensibles et exécutables."),
            ("Progression", "Voir ce qui avance.", "Mesure par matière, chapitre ou objectif de travail."),
            ("Cahier d'erreurs", "Transformer les erreurs en apprentissage.", "Erreur, cause, correction, reprise ultérieure."),
            ("Notes", "Garder une trace personnelle.", "Synthèses, rappels, idées de méthode."),
            ("Emploi du temps", "Organiser la semaine.", "Sessions par matière et plages de travail."),
            ("Timer", "Stabiliser l'effort.", "Sessions de concentration courtes et régulières."),
            ("Bilan", "Partager une synthèse.", "Bilan élève, parent ou classe selon le contexte."),
        ],
        [3.2 * cm, 5.3 * cm, 7.7 * cm],
    ))
    story.append(Spacer(1, 0.35 * cm))
    story.append(p("L'adaptation du niveau peut s'appuyer sur une logique inspirée des modèles de classement progressif : après un exercice, l'élève indique sa réussite et la difficulté ressentie. Le service peut alors recommander des exercices ni trop faciles ni trop difficiles. Ce mécanisme doit rester pédagogique : il sert à ajuster les propositions, pas à afficher un score public."))
    story.append(p("La règle de conception est simple : une donnée n'est utile que si elle aide l'élève à mieux travailler ou si elle aide un adulte à accompagner sans ajouter de pression inutile."))
    story.append(PageBreak())

    story.append(section_title(
        "Garanties",
        "Ce qui rend le projet crédible pour un usage institutionnel",
        "Un service éducatif sérieux ne se limite pas à ses contenus. Il doit aussi documenter ses limites, ses données, son accessibilité et sa sécurité.",
    ))
    story.append(data_table(
        ["Domaine", "État présenté dans le site", "Point à formaliser"],
        [
            ("Gratuité", "Accès gratuit aux contenus visibles.", "Modèle économique durable sans premium élève."),
            ("Accessibilité", "Contrastes, mode sombre, structure de pages, intention RGAA.", "Audit RGAA complet par parcours critique."),
            ("Données", "Matrice RGPD, minimisation, bilan volontaire.", "Registre formel, durées, responsable de traitement selon cadre."),
            ("Sécurité", "Hachage mot de passe, JWT, limitation de tentatives.", "Homologation, sauvegardes, plan d'incident, HTTPS production."),
            ("Design public", "Alignement visuel avec des principes proches du DSFR.", "Remplacement ou audit DSFR natif en cas de partenariat public."),
            ("Transparence", "Pages statut, sécurité, accessibilité, contact.", "Indicateurs publics réels et processus de correction publié."),
        ],
        [3.0 * cm, 6.1 * cm, 7.1 * cm],
    ))
    story.append(Spacer(1, 0.35 * cm))
    story.append(p("La phrase importante à tenir devant une institution est la suivante : Admiscible n'est pas un site officiel de l'État, mais le service est construit pour pouvoir dialoguer avec des exigences publiques : clarté, gratuité, sobriété, accessibilité, minimisation des données et transparence."))
    story.append(PageBreak())

    story.append(section_title(
        "Deploiement",
        "Comment présenter Admiscible à un partenaire important",
        "La présentation doit rester concrète : le projet résout un problème d'accès, propose un parcours clair et peut être expérimenté progressivement.",
    ))
    story.append(data_table(
        ["Phase", "Objectif", "Livrable"],
        [
            ("1. Démonstration", "Montrer le parcours élève complet.", "Accueil, inscription par cartes, cours, méthode, exercice, dashboard."),
            ("2. Pilote limité", "Tester avec une classe, une filière ou un groupe volontaire.", "Indicateurs anonymisés et retours qualitatifs."),
            ("3. Partenariats", "Cadrer les sources d'annales, programmes et ressources.", "Accords de redirection, métadonnées ou licences."),
            ("4. Audit", "Vérifier accessibilité, sécurité et données.", "Rapport RGAA, matrice RGPD complète, plan de correction."),
            ("5. Extension", "Élargir le périmètre sans perdre la clarté.", "Couverture par niveaux, matières et priorités pédagogiques."),
        ],
        [3.1 * cm, 6.1 * cm, 7.0 * cm],
    ))
    story.append(Spacer(1, 0.3 * cm))
    story.append(p("Ce qu'il faut éviter", "H2"))
    story.append(bullet([
        "Présenter Admiscible comme un site officiel avant qu'un cadre institutionnel existe.",
        "Promettre une couverture totale des programmes si les contenus ne sont pas encore verifies.",
        "Redistribuer des annales ou corrigés sans autorisation explicite.",
        "Afficher des scores publics d'élèves ou des classements qui créent de la pression sociale.",
    ]))
    story.append(p("Ce qu'il faut mettre en avant", "H2"))
    story.append(bullet([
        "La gratuité et l'égalité d'accès.",
        "La navigation guidée par niveau, filière, matière et objectif.",
        "La separation claire entre cours, méthodes, exercices, annales et suivi.",
        "Les pages de transparence, sécurité, accessibilité et données.",
        "La capacité à lancer un pilote mesuré et réversible.",
    ]))
    story.append(PageBreak())

    story.append(section_title(
        "Conclusion",
        "Une plateforme pour rendre le travail scolaire plus juste et plus lisible",
        "Admiscible défend une idée simple : les meilleurs outils de travail ne doivent pas être reserves aux familles capables de payer.",
    ))
    story.append(p("Le site peut devenir une porte d'entrée claire vers les contenus scolaires, les méthodes et les exercices, avec un suivi personnel qui aide l'élève à avancer sans se perdre. Sa valeur ne vient pas seulement du nombre de pages disponibles, mais de sa capacité à guider : choisir un niveau, choisir une matière, comprendre une notion, appliquer une méthode, s'entraîner, corriger et recommencer."))
    story.append(p("Pour un responsable éducatif, le projet présente trois intérêts : il sert directement les élèves, il donne aux familles un cadre lisible et il permet aux enseignants ou établissements de s'appuyer sur un outil structuré sans imposer un dispositif lourd."))
    story.append(p("La prochaine étape consiste à consolider les contenus, sécuriser les sources d'annales, formaliser les garanties institutionnelles et tester le service sur un périmètre pilote."))
    story.append(Spacer(1, 0.5 * cm))
    story.append(p("Phrase de présentation courte", "H2"))
    story.append(p("Admiscible est un service éducatif gratuit qui aide les élèves, du collège aux classes préparatoires, à accéder aux bons cours, aux bonnes méthodes, aux bons exercices et aux bons outils de suivi, dans une interface claire, sobre et pensée pour l'égalité des chances.", "Quote"))


def main():
    register_fonts()
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=1.55 * cm,
        leftMargin=1.55 * cm,
        topMargin=1.45 * cm,
        bottomMargin=1.65 * cm,
        title="Présentation Admiscible",
        author="Admiscible",
    )
    story = []
    cover_page(story)
    add_content(story)
    doc.build(story, onFirstPage=draw_footer, onLaterPages=draw_footer)
    print(OUTPUT)


STYLES = build_styles()

if __name__ == "__main__":
    main()

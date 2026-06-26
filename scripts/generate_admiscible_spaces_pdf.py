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
OUTPUT = OUTPUT_DIR / "espaces-et-offres-admiscible.pdf"

FONT_DIR = Path(
    "/Users/joseph/.cache/codex-runtimes/codex-primary-runtime/dependencies/"
    "native/libreoffice-headless/libreoffice/LibreOfficeDev.app/Contents/"
    "Resources/fonts/truetype"
)


BLUE = colors.HexColor("#2563eb")
BLUE_DARK = colors.HexColor("#06142f")
BLUE_MID = colors.HexColor("#123f82")
BLUE_LIGHT = colors.HexColor("#edf6ff")
CYAN = colors.HexColor("#17d4c1")
PURPLE = colors.HexColor("#8b5cf6")
RED = colors.HexColor("#ff4b55")
GREEN = colors.HexColor("#16a34a")
AMBER = colors.HexColor("#f59e0b")
TEXT = colors.HexColor("#111827")
MUTED = colors.HexColor("#526173")
BORDER = colors.HexColor("#dce8f7")
SOFT = colors.HexColor("#f7fbff")
WHITE = colors.white


def register_fonts():
    pdfmetrics.registerFont(TTFont("AdSans", str(FONT_DIR / "DejaVuSans.ttf")))
    pdfmetrics.registerFont(TTFont("AdSansBold", str(FONT_DIR / "DejaVuSans-Bold.ttf")))
    pdfmetrics.registerFont(TTFont("AdSansItalic", str(FONT_DIR / "DejaVuSans-Oblique.ttf")))


class CoverScene(Flowable):
    def __init__(self, height=7.1 * cm):
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

        c.setStrokeColor(colors.Color(0.25, 0.55, 1, alpha=0.32))
        c.setLineWidth(0.75)
        for i in range(9):
            y = 0.45 * cm + i * 0.62 * cm
            c.line(-0.5 * cm, y, w + 0.5 * cm, y + 0.12 * cm)
        for i in range(8):
            x = 0.3 * cm + i * 2.1 * cm
            c.line(x, 0.2 * cm, x + 4.5 * cm, h - 0.2 * cm)

        for x, y, r, col in [
            (w - 2.0 * cm, h - 1.4 * cm, 0.11 * cm, BLUE),
            (w - 4.0 * cm, h - 3.1 * cm, 0.08 * cm, CYAN),
            (1.1 * cm, 0.9 * cm, 0.09 * cm, RED),
            (w * 0.52, 1.7 * cm, 0.07 * cm, BLUE),
        ]:
            c.setFillColor(col)
            c.circle(x, y, r, fill=1, stroke=0)

        c.setStrokeColor(colors.Color(1, 1, 1, alpha=0.16))
        c.setLineWidth(1.0)
        for offset in [1.0, 2.4, 4.1]:
            path = c.beginPath()
            path.moveTo(-0.6 * cm, h - offset * cm)
            path.curveTo(4.0 * cm, h - (offset + 1.0) * cm, 9.5 * cm, h - (offset - 0.2) * cm, w + 0.4 * cm, h - (offset + 0.9) * cm)
            c.drawPath(path, stroke=1, fill=0)

        c.restoreState()


class AdLogo(Flowable):
    def __init__(self, size=1.55 * cm):
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
        c.roundRect(0, 0, self.width, self.height, self.width * 0.24, fill=1, stroke=0)
        c.setLineCap(1)
        c.setLineJoin(1)
        c.setLineWidth(self.width * 0.14)
        c.setStrokeColor(colors.HexColor("#3b82f6"))
        c.line(*self._p(17, 49), *self._p(30, 15))
        c.setStrokeColor(RED)
        c.line(*self._p(47, 49), *self._p(34, 15))
        c.setStrokeColor(WHITE)
        c.setLineWidth(self.width * 0.12)
        c.line(*self._p(25, 37), *self._p(39, 37))
        c.restoreState()


class AccentCard(Flowable):
    def __init__(self, title, text, accent=BLUE, width=5.15 * cm, height=2.72 * cm):
        super().__init__()
        self.title = title
        self.text = text
        self.accent = accent
        self.width = width
        self.height = height

    def draw(self):
        c = self.canv
        c.saveState()
        c.setFillColor(WHITE)
        c.setStrokeColor(BORDER)
        c.roundRect(0, 0, self.width, self.height, 10, fill=1, stroke=1)
        c.setFillColor(self.accent)
        c.roundRect(0.26 * cm, self.height - 0.48 * cm, 0.82 * cm, 0.16 * cm, 3, fill=1, stroke=0)
        c.setFillColor(BLUE_DARK)
        c.setFont("AdSansBold", 9.5)
        c.drawString(0.27 * cm, self.height - 0.92 * cm, self.title[:35])
        c.setFillColor(MUTED)
        c.setFont("AdSans", 7.2)
        lines = split_text(self.text, 36, 4)
        y = self.height - 1.35 * cm
        for line in lines:
            c.drawString(0.27 * cm, y, line)
            y -= 0.34 * cm
        c.restoreState()


def split_text(text, max_chars, max_lines):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if len(candidate) <= max_chars:
            current = candidate
        else:
            lines.append(current)
            current = word
        if len(lines) == max_lines:
            break
    if current and len(lines) < max_lines:
        lines.append(current)
    return lines


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(
        name="Kicker",
        fontName="AdSansBold",
        fontSize=8.5,
        leading=11,
        textColor=BLUE,
        spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name="CoverTitle",
        fontName="AdSansBold",
        fontSize=32,
        leading=36,
        textColor=BLUE_DARK,
        spaceAfter=10,
    ))
    styles.add(ParagraphStyle(
        name="CoverSub",
        fontName="AdSans",
        fontSize=12.5,
        leading=18,
        textColor=MUTED,
        spaceAfter=14,
    ))
    styles.add(ParagraphStyle(
        name="H1",
        fontName="AdSansBold",
        fontSize=21,
        leading=26,
        textColor=BLUE_DARK,
        spaceAfter=10,
    ))
    styles.add(ParagraphStyle(
        name="H2",
        fontName="AdSansBold",
        fontSize=13.2,
        leading=16,
        textColor=BLUE_MID,
        spaceBefore=8,
        spaceAfter=9,
    ))
    styles.add(ParagraphStyle(
        name="Body",
        fontName="AdSans",
        fontSize=9.1,
        leading=13.2,
        textColor=TEXT,
        spaceAfter=6,
    ))
    styles.add(ParagraphStyle(
        name="Small",
        fontName="AdSans",
        fontSize=7.7,
        leading=10.6,
        textColor=MUTED,
        spaceAfter=3,
    ))
    styles.add(ParagraphStyle(
        name="Note",
        fontName="AdSans",
        fontSize=8.3,
        leading=11.7,
        textColor=TEXT,
        backColor=BLUE_LIGHT,
        borderColor=BORDER,
        borderWidth=0.7,
        borderPadding=8,
        spaceBefore=5,
        spaceAfter=7,
    ))
    styles.add(ParagraphStyle(
        name="Quote",
        fontName="AdSansBold",
        fontSize=11.3,
        leading=15.5,
        textColor=BLUE_DARK,
        backColor=SOFT,
        borderColor=BORDER,
        borderWidth=0.7,
        borderPadding=9,
        spaceBefore=5,
        spaceAfter=9,
    ))
    styles.add(ParagraphStyle(
        name="TableHead",
        fontName="AdSansBold",
        fontSize=7.5,
        leading=9.6,
        textColor=WHITE,
    ))
    styles.add(ParagraphStyle(
        name="TableCell",
        fontName="AdSans",
        fontSize=7.3,
        leading=9.4,
        textColor=TEXT,
    ))
    styles.add(ParagraphStyle(
        name="TableBold",
        fontName="AdSansBold",
        fontSize=7.35,
        leading=9.5,
        textColor=BLUE_DARK,
    ))
    styles.add(ParagraphStyle(
        name="Footer",
        fontName="AdSans",
        fontSize=7.0,
        leading=8.5,
        textColor=colors.HexColor("#7a8696"),
        alignment=TA_CENTER,
    ))
    return styles


def p(text, style="Body"):
    return Paragraph(text, STYLES[style])


def bullets(items, style="Body", color=BLUE):
    return ListFlowable(
        [ListItem(p(item, style), leftIndent=0) for item in items],
        bulletType="bullet",
        start="disc",
        leftIndent=14,
        bulletFontName="AdSansBold",
        bulletFontSize=5.5,
        bulletColor=color,
        spaceAfter=5,
    )


def tag(text, color=BLUE):
    return Paragraph(
        f'<font color="{color.hexval()}"><b>{text}</b></font>',
        STYLES["Small"],
    )


def page_header(title, intro=None):
    story = [p("ADMISCIBLE - ESPACES ET OFFRES", "Kicker"), p(title, "H1")]
    if intro:
        story.append(p(intro, "Body"))
    return story


def rights_table(rows, col_widths=None):
    table_data = [[p("Espace", "TableHead"), p("Accès gratuit", "TableHead"), p("Accès payant", "TableHead"), p("But concret", "TableHead")]]
    for row in rows:
        table_data.append([p(row[0], "TableBold"), p(row[1], "TableCell"), p(row[2], "TableCell"), p(row[3], "TableCell")])
    table = Table(table_data, colWidths=col_widths or [3.0 * cm, 4.65 * cm, 4.65 * cm, 4.0 * cm], repeatRows=1)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLUE_DARK),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("FONTNAME", (0, 0), (-1, 0), "AdSansBold"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.45, BORDER),
        ("BACKGROUND", (0, 1), (-1, -1), WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, SOFT]),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return table


def two_col_table(rows, left="Fonction", right="Détail"):
    table_data = [[p(left, "TableHead"), p(right, "TableHead")]]
    for key, value in rows:
        table_data.append([p(key, "TableBold"), p(value, "TableCell")])
    table = Table(table_data, colWidths=[4.4 * cm, 11.6 * cm], repeatRows=1)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLUE_MID),
        ("GRID", (0, 0), (-1, -1), 0.45, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, SOFT]),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return table


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(BORDER)
    canvas.line(doc.leftMargin, 1.15 * cm, A4[0] - doc.rightMargin, 1.15 * cm)
    canvas.setFont("AdSans", 7.2)
    canvas.setFillColor(colors.HexColor("#7a8696"))
    canvas.drawCentredString(A4[0] / 2, 0.72 * cm, f"Admiscible - Espaces et offres - {date.today().strftime('%d/%m/%Y')} - Page {doc.page}")
    canvas.restoreState()


def cover():
    return [
        Table(
            [[AdLogo(), p("<b>Admiscible</b><br/><font color='#526173'>Éducation, sans friction</font>", "Body")]],
            colWidths=[1.85 * cm, 12 * cm],
            style=TableStyle([("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 8)]),
        ),
        CoverScene(),
        Spacer(1, 0.45 * cm),
        p("Document d'offre", "Kicker"),
        p("Espaces utilisateurs et droits d'accès", "CoverTitle"),
        p("Présentation concrète des espaces élève, parents, enseignants et établissements, avec une distinction claire entre contenus gratuits et fonctionnalités payantes.", "CoverSub"),
        Table(
            [[
                AccentCard("Contenus gratuits", "Cours, méthodes, exercices, annales et orientation accessibles librement.", GREEN),
                AccentCard("Suivi payant", "Priorités, planning, bilans, cahier d'erreurs et accompagnement famille.", BLUE),
                AccentCard("Déploiement encadré", "Offres enseignants et établissements à cadrer par contrat.", PURPLE),
            ]],
            colWidths=[5.35 * cm, 5.35 * cm, 5.35 * cm],
            style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 5)]),
        ),
        Spacer(1, 0.55 * cm),
        p("<b>Important :</b> les prix ne sont pas encore indiqués dans le site. Ce document fixe donc le périmètre fonctionnel gratuit/payant. Les montants, périodes d'essai, modalités Stripe, CGV et conditions de résiliation restent à valider avant mise en vente.", "Note"),
    ]


def model_page():
    story = page_header(
        "1. Le modèle général",
        "Admiscible doit être compris comme un service freemium : le savoir et l'entraînement restent ouverts, tandis que le suivi personnel, familial ou collectif finance le service."
    )
    story.append(p("Phrase simple pour parent ou établissement", "H2"))
    story.append(p("Personne ne paie pour accéder aux cours, méthodes, exercices, annales ou ressources d'orientation. L'abonnement finance les espaces qui conservent des données, organisent le travail, produisent des bilans et accompagnent la progression dans le temps.", "Quote"))
    story.append(p("Ce qui reste gratuit", "H2"))
    story.append(bullets([
        "Consulter les fiches de cours par niveau, filière et matière.",
        "Accéder aux méthodes, démarches types, exercices guidés et annales.",
        "Utiliser les pages d'orientation, d'aide, de recherche et de présentation.",
        "Comprendre le fonctionnement du site avant de créer un compte ou de s'abonner.",
    ]))
    story.append(p("Ce qui devient payant", "H2"))
    story.append(bullets([
        "Créer un espace de suivi qui conserve une progression personnelle.",
        "Planifier le travail : priorités, to-do list, calendrier, sessions focus.",
        "Exploiter des traces : notes, erreurs, bilans, régularité, historiques.",
        "Aider une famille, un enseignant ou un établissement à suivre plusieurs élèves.",
    ], color=PURPLE))
    story.append(p("Positionnement recommandé", "H2"))
    story.append(rights_table([
        ("Contenus", "Ouverts sans abonnement.", "Aucun verrou sur les ressources de base.", "Garantir l'égalité d'accès."),
        ("Compte élève", "Création possible pour démarrer.", "Suivi complet et historique durable.", "Organiser le travail individuel."),
        ("Famille", "Comprendre le site et les ressources.", "Suivi multi-élèves et bilan parent.", "Accompagner sans surveiller."),
        ("Enseignant", "Consulter et recommander des ressources.", "Espace de classe, séquences, exports.", "Structurer un usage pédagogique."),
        ("Établissement", "Lire les garanties et préparer un pilote.", "Déploiement, pilotage agrégé, support.", "Cadrer un usage collectif."),
    ]))
    return story


def student_page():
    story = page_header(
        "2. Espace élève",
        "L'espace élève répond à une question très simple : que dois-je travailler maintenant, et comment garder une trace de ce que j'ai fait ?"
    )
    story.append(p("Accès gratuit pour l'élève", "H2"))
    story.append(bullets([
        "Cours structurés par niveau, filière, matière et chapitre.",
        "Méthodes pour comprendre les démarches de résolution.",
        "Exercices types, corrections, sujets et annales.",
        "Orientation et ressources publiques utiles.",
        "Recherche guidée et navigation dans les contenus.",
    ]))
    story.append(p("Accès payant élève - suivi personnel", "H2"))
    story.append(two_col_table([
        ("Tableau de bord", "Vue synthétique du travail : progression, priorités, dernières actions et accès rapide aux outils."),
        ("Priorités du jour", "Transformer les contenus gratuits en plan de travail court : une notion, une méthode, un exercice, une erreur."),
        ("Planning et to-do list", "Organiser la semaine, planifier des sessions et cocher les actions terminées."),
        ("Timer focus", "Lancer des sessions de travail courtes, limiter la dispersion et suivre la régularité."),
        ("Notes", "Suivre ses résultats et comprendre les matières à renforcer. L'indicateur doit rester utile, pas culpabilisant."),
        ("Cahier d'erreurs", "Noter les erreurs importantes, les reformuler et prévoir une reprise. C'est une des fonctions les plus fortes de l'abonnement."),
        ("Progression sauvegardée", "Conserver les traces dans le temps : chapitres vus, exercices réalisés, erreurs reprises, objectifs atteints."),
    ]))
    story.append(p("Limite à formuler clairement", "H2"))
    story.append(p("L'abonnement élève ne vend pas le cours lui-même. Il vend l'accompagnement numérique autour du cours : organisation, mémoire du travail, priorités et bilans.", "Note"))
    return story


def parent_page():
    story = page_header(
        "3. Espace parents et famille",
        "Le parent ne doit pas se retrouver face à une interface d'élève. Il doit comprendre où en est son enfant, quoi regarder, et comment aider sans transformer le site en outil de surveillance."
    )
    story.append(p("Accès gratuit parent", "H2"))
    story.append(bullets([
        "Lire la présentation du site, l'aide et les garanties.",
        "Consulter gratuitement les cours, méthodes, exercices et annales.",
        "Comprendre ce que l'enfant peut travailler sans payer.",
        "Accéder aux pages de confidentialité, RGPD, signalement et mentions légales.",
        "Consulter les pages d'orientation et les ressources publiques.",
    ]))
    story.append(p("Accès payant famille", "H2"))
    story.append(two_col_table([
        ("Tableau famille", "Suivre plusieurs élèves dans une vue simple : niveau, objectif, priorité, temps prévu, état d'avancement."),
        ("Priorités de la semaine", "Définir une priorité réaliste par élève : relire un cours, faire des exercices, corriger une erreur, préparer une évaluation."),
        ("Bilan parent", "Générer un bilan volontaire, lisible et imprimable. Le parent reçoit une synthèse, pas un flot de données."),
        ("Rituels famille", "Installer un cadre régulier : point du dimanche, correction d'une erreur, préparation d'un contrôle."),
        ("Accompagnement sans surveillance", "Le parent voit des repères utiles, sans classement social, sans score public et sans logique punitive."),
    ]))
    story.append(p("Message commercial recommandé", "H2"))
    story.append(p("L'abonnement famille sert aux parents qui veulent aider réellement, mais qui ne savent pas quoi regarder ni comment transformer le travail scolaire en routine simple.", "Quote"))
    return story


def teacher_page():
    story = page_header(
        "4. Espace enseignants",
        "L'espace enseignant doit rester opérationnel : préparer une séquence, recommander une ressource, demander une trace, exporter un bilan."
    )
    story.append(p("Accès gratuit enseignant", "H2"))
    story.append(bullets([
        "Consulter les contenus comme tout utilisateur : cours, méthodes, exercices, annales.",
        "Envoyer un lien vers une ressource précise à un élève ou à une classe.",
        "Utiliser les pages programmes, sources, méthode et orientation.",
        "Préparer manuellement une activité à partir des ressources ouvertes.",
    ]))
    story.append(p("Accès payant enseignant ou inclus dans une offre établissement", "H2"))
    story.append(two_col_table([
        ("Séquences pédagogiques", "Créer une séquence courte : objectif, prérequis, ressource, activité, trace demandée."),
        ("Recommandations ciblées", "Associer un chapitre, une méthode ou un exercice à un besoin de classe : reprise, consolidation, remédiation."),
        ("Espace classe", "Gérer localement une liste de groupes ou d'élèves, sans nécessairement exposer des données nominatives en ligne."),
        ("Exports", "Exporter une synthèse ou une préparation pour conserver une trace hors plateforme."),
        ("Bilan collectif", "Observer des tendances agrégées : notions travaillées, erreurs fréquentes, ressources utilisées."),
        ("Cadre de prudence", "Pas de notation automatique, pas de classement nominatif, pas de substitution au jugement pédagogique."),
    ]))
    story.append(p("Lecture institutionnelle", "H2"))
    story.append(p("Pour un enseignant, Admiscible doit faire gagner du temps sur l'accès aux bonnes ressources, pas ajouter une couche administrative. La valeur payante doit donc porter sur la préparation, la recommandation, l'export et le suivi collectif maîtrisé.", "Note"))
    return story


def establishment_page():
    story = page_header(
        "5. Espace établissements",
        "Un établissement n'achète pas seulement des fonctionnalités. Il achète un cadre : responsabilités, données, sécurité, pilote, support et indicateurs."
    )
    story.append(p("Accès gratuit établissement", "H2"))
    story.append(bullets([
        "Lire la fiche de présentation, les pages de conformité, sécurité, accessibilité et RGPD.",
        "Consulter les ressources ouvertes pour évaluer la qualité pédagogique.",
        "Tester un parcours public sans données sensibles.",
        "Identifier les publics concernés : élèves, familles, enseignants, référents numériques.",
    ]))
    story.append(p("Offre payante établissement - à contractualiser", "H2"))
    story.append(two_col_table([
        ("Pilote cadré", "Déploiement limité sur un niveau, un groupe ou une période, avec objectifs mesurables et retour d'expérience."),
        ("Administration", "Gestion des accès, rôles, périmètres, référents, support et règles d'usage."),
        ("Pilotage anonymisé", "Indicateurs agrégés sans classement nominatif : usage, régularité, types de ressources, besoins récurrents."),
        ("Support et formation", "Accompagnement des équipes, documentation, prise en main et canal de signalement."),
        ("Cadre RGPD", "Finalités, données, durée de conservation, information des familles, suppression et responsabilités."),
        ("Accessibilité et sécurité", "Suivi des engagements, corrections, incidents et amélioration continue."),
    ]))
    story.append(p("Ce qu'il faut éviter", "H2"))
    story.append(bullets([
        "Promettre un déploiement massif sans pilote.",
        "Afficher des classements d'élèves ou des scores publics.",
        "Présenter Admiscible comme un site officiel de l'État.",
        "Collecter plus de données que nécessaire pour le service rendu.",
    ], color=RED))
    return story


def offer_matrix_page():
    story = page_header(
        "6. Synthèse des droits",
        "Cette matrice peut servir de base pour une page d'abonnement, un devis ou une présentation partenaire."
    )
    story.append(rights_table([
        ("Visiteur", "Cours, méthodes, exercices, annales, orientation, aide.", "Aucun accès payant nécessaire.", "Découvrir et travailler sans compte."),
        ("Élève gratuit", "Même accès aux ressources publiques, recherche et parcours de contenu.", "Passage au suivi si l'élève veut sauvegarder et organiser.", "Apprendre sans barrière financière."),
        ("Élève abonné", "Toutes les ressources gratuites restent incluses.", "Dashboard, priorités, planning, timer, notes, cahier d'erreurs, progression.", "Tenir une routine de travail."),
        ("Parent gratuit", "Comprendre le site, consulter ressources et garanties.", "Passage famille si besoin de suivi multi-élèves.", "Savoir ce que l'enfant utilise."),
        ("Famille abonnée", "Ressources gratuites incluses.", "Tableau famille, priorités, bilans, rituels, suivi volontaire.", "Accompagner sans surveiller."),
        ("Enseignant", "Consultation et recommandation simple de ressources.", "Séquences, espace classe, exports, bilan collectif.", "Structurer l'usage pédagogique."),
        ("Établissement", "Évaluation du service et documents de cadrage.", "Pilote, administration, support, pilotage anonymisé, cadre RGPD.", "Déployer proprement."),
    ], col_widths=[3.15 * cm, 4.55 * cm, 4.75 * cm, 3.85 * cm]))
    story.append(Spacer(1, 0.25 * cm))
    story.append(p("Statut actuel à afficher sans ambiguïté", "H2"))
    story.append(two_col_table([
        ("Paiement", "Le site prévoit Stripe, mais les prix définitifs, CGV et parcours d'abonnement doivent être validés avant activation publique."),
        ("Données", "Les espaces de suivi impliquent des données personnelles : il faut conserver une politique claire de minimisation, suppression et consentement."),
        ("Mineurs", "Pour les élèves mineurs, le cadre doit prévoir l'information et, lorsque nécessaire, l'accord du représentant légal."),
        ("Institutionnel", "Admiscible peut adopter des exigences de clarté, sécurité et accessibilité, mais ne doit pas se présenter comme un service officiel de l'État."),
    ]))
    return story


def pricing_page():
    story = page_header(
        "7. Proposition de structure commerciale",
        "Les montants ne sont pas fixés dans le site. La structure ci-dessous détaille une logique d'offre sans figer les prix."
    )
    story.append(rights_table([
        ("Gratuit", "Ressources publiques illimitées.", "Aucun paiement.", "Installer la confiance et l'égalité d'accès."),
        ("Élève Plus", "Toutes les ressources.", "Suivi personnel complet.", "Créer une habitude de travail."),
        ("Famille", "Toutes les ressources pour les enfants.", "Multi-élèves, bilans, priorités, rituels.", "Aider sans se perdre."),
        ("Enseignant Pro", "Ressources et recherche.", "Séquences, recommandations, exports.", "Préparer et suivre une classe."),
        ("Établissement", "Audit et accès public.", "Pilote, support, comptes, pilotage agrégé.", "Déployer à l'échelle."),
    ], col_widths=[3.0 * cm, 4.4 * cm, 4.8 * cm, 4.1 * cm]))
    story.append(p("Recommandation de présentation", "H2"))
    story.append(bullets([
        "Ne pas mettre le prix au centre de la page d'accueil : d'abord expliquer le service et montrer la valeur.",
        "Créer une page abonnement claire, avec un tableau simple et des exemples d'usage par profil.",
        "Prévoir une vidéo de présentation qui explique les espaces avant de parler de paiement.",
        "Séparer l'offre famille de l'offre établissement : ce ne sont ni les mêmes besoins, ni les mêmes obligations.",
        "Ajouter une mention : les contenus de base restent gratuits, même sans abonnement.",
    ], color=GREEN))
    story.append(p("Phrase de vente sobre", "H2"))
    story.append(p("Vous ne payez pas pour accéder au savoir. Vous payez pour être accompagné dans la durée : organiser, suivre, corriger, reprendre et progresser sans vous disperser.", "Quote"))
    return story


def roadmap_page():
    story = page_header(
        "8. Points à finaliser avant vente publique",
        "Ce document peut être utilisé dès maintenant, mais certains points doivent être verrouillés avant d'ouvrir officiellement les abonnements."
    )
    story.append(two_col_table([
        ("Prix publics", "Définir les montants TTC, la période d'essai, les réductions éventuelles, les offres annuelles et les offres établissements."),
        ("Stripe", "Finaliser paiement, renouvellement, annulation, facture, webhooks et statut d'abonnement côté serveur."),
        ("CGV", "Ajouter des conditions générales de vente séparées des CGU si l'abonnement devient public."),
        ("Parcours parent", "Rendre l'espace famille parfaitement compréhensible : ce que le parent voit, ce qu'il ne voit pas, ce qui reste volontaire."),
        ("Parcours enseignant", "Clarifier ce qui est gratuit pour un professeur seul et ce qui relève d'une licence pro ou établissement."),
        ("Établissement", "Créer une offre pilote : durée, périmètre, support, indicateurs, responsable de traitement, clauses données."),
        ("Communication", "Faire une vidéo de présentation courte : ressources gratuites, suivi payant, espaces par profil, garanties."),
    ]))
    story.append(p("Conclusion", "H2"))
    story.append(p("Le bon positionnement est simple : Admiscible rend les ressources essentielles gratuites, puis propose des espaces de suivi payants pour ceux qui veulent transformer ces ressources en progression organisée. C'est lisible, défendable et compatible avec une image sérieuse auprès des familles comme des établissements.", "Quote"))
    return story


def build_pdf():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=2.1 * cm,
        rightMargin=2.1 * cm,
        topMargin=1.65 * cm,
        bottomMargin=1.45 * cm,
        title="Espaces et offres Admiscible",
        author="Admiscible",
    )
    story = []
    story.extend(cover())
    for page in [
        model_page,
        student_page,
        parent_page,
        teacher_page,
        establishment_page,
        offer_matrix_page,
        pricing_page,
        roadmap_page,
    ]:
        story.append(PageBreak())
        story.extend(page())
    doc.build(story, onFirstPage=footer, onLaterPages=footer)


if __name__ == "__main__":
    register_fonts()
    STYLES = build_styles()
    build_pdf()
    print(OUTPUT)

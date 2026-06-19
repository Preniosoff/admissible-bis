// Terminale générale — Spécialité SVT
// Programme officiel MEN 2020 (réforme du lycée, classe terminale)
// Tous les chapitres sont nouveaux (enrich: false)

export const DATA = [

// ══════════════════════════════════════════════════════════════
// THÈME 1 — GÉNÉTIQUE ET ÉVOLUTION
// ══════════════════════════════════════════════════════════════

{
  id: 'svt-tgen-meiose',
  matiere: 'svt',
  titre: 'Méiose et brassage génétique',
  ordre: 1,
  filiere: 'term-gen',
  enrich: false,
  sections: [
    {
      titre: 'Reproduction sexuée et cycle de développement',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Méiose et fécondation',
          contenu: `Chez les espèces à reproduction sexuée, le cycle de développement alterne deux phénomènes complémentaires :<br><ul><li>la <strong>méiose</strong> : division réductionnelle qui produit des <strong>cellules haploïdes</strong> (à $n$ chromosomes) à partir d'une cellule diploïde (à $2n$) ;</li><li>la <strong>fécondation</strong> : union de deux gamètes haploïdes qui rétablit la <strong>diploïdie</strong> ($n + n = 2n$).</li></ul>Ces deux étapes assurent la <strong>stabilité du caryotype</strong> de l'espèce au fil des générations.` },
        { type: 'def', label: 'DEF', titre: 'Haploïdie et diploïdie',
          contenu: `Une cellule est <strong>diploïde</strong> ($2n$) si ses chromosomes sont présents par <strong>paires d'homologues</strong> (chez l'Homme $2n = 46$).<br>Une cellule est <strong>haploïde</strong> ($n$) si elle ne possède <strong>qu'un seul exemplaire</strong> de chaque chromosome (gamètes humains : $n = 23$).<br>La méiose fait passer de l'état diploïde à l'état haploïde.` },
        { type: 'prop', label: 'PROP', titre: 'Place de la méiose dans le cycle',
          contenu: `Chez les animaux, l'organisme est diploïde ; seules les cellules de la lignée germinale subissent la méiose pour donner les <strong>gamètes</strong> (haploïdes).<br>La phase haploïde est <strong>réduite aux gamètes</strong>. La fécondation forme la <strong>cellule-œuf</strong> (zygote) diploïde, point de départ du nouvel individu.` },
        { type: 'ex', label: 'EX', titre: 'Établir un cycle chromosomique',
          contenu: `<strong>Énoncé</strong> : chez une espèce $2n = 8$, indiquer le nombre de chromosomes d'un gamète et de la cellule-œuf.<br><strong>Résolution</strong> : la méiose divise par deux le nombre de chromosomes : un gamète possède $n = 8/2 = 4$ chromosomes.<br>La fécondation additionne les deux lots : $4 + 4 = 8$ chromosomes dans la cellule-œuf, qui retrouve la diploïdie $2n = 8$.` },
      ]
    },
    {
      titre: 'Le déroulement de la méiose',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Deux divisions successives',
          contenu: `La méiose est une <strong>succession de deux divisions</strong> précédées d'<strong>une seule réplication</strong> de l'ADN :<br><ul><li><strong>Division I (réductionnelle)</strong> : sépare les <strong>chromosomes homologues</strong> → passage de $2n$ à $n$, les chromosomes restant à deux chromatides.</li><li><strong>Division II (équationnelle)</strong> : sépare les <strong>chromatides sœurs</strong> de chaque chromosome, comme une mitose.</li></ul>Bilan : une cellule diploïde donne <strong>4 cellules haploïdes</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Phases de la division réductionnelle',
          contenu: `<strong>Prophase I</strong> : condensation, appariement des homologues en <strong>bivalents</strong> (tétrades), possibilité de <strong>crossing-over</strong>.<br><strong>Métaphase I</strong> : les bivalents s'alignent sur le plan équatorial, chaque homologue de part et d'autre.<br><strong>Anaphase I</strong> : <strong>séparation des chromosomes homologues</strong> (les chromatides sœurs restent solidaires).<br><strong>Télophase I</strong> : formation de deux cellules à $n$ chromosomes à deux chromatides.` },
        { type: 'prop', label: 'PROP', titre: 'Évolution de la quantité d\'ADN',
          contenu: `En notant $q$ la quantité d'ADN d'un chromosome à une chromatide :<br><ul><li>après réplication (phase S) : $2q$ par chromosome ;</li><li>après division I : chaque cellule contient $n$ chromosomes à <strong>deux chromatides</strong> ;</li><li>après division II : chaque cellule contient $n$ chromosomes à <strong>une chromatide</strong>.</li></ul>La quantité totale d'ADN est divisée par deux à chaque division.` },
        { type: 'ex', label: 'EX', titre: 'Reconnaître une phase sur un schéma',
          contenu: `<strong>Énoncé</strong> : sur un schéma, des chromosomes à deux chromatides sont séparés et migrent vers les pôles, par paires d'homologues. Quelle phase ?<br><strong>Résolution</strong> : la séparation porte sur des chromosomes <strong>entiers (deux chromatides)</strong> et non sur des chromatides : il s'agit de l'<strong>anaphase I</strong> de méiose. En anaphase II, ce sont les chromatides sœurs qui se sépareraient.` },
      ]
    },
    {
      titre: 'Le brassage interchromosomique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Brassage interchromosomique',
          contenu: `Le <strong>brassage interchromosomique</strong> résulte de la <strong>répartition aléatoire des chromosomes homologues</strong> de chaque paire vers l'un ou l'autre pôle lors de l'<strong>anaphase I</strong>.<br>Chaque paire se répartit indépendamment des autres : les combinaisons de chromosomes parentaux dans les gamètes sont multiples.` },
        { type: 'th', label: 'THM', titre: 'Nombre de combinaisons',
          contenu: `Pour un organisme à $n$ paires de chromosomes, le brassage interchromosomique produit <strong>$2^{n}$ combinaisons</strong> chromosomiques différentes de gamètes.<br>Chez l'Homme ($n = 23$) : $2^{23} \\approx 8,4$ millions de combinaisons, par ce seul brassage.` },
        { type: 'prop', label: 'PROP', titre: 'Gènes indépendants',
          contenu: `Deux gènes situés sur des <strong>chromosomes différents</strong> sont dits <strong>indépendants</strong>. Au croisement test d'un double hétérozygote, ils donnent <strong>quatre types de gamètes équiprobables</strong> (25 % chacun), soit une descendance dans les proportions <strong>1 : 1 : 1 : 1</strong>.<br>L'équiprobabilité des quatre phénotypes signe le brassage interchromosomique.` },
        { type: 'ex', label: 'EX', titre: 'Interpréter un test-cross de gènes indépendants',
          contenu: `<strong>Énoncé</strong> : croisement d'un drosophile $[AB]$ double hétérozygote avec un double récessif $[ab]$. La descendance comprend 4 phénotypes à $\\approx 25\\,\\%$ chacun. Conclusion ?<br><strong>Résolution</strong> : les quatre phénotypes équiprobables (dont deux <strong>recombinés</strong> $[Ab]$ et $[aB]$ à 25 % chacun) montrent que les gamètes sont produits en proportions égales. Les gènes sont donc <strong>indépendants</strong> : brassage interchromosomique seul.` },
      ]
    },
    {
      titre: 'Le brassage intrachromosomique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Crossing-over',
          contenu: `Un <strong>crossing-over</strong> (enjambement) est un <strong>échange réciproque de portions de chromatides</strong> entre chromosomes homologues, lors de la <strong>prophase I</strong>.<br>Il crée des chromatides <strong>recombinées</strong> portant de nouvelles associations d'allèles : c'est le <strong>brassage intrachromosomique</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Gènes liés',
          contenu: `Deux gènes sur un <strong>même chromosome</strong> sont <strong>liés</strong>. Sans crossing-over, ils sont transmis ensemble (2 types de gamètes parentaux).<br>Le crossing-over génère des gamètes <strong>recombinés</strong>, mais <strong>moins fréquents</strong> que les parentaux : la descendance d'un test-cross montre 4 phénotypes en proportions <strong>inégales</strong>, parentaux majoritaires.` },
        { type: 'prop', label: 'PROP', titre: 'Distance génétique',
          contenu: `La <strong>fréquence des recombinés</strong> est d'autant plus grande que les deux gènes sont <strong>éloignés</strong> sur le chromosome (plus de place pour un enjambement).<br>On définit la distance génétique en <strong>centimorgans</strong> (cM) : 1 cM correspond à 1 % de gamètes recombinés. Cela permet de cartographier les gènes.` },
        { type: 'ex', label: 'EX', titre: 'Distinguer gènes liés / indépendants',
          contenu: `<strong>Énoncé</strong> : un test-cross donne 42 % $[AB]$, 41 % $[ab]$, 9 % $[Ab]$, 8 % $[aB]$. Conclure.<br><strong>Résolution</strong> : les phénotypes parentaux $[AB]$ et $[ab]$ sont <strong>majoritaires</strong> (83 %), les recombinés minoritaires (17 %). Les proportions sont <strong>inégales</strong> : les gènes sont <strong>liés</strong>. La fréquence de recombinaison (17 %) donne une distance de <strong>17 cM</strong> entre les deux gènes.` },
      ]
    },
    {
      titre: 'Brassage lors de la fécondation et anomalies',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Amplification par la fécondation',
          contenu: `La <strong>fécondation</strong> réunit au hasard <strong>deux gamètes</strong> issus chacun d'une méiose. Elle <strong>amplifie</strong> la diversité créée par les brassages.<br>Chez l'Homme, le seul brassage interchromosomique donne $2^{23}$ gamètes ; la fécondation porte le nombre de zygotes possibles à $2^{23} \\times 2^{23} \\approx 7 \\times 10^{13}$ combinaisons (sans compter les crossing-over).` },
        { type: 'def', label: 'DEF', titre: 'Anomalie de la méiose',
          contenu: `Un dysfonctionnement de la méiose peut produire des gamètes anormaux :<br><ul><li><strong>Non-disjonction</strong> : deux homologues (anaphase I) ou deux chromatides (anaphase II) migrent vers le même pôle → gamète à $n+1$ ou $n-1$ chromosomes.</li><li>Après fécondation : <strong>trisomie</strong> ($2n+1$) ou <strong>monosomie</strong> ($2n-1$).</li></ul>` },
        { type: 'prop', label: 'PROP', titre: 'Crossing-over inégal et familles multigéniques',
          contenu: `Un <strong>crossing-over inégal</strong> entre chromatides mal appariées peut <strong>dupliquer</strong> un gène sur un chromosome (et le supprimer sur l'autre).<br>Les copies dupliquées peuvent ensuite <strong>diverger par mutations</strong> et acquérir de nouvelles fonctions : c'est l'origine des <strong>familles multigéniques</strong> (ex. gènes des globines, gènes des opsines des récepteurs visuels).` },
        { type: 'ex', label: 'EX', titre: 'Expliquer une trisomie 21',
          contenu: `<strong>Énoncé</strong> : un caryotype montre trois chromosomes 21. Quelle est l'origine ?<br><strong>Résolution</strong> : un gamète possédait <strong>deux chromosomes 21</strong> (au lieu d'un), à cause d'une <strong>non-disjonction</strong> lors de la méiose d'un parent. La fécondation avec un gamète normal (un chromosome 21) donne $2 + 1 = 3$ chromosomes 21 : c'est la <strong>trisomie 21</strong>.` },
      ]
    }
  ]
},

{
  id: 'svt-tgen-diversification',
  matiere: 'svt',
  titre: 'Diversification des êtres vivants',
  ordre: 2,
  filiere: 'term-gen',
  enrich: false,
  sections: [
    {
      titre: 'Diversification génétique des génomes',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Sources de diversification du génome',
          contenu: `Le génome se diversifie par plusieurs mécanismes au-delà des mutations ponctuelles :<br><ul><li><strong>Duplications de gènes</strong> puis divergence (familles multigéniques) ;</li><li><strong>Transferts horizontaux</strong> de gènes entre espèces ;</li><li><strong>Hybridation</strong> et polyploïdisation, surtout chez les végétaux.</li></ul>Ces mécanismes augmentent la diversité du vivant sans toujours passer par la reproduction sexuée classique.` },
        { type: 'def', label: 'DEF', titre: 'Transfert horizontal de gènes',
          contenu: `Un <strong>transfert horizontal</strong> est le passage de matériel génétique <strong>entre individus sans filiation</strong> (et parfois entre espèces), par opposition au transfert <strong>vertical</strong> (parents → descendants).<br>Fréquent chez les bactéries (transfert de plasmides), il existe aussi entre espèces eucaryotes (ex. gènes d'origine virale intégrés dans des génomes).` },
        { type: 'prop', label: 'PROP', titre: 'Hybridation et polyploïdisation',
          contenu: `L'<strong>hybridation</strong> entre deux espèces proches, suivie d'un <strong>doublement du nombre de chromosomes</strong> (polyploïdisation), peut créer une <strong>nouvelle espèce</strong> fertile, isolée des deux parentes.<br>Ce mécanisme est majeur chez les <strong>plantes à fleurs</strong> (ex. blé, certaines spartines) : il génère une diversification rapide.` },
        { type: 'ex', label: 'EX', titre: 'Interpréter une famille multigénique',
          contenu: `<strong>Énoncé</strong> : les gènes des hémoglobines humaines (alpha, bêta, gamma…) présentent des séquences très semblables. Expliquer.<br><strong>Résolution</strong> : un gène ancestral a été <strong>dupliqué</strong> (crossing-over inégal). Les copies ont <strong>divergé par mutations</strong> au cours du temps, tout en gardant une parenté de séquence. Ces gènes forment une <strong>famille multigénique</strong> issue d'un même gène ancestral.` },
      ]
    },
    {
      titre: 'Diversification sans modification du génome',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Diversification phénotypique',
          contenu: `Des êtres vivants peuvent se diversifier <strong>sans modification de leur génome</strong>, par des mécanismes qui modifient le <strong>phénotype</strong> ou le mode de vie :<br><ul><li>associations (<strong>symbioses</strong>) ;</li><li>développement modulé par l'<strong>environnement</strong> (plasticité) ;</li><li>transmission de <strong>comportements</strong> par apprentissage (culture).</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Symbiose',
          contenu: `Une <strong>symbiose</strong> est une <strong>association durable et à bénéfice réciproque</strong> entre deux organismes d'espèces différentes.<br>Exemples : <strong>lichens</strong> (champignon + algue), <strong>mycorhizes</strong> (champignon + racines), coraux (cnidaire + zooxanthelles). La symbiose confère de nouvelles capacités sans changer les génomes : elle est une source de diversification.` },
        { type: 'prop', label: 'PROP', titre: 'Influence de l\'environnement',
          contenu: `Pour un même génotype, l'<strong>environnement</strong> peut produire des phénotypes différents (<strong>plasticité phénotypique</strong>) : forme des feuilles selon l'exposition, couleur du pelage selon la température, etc.<br>Cette variabilité d'origine non génétique élargit la diversité observable des individus.` },
        { type: 'prop', label: 'PROP', titre: 'Diversification comportementale et culture',
          contenu: `Des comportements nouveaux peuvent apparaître chez un individu puis se <strong>transmettre par apprentissage</strong> (imitation) au sein d'un groupe : on parle de <strong>culture</strong> (ex. lavage de patates douces chez des macaques, chants d'oiseaux).<br>Ces innovations comportementales se diffusent <strong>sans modification du génome</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Identifier une diversification non génétique',
          contenu: `<strong>Énoncé</strong> : des mésanges d'une région ouvrent les bouteilles de lait ; ce comportement se répand dans la population. Origine de la diversification ?<br><strong>Résolution</strong> : le comportement n'est pas codé par un nouvel allèle ; il s'est répandu par <strong>apprentissage social</strong> (imitation). C'est une diversification <strong>culturelle</strong>, donc <strong>sans modification du génome</strong>.` },
      ]
    },
    {
      titre: 'Gènes du développement et diversification morphologique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Gènes du développement',
          contenu: `Les <strong>gènes du développement</strong> contrôlent la <strong>mise en place du plan d'organisation</strong> de l'embryon (axes, segments, position des organes). Les <strong>gènes homéotiques (Hox)</strong> en sont un exemple majeur.<br>Ils s'expriment dans un ordre précis et déterminent l'identité des différentes régions du corps.` },
        { type: 'prop', label: 'PROP', titre: 'Diversification par modification de l\'expression',
          contenu: `Une <strong>petite modification</strong> de la <strong>chronologie</strong> ou de l'<strong>intensité d'expression</strong> de ces gènes peut entraîner d'<strong>importants changements morphologiques</strong> (taille d'un membre, nombre de segments…).<br>La diversité des formes du vivant ne tient donc pas qu'au nombre de gènes, mais surtout à la <strong>régulation</strong> de leur expression.` },
        { type: 'prop', label: 'PROP', titre: 'Conservation des gènes du développement',
          contenu: `Les gènes du développement sont <strong>très conservés</strong> entre espèces parfois très éloignées (ex. gènes Hox communs aux insectes et aux vertébrés).<br>Cette conservation est un <strong>argument en faveur d'une origine commune</strong> : des espèces variées partagent une même « boîte à outils » génétique, dont la régulation diffère.` },
        { type: 'ex', label: 'EX', titre: 'Expliquer un changement de plan corporel',
          contenu: `<strong>Énoncé</strong> : une mutation d'un gène homéotique fait pousser des pattes à la place des antennes chez la drosophile. Interpréter.<br><strong>Résolution</strong> : le gène homéotique attribue l'<strong>identité</strong> d'un segment. Sa mutation fait que le segment de l'antenne « croit » être un segment porteur de pattes : le développement y construit des <strong>pattes</strong>. Cela montre le rôle des gènes du développement dans la diversité des formes.` },
      ]
    },
    {
      titre: 'Diversification du vivant : bilan',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Multiplicité des mécanismes',
          contenu: `La diversité du vivant résulte de mécanismes <strong>génétiques</strong> (mutations, duplications, transferts, hybridation, régulation du développement) <strong>et non génétiques</strong> (symbioses, plasticité, transmission culturelle).<br>Ces mécanismes agissent souvent <strong>conjointement</strong> et expliquent l'extraordinaire variété des êtres vivants.` },
        { type: 'def', label: 'DEF', titre: 'Innovation et biodiversité',
          contenu: `Une <strong>innovation</strong> (nouvel organe, nouvelle fonction, nouvelle association) peut ouvrir de <strong>nouvelles possibilités</strong> et favoriser une diversification ultérieure (rayonnement).<br>La <strong>biodiversité</strong> actuelle est le résultat de cette accumulation d'innovations et de diversifications au cours de l'histoire de la vie.` },
        { type: 'prop', label: 'PROP', titre: 'Articulation avec l\'évolution',
          contenu: `La diversification <strong>produit la variabilité</strong> sur laquelle agissent ensuite les mécanismes de l'évolution (<strong>sélection</strong>, <strong>dérive</strong>).<br>Diversification et évolution sont donc <strong>complémentaires</strong> : l'une crée la diversité, l'autre en trie ou redistribue les formes au fil des générations.` },
        { type: 'ex', label: 'EX', titre: 'Classer des mécanismes de diversification',
          contenu: `<strong>Énoncé</strong> : classer en « avec » ou « sans » modification du génome : mutation, symbiose, polyploïdisation, apprentissage culturel.<br><strong>Résolution</strong> : <strong>avec</strong> modification du génome : mutation, polyploïdisation (hybridation). <strong>Sans</strong> modification du génome : symbiose, apprentissage culturel. Les deux catégories contribuent à la diversité du vivant.` },
      ]
    }
  ]
},

{
  id: 'svt-tgen-evolution',
  matiere: 'svt',
  titre: 'Mécanismes de l\'évolution et spéciation',
  ordre: 3,
  filiere: 'term-gen',
  enrich: false,
  sections: [
    {
      titre: 'Variation des allèles dans les populations',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Évolution biologique',
          contenu: `L'<strong>évolution</strong> est la <strong>modification au cours des générations de la composition génétique des populations</strong>, c'est-à-dire des <strong>fréquences alléliques</strong>.<br>Une population, et non un individu, évolue. L'unité d'évolution est la <strong>population</strong> (ensemble d'individus d'une même espèce vivant dans un même lieu et se reproduisant entre eux).` },
        { type: 'def', label: 'DEF', titre: 'Fréquence allélique',
          contenu: `La <strong>fréquence d'un allèle</strong> est la <strong>proportion</strong> de cet allèle parmi tous les allèles d'un gène dans une population.<br>$$f(a) = \\frac{\\text{nombre d'allèles } a}{\\text{nombre total d'allèles du gène}}$$L'évolution se mesure par la variation de ces fréquences d'une génération à l'autre.` },
        { type: 'prop', label: 'PROP', titre: 'Deux moteurs : sélection et dérive',
          contenu: `Les fréquences alléliques varient sous l'effet de deux mécanismes principaux :<br><ul><li>la <strong>sélection naturelle</strong> : effet <strong>orienté</strong> du milieu, favorise les allèles avantageux ;</li><li>la <strong>dérive génétique</strong> : variation <strong>aléatoire</strong> des fréquences, surtout marquée dans les <strong>petites populations</strong>.</li></ul>` },
      ]
    },
    {
      titre: 'La sélection naturelle',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Sélection naturelle',
          contenu: `La <strong>sélection naturelle</strong> (Darwin) est le <strong>tri des variations héréditaires</strong> par le milieu : les individus dont le phénotype est le mieux <strong>adapté</strong> survivent et se reproduisent davantage, transmettant plus leurs allèles.<br>Conséquence : les allèles <strong>avantageux</strong> deviennent plus fréquents au fil des générations.` },
        { type: 'def', label: 'DEF', titre: 'Valeur sélective (fitness)',
          contenu: `La <strong>valeur sélective</strong> d'un phénotype mesure son <strong>succès reproductif relatif</strong> (nombre de descendants viables et féconds) dans un milieu donné.<br>Plus un phénotype a une valeur sélective élevée, plus les allèles associés se répandent. Cette valeur dépend du <strong>milieu</strong> : un même allèle peut être favorable ici, défavorable ailleurs.` },
        { type: 'prop', label: 'PROP', titre: 'Sélection sexuelle',
          contenu: `La <strong>sélection sexuelle</strong> est un cas particulier : certains caractères augmentent le succès reproducteur en favorisant l'<strong>accès aux partenaires</strong> (parades, ornements, combats), même s'ils nuisent à la survie (ex. queue du paon).<br>Elle explique le <strong>dimorphisme sexuel</strong> et la persistance de caractères coûteux.` },
        { type: 'ex', label: 'EX', titre: 'La phalène du bouleau',
          contenu: `<strong>Énoncé</strong> : avant l'industrialisation, la phalène claire domine ; sur les troncs noircis par la pollution, la forme sombre devient majoritaire. Expliquer.<br><strong>Résolution</strong> : sur écorce noircie, la forme <strong>sombre</strong> est mieux <strong>camouflée</strong> des prédateurs : sa <strong>valeur sélective</strong> augmente. L'allèle « sombre » est <strong>sélectionné</strong> et sa fréquence croît. C'est un exemple de sélection naturelle observée dans le temps.` },
      ]
    },
    {
      titre: 'La dérive génétique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Dérive génétique',
          contenu: `La <strong>dérive génétique</strong> est la <strong>modification aléatoire</strong> des fréquences alléliques d'une génération à l'autre, due au <strong>hasard</strong> de la transmission des allèles (échantillonnage des gamètes).<br>Elle agit sur <strong>tous les allèles</strong>, qu'ils soient favorables, neutres ou défavorables.` },
        { type: 'prop', label: 'PROP', titre: 'Effet de la taille de population',
          contenu: `L'effet de la dérive est d'autant plus <strong>important</strong> que la population est <strong>petite</strong> :<br><ul><li>petite population : fortes fluctuations, un allèle peut rapidement <strong>disparaître</strong> ou se <strong>fixer</strong> (fréquence 1) ;</li><li>grande population : les fréquences sont plus <strong>stables</strong>, la dérive est faible.</li></ul>` },
        { type: 'prop', label: 'PROP', titre: 'Sélection et dérive : comparaison',
          contenu: `<ul><li>La <strong>sélection</strong> est <strong>orientée</strong> par l'environnement : elle adapte les populations.</li><li>La <strong>dérive</strong> est <strong>aléatoire</strong> : elle fait varier les fréquences au hasard et peut même éliminer un allèle avantageux dans une petite population.</li></ul>Les deux mécanismes agissent <strong>simultanément</strong> ; leur importance relative dépend de l'effectif.` },
        { type: 'ex', label: 'EX', titre: 'Effet fondateur',
          contenu: `<strong>Énoncé</strong> : quelques individus colonisent une île ; un allèle rare y devient très fréquent. Quel mécanisme ?<br><strong>Résolution</strong> : le petit groupe fondateur ne porte qu'un <strong>échantillon non représentatif</strong> des allèles de la population d'origine. Par <strong>dérive génétique</strong> (effet fondateur), certaines fréquences alléliques sont fortement modifiées au hasard.` },
      ]
    },
    {
      titre: 'Spéciation et notion d\'espèce',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Espèce (concept biologique)',
          contenu: `Une <strong>espèce</strong> est un ensemble de populations dont les individus peuvent se <strong>reproduire entre eux</strong> et engendrer une <strong>descendance viable et féconde</strong>, et qui sont <strong>isolés génétiquement</strong> des autres groupes.<br>Cette définition (concept biologique) a des limites : espèces fossiles, organismes asexués, hybrides féconds.` },
        { type: 'def', label: 'DEF', titre: 'Spéciation et isolement reproducteur',
          contenu: `La <strong>spéciation</strong> est l'<strong>apparition d'une nouvelle espèce</strong>. Elle suppose la mise en place d'un <strong>isolement reproducteur</strong> entre populations, qui interrompt les échanges de gènes.<br>L'isolement peut être <strong>géographique</strong> (séparation physique), <strong>écologique</strong>, <strong>temporel</strong> (périodes de reproduction décalées) ou <strong>comportemental</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Mécanisme de la spéciation',
          contenu: `Deux populations <strong>isolées</strong> évoluent <strong>indépendamment</strong> sous l'effet de la sélection et de la dérive : leurs patrimoines génétiques <strong>divergent</strong>.<br>Si la divergence devient telle que l'interfécondité disparaît, on obtient <strong>deux espèces distinctes</strong>. L'espèce est donc une réalité <strong>temporaire</strong> à l'échelle des temps géologiques.` },
        { type: 'ex', label: 'EX', titre: 'Spéciation par isolement géographique',
          contenu: `<strong>Énoncé</strong> : un fleuve sépare une population de singes en deux groupes. Après un long temps, les deux groupes ne se reproduisent plus entre eux. Expliquer.<br><strong>Résolution</strong> : la barrière géographique a créé un <strong>isolement reproducteur</strong>. Les deux populations ont <strong>divergé</strong> (sélection + dérive) jusqu'à perdre l'interfécondité : une <strong>spéciation</strong> a eu lieu, on a maintenant deux espèces.` },
      ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// THÈME 2 — À LA RECHERCHE DU PASSÉ GÉOLOGIQUE DE NOTRE PLANÈTE
// ══════════════════════════════════════════════════════════════

{
  id: 'svt-tgen-temps-geologique',
  matiere: 'svt',
  titre: 'La mesure du temps géologique et la datation',
  ordre: 4,
  filiere: 'term-gen',
  enrich: false,
  sections: [
    {
      titre: 'Datation relative',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Datation relative',
          contenu: `La <strong>datation relative</strong> ordonne les événements géologiques <strong>les uns par rapport aux autres</strong> (avant / après) sans donner d'âge en années.<br>Elle s'appuie sur des <strong>principes de chronologie</strong> appliqués aux structures observées (strates, failles, plis…).` },
        { type: 'prop', label: 'PROP', titre: 'Principes de la chronologie relative',
          contenu: `<ul><li><strong>Superposition</strong> : une couche est plus récente que celle qu'elle recouvre (séries non déformées).</li><li><strong>Recoupement</strong> : une structure (faille, filon) qui en recoupe une autre lui est postérieure.</li><li><strong>Inclusion</strong> : un élément inclus dans une roche est antérieur à celle-ci.</li><li><strong>Continuité</strong> : une même couche a le même âge sur toute son étendue.</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Principe d\'identité paléontologique',
          contenu: `Deux couches contenant les <strong>mêmes fossiles stratigraphiques</strong> ont le <strong>même âge</strong>.<br>Un <strong>fossile stratigraphique</strong> est une espèce à <strong>large répartition géographique</strong> mais à <strong>courte durée d'existence</strong> : il caractérise une tranche de temps précise (ex. ammonites, trilobites).` },
        { type: 'ex', label: 'EX', titre: 'Ordonner des événements',
          contenu: `<strong>Énoncé</strong> : une faille recoupe trois strates A (bas), B, C (haut), puis un filon de basalte recoupe la faille. Ordonner.<br><strong>Résolution</strong> : par <strong>superposition</strong>, A est la plus ancienne, puis B, puis C. Par <strong>recoupement</strong>, la faille est postérieure à C, et le filon postérieur à la faille. Chronologie : A → B → C → faille → filon.` },
      ]
    },
    {
      titre: 'Datation absolue : principe',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Radiochronologie',
          contenu: `La <strong>datation absolue</strong> donne un <strong>âge en années</strong>. La <strong>radiochronologie</strong> utilise la <strong>désintégration radioactive</strong> d'un isotope <strong>père</strong> (P) en isotope <strong>fils</strong> (F), à vitesse constante et indépendante des conditions extérieures.<br>On mesure les quantités de père et de fils dans la roche pour remonter à son âge.` },
        { type: 'def', label: 'DEF', titre: 'Demi-vie (période radioactive)',
          contenu: `La <strong>demi-vie</strong> $t_{1/2}$ est la durée au bout de laquelle <strong>la moitié</strong> des noyaux pères se sont désintégrés.<br>Au bout de $n$ demi-vies, il reste une fraction $\\left(\\dfrac{1}{2}\\right)^{n}$ de l'isotope père initial. Le choix du couple isotopique dépend de la durée à mesurer (carbone 14 pour le récent, couples à longue période pour les roches anciennes).` },
        { type: 'form', label: 'FORM', titre: 'Loi de décroissance radioactive',
          contenu: `Le nombre de noyaux pères $N$ décroît selon :<br>$$N(t) = N_{0} \\, e^{-\\lambda t}$$où $N_{0}$ est le nombre initial et $\\lambda$ la <strong>constante de désintégration</strong>.<br>Le lien avec la demi-vie : $$t_{1/2} = \\frac{\\ln 2}{\\lambda}$$Et l'âge se calcule par : $$t = \\frac{1}{\\lambda} \\ln\\!\\left(\\frac{N_{0}}{N}\\right)$$` },
        { type: 'prop', label: 'PROP', titre: 'Conditions de validité',
          contenu: `Pour qu'une datation soit valable :<br><ul><li>le <strong>chronomètre doit démarrer</strong> à un événement précis (fermeture du système : cristallisation d'un minéral, mort d'un organisme) ;</li><li>le système doit rester <strong>clos</strong> (ni perte ni gain de père ou de fils) ;</li><li>on doit connaître la quantité initiale de fils (souvent nulle, ou estimée).</li></ul>` },
      ]
    },
    {
      titre: 'Méthodes et exemples de datation absolue',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Datation au carbone 14',
          contenu: `Le <strong>carbone 14</strong> ($^{14}C$, $t_{1/2} \\approx 5\\,730$ ans) est produit dans l'atmosphère et incorporé par les êtres vivants. À la <strong>mort</strong>, l'apport cesse et le $^{14}C$ <strong>décroît</strong>.<br>Le rapport $^{14}C / ^{12}C$ résiduel donne l'âge. Méthode adaptée aux échantillons <strong>récents</strong> (jusqu'à $\\approx 50\\,000$ ans).` },
        { type: 'def', label: 'DEF', titre: 'Couples à longue période',
          contenu: `Pour les roches anciennes, on utilise des couples à <strong>longue demi-vie</strong> :<br><ul><li><strong>Potassium-Argon</strong> ($^{40}K \\to {}^{40}Ar$) : roches volcaniques ;</li><li><strong>Rubidium-Strontium</strong> ($^{87}Rb \\to {}^{87}Sr$) : roches anciennes.</li></ul>Le chronomètre démarre à la <strong>cristallisation</strong> du minéral à partir du magma.` },
        { type: 'ex', label: 'EX', titre: 'Calcul d\'âge par les demi-vies',
          contenu: `<strong>Énoncé</strong> : un échantillon ne contient plus que $\\frac{1}{8}$ de son carbone 14 initial. Quel âge ? ($t_{1/2} = 5\\,730$ ans)<br><strong>Résolution</strong> : $\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^{3}$, soit <strong>3 demi-vies</strong> écoulées.<br>$t = 3 \\times 5\\,730 = 17\\,190$ ans. L'échantillon a environ <strong>17 200 ans</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Utiliser la loi de décroissance',
          contenu: `<strong>Énoncé</strong> : une roche conserve 25 % de son potassium 40 ($t_{1/2} = 1,3$ Ga). Âge ?<br><strong>Résolution</strong> : $25\\,\\% = \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^{2}$, soit <strong>2 demi-vies</strong>.<br>$t = 2 \\times 1,3 = 2,6$ milliards d'années. (On peut aussi appliquer $t = \\frac{1}{\\lambda}\\ln\\frac{N_0}{N}$ avec $\\lambda = \\frac{\\ln 2}{t_{1/2}}$.)` },
      ]
    },
    {
      titre: 'Croiser les méthodes : l\'échelle des temps',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Échelle stratigraphique',
          contenu: `L'<strong>échelle des temps géologiques</strong> découpe l'histoire de la Terre (≈ 4,6 milliards d'années) en <strong>ères</strong> et <strong>périodes</strong> (Précambrien, Paléozoïque, Mésozoïque, Cénozoïque).<br>Les limites sont placées au niveau de <strong>changements majeurs</strong> (apparitions, crises biologiques) repérés par les fossiles.` },
        { type: 'prop', label: 'PROP', titre: 'Complémentarité relatif / absolu',
          contenu: `Les deux datations se <strong>complètent</strong> :<br><ul><li>la datation <strong>relative</strong> ordonne finement les événements et corrèle les couches (fossiles stratigraphiques) ;</li><li>la datation <strong>absolue</strong> attribue des <strong>âges chiffrés</strong> (radiochronologie).</li></ul>En les croisant, on calibre l'échelle des temps en années.` },
        { type: 'def', label: 'DEF', titre: 'Crises biologiques',
          contenu: `Une <strong>crise biologique</strong> est une <strong>extinction massive</strong> d'espèces sur un temps court, suivie d'un renouvellement des faunes et flores.<br>Elles servent de <strong>repères</strong> dans l'échelle des temps (ex. limite Crétacé-Paléogène, il y a 66 Ma, marquée par la disparition des dinosaures non aviens).` },
        { type: 'ex', label: 'EX', titre: 'Dater une couche par corrélation',
          contenu: `<strong>Énoncé</strong> : une couche contient une ammonite caractéristique d'un étage daté par ailleurs à 150 Ma. Quel est l'âge de la couche ?<br><strong>Résolution</strong> : par le <strong>principe d'identité paléontologique</strong>, la couche a le même âge que celles contenant ce même fossile stratigraphique. La calibration absolue donne donc un âge d'environ <strong>150 Ma</strong>.` },
      ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// THÈME — LE DOMAINE CONTINENTAL ET SA DYNAMIQUE
// ══════════════════════════════════════════════════════════════

{
  id: 'svt-tgen-domaine-continental',
  matiere: 'svt',
  titre: 'Le domaine continental et sa dynamique',
  ordre: 5,
  filiere: 'term-gen',
  enrich: false,
  sections: [
    {
      titre: 'La caractérisation de la croûte continentale',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Croûte continentale et croûte océanique',
          contenu: `La <strong>croûte continentale</strong> se distingue de la croûte océanique par :<br><ul><li>sa composition : <strong>granitique</strong> (granite, riche en silice et alumine) vs <strong>basaltique</strong> pour l'océanique ;</li><li>sa <strong>densité</strong> plus faible ($\\approx 2,7$ contre $\\approx 2,9$) ;</li><li>son <strong>épaisseur</strong> plus grande (30 km en moyenne, jusqu'à 70 km sous les montagnes) ;</li><li>son <strong>âge</strong> : très ancien (jusqu'à 4 Ga), bien plus que l'océanique (< 200 Ma).</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Isostasie',
          contenu: `L'<strong>isostasie</strong> est l'<strong>équilibre vertical</strong> de la lithosphère « flottant » sur l'asthénosphère plus dense, à la manière d'un iceberg.<br>Conséquence : un relief élevé est compensé en profondeur par une <strong>racine crustale</strong> (croûte épaissie). Plus une montagne est haute, plus sa racine est profonde.` },
        { type: 'prop', label: 'PROP', titre: 'Épaisseur et flux de chaleur',
          contenu: `L'épaisseur de la croûte se déduit de la <strong>sismique</strong> (discontinuité de <strong>Moho</strong>, où la vitesse des ondes augmente) : sous les chaînes, le Moho est plus profond (<strong>racine</strong>).<br>La croûte continentale, riche en <strong>éléments radioactifs</strong> (U, Th, K), produit une part importante du <strong>flux géothermique</strong> par leur désintégration.` },
        { type: 'ex', label: 'EX', titre: 'Estimer l\'épaisseur d\'une racine',
          contenu: `<strong>Énoncé</strong> : sous une plaine le Moho est à 30 km ; sous une chaîne il est à 60 km. Que peut-on dire ?<br><strong>Résolution</strong> : la croûte est <strong>épaissie</strong> sous la chaîne (60 km contre 30). Cet excès de 30 km est la <strong>racine crustale</strong> qui, par <strong>isostasie</strong>, compense en profondeur le relief élevé.` },
      ]
    },
    {
      titre: 'La formation des chaînes de montagnes',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Chaîne de collision',
          contenu: `Une <strong>chaîne de montagnes</strong> (orogenèse) résulte de la <strong>convergence</strong> de plaques, aboutissant à la <strong>collision</strong> de deux lithosphères continentales (ex. Alpes, Himalaya).<br>La collision <strong>épaissit</strong> la croûte continentale et crée des reliefs élevés.` },
        { type: 'prop', label: 'PROP', titre: 'Marqueurs de la convergence',
          contenu: `On reconnaît une ancienne convergence à ses <strong>marqueurs</strong> :<br><ul><li><strong>tectoniques</strong> : plis, failles inverses, nappes de charriage (raccourcissement et empilement) ;</li><li><strong>pétrographiques/métamorphiques</strong> : roches transformées en profondeur sous l'effet de la pression et de la température.</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Métamorphisme',
          contenu: `Le <strong>métamorphisme</strong> est la <strong>transformation à l'état solide</strong> d'une roche sous l'effet de variations de <strong>pression</strong> et de <strong>température</strong>, sans fusion.<br>Il modifie les <strong>minéraux</strong> sans changer la composition globale : les minéraux <strong>indices</strong> (ex. glaucophane, grenat, disthène) renseignent sur les conditions P-T subies, donc sur l'histoire de la roche.` },
        { type: 'ex', label: 'EX', titre: 'Reconstituer une histoire orogénique',
          contenu: `<strong>Énoncé</strong> : on trouve dans les Alpes des roches à glaucophane (HP-BT) puis des structures de collision. Interpréter.<br><strong>Résolution</strong> : le glaucophane indique une <strong>subduction</strong> (haute pression, basse température, enfouissement de la croûte). Les plis et nappes traduisent la <strong>collision</strong> ultérieure. La chaîne enregistre donc subduction puis collision.` },
      ]
    },
    {
      titre: 'La disparition des reliefs',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Altération et érosion',
          contenu: `Les reliefs sont détruits par :<br><ul><li>l'<strong>altération</strong> : désagrégation physique et chimique des roches en surface ;</li><li>l'<strong>érosion</strong> : arrachement et <strong>transport</strong> des produits (eau, vent, glace) ;</li><li>la <strong>sédimentation</strong> : dépôt des matériaux transportés dans les bassins.</li></ul>Ces processus <strong>aplanissent</strong> progressivement les montagnes.` },
        { type: 'prop', label: 'PROP', titre: 'Réajustement isostatique',
          contenu: `À mesure que l'érosion enlève de la matière au sommet, l'<strong>isostasie</strong> provoque une <strong>remontée</strong> de la chaîne (la racine « rebondit ») : c'est le <strong>réajustement isostatique</strong>.<br>Le relief diminue malgré tout, car l'érosion l'emporte ; la <strong>racine crustale</strong> finit par disparaître et la croûte retrouve une épaisseur normale.` },
        { type: 'prop', label: 'PROP', titre: 'Recyclage de la croûte continentale',
          contenu: `Les produits de l'érosion alimentent les <strong>sédiments</strong>, transformés en roches sédimentaires : la matière continentale est <strong>recyclée</strong> en surface.<br>Une partie est entraînée dans les zones de <strong>subduction</strong> et participe à la production de nouveaux magmas : la croûte continentale est en perpétuel <strong>renouvellement</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Expliquer un relief ancien arasé',
          contenu: `<strong>Énoncé</strong> : le Massif central est une vieille chaîne aux reliefs modestes, sans racine importante. Pourquoi ?<br><strong>Résolution</strong> : cette chaîne ancienne (hercynienne) a subi une longue <strong>érosion</strong>. Le <strong>réajustement isostatique</strong> a fait remonter la croûte tandis que la racine disparaissait : il ne reste qu'un relief <strong>aplani</strong>, témoin d'une orogenèse passée.` },
      ]
    },
    {
      titre: 'Production de la croûte continentale',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Magmatisme de subduction',
          contenu: `La croûte continentale se forme essentiellement aux <strong>zones de subduction</strong>. La plaque océanique qui plonge libère de l'<strong>eau</strong> qui abaisse la température de fusion du manteau sus-jacent.<br>Cette <strong>fusion partielle</strong> hydratée engendre des <strong>magmas</strong> qui, en remontant, produisent des roches de composition <strong>continentale</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Roches plutoniques et volcaniques',
          contenu: `Un même magma donne deux familles de roches selon son refroidissement :<br><ul><li>refroidissement <strong>lent</strong> en profondeur → roche <strong>plutonique</strong> à structure <strong>grenue</strong> (ex. <strong>granite</strong>) ;</li><li>refroidissement <strong>rapide</strong> en surface → roche <strong>volcanique</strong> à structure <strong>microlitique</strong> (ex. <strong>andésite</strong>).</li></ul>` },
        { type: 'prop', label: 'PROP', titre: 'Âge et croissance de la croûte',
          contenu: `La croûte continentale s'est formée <strong>progressivement</strong> au cours des temps géologiques ; certaines parties dépassent <strong>4 milliards d'années</strong>.<br>Contrairement à la croûte océanique sans cesse <strong>recyclée</strong> (subduction), la croûte continentale, peu dense, n'est pas entraînée en profondeur : elle s'<strong>accumule</strong> et conserve la mémoire de l'histoire de la planète.` },
        { type: 'ex', label: 'EX', titre: 'Distinguer granite et andésite',
          contenu: `<strong>Énoncé</strong> : on observe deux roches issues d'un même type de magma, l'une entièrement cristallisée à gros cristaux, l'autre avec des microlites et du verre. Interpréter.<br><strong>Résolution</strong> : la roche à <strong>gros cristaux</strong> (grenue) a refroidi <strong>lentement en profondeur</strong> : c'est un <strong>granite (plutonique)</strong>. La roche à microlites a refroidi <strong>vite en surface</strong> : c'est une roche <strong>volcanique (andésite)</strong>.` },
      ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// THÈME — CLIMAT : COMPRENDRE LES ENJEUX
// ══════════════════════════════════════════════════════════════

{
  id: 'svt-tgen-climat',
  matiere: 'svt',
  titre: 'Climat : comprendre et anticiper',
  ordre: 6,
  filiere: 'term-gen',
  enrich: false,
  sections: [
    {
      titre: 'Le bilan radiatif et l\'effet de serre',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Bilan radiatif terrestre',
          contenu: `Le <strong>bilan radiatif</strong> de la Terre compare l'énergie <strong>reçue</strong> du Soleil (rayonnement de courte longueur d'onde) et l'énergie <strong>émise</strong> par la Terre (rayonnement infrarouge).<br>À l'équilibre, énergie reçue = énergie émise, ce qui fixe la <strong>température moyenne</strong> de la planète.` },
        { type: 'def', label: 'DEF', titre: 'Albédo',
          contenu: `L'<strong>albédo</strong> est la <strong>fraction du rayonnement solaire réfléchie</strong> par une surface (entre 0 et 1).<br>Surfaces claires (neige, glace, nuages) : albédo élevé. Surfaces sombres (océan, forêt) : albédo faible. L'albédo influe directement sur l'énergie absorbée donc sur la température.` },
        { type: 'def', label: 'DEF', titre: 'Effet de serre',
          contenu: `Certains gaz atmosphériques (<strong>vapeur d'eau, $CO_2$, méthane</strong>…) absorbent le rayonnement <strong>infrarouge</strong> émis par la surface et en réémettent une partie vers le sol : c'est l'<strong>effet de serre</strong>.<br>Il <strong>réchauffe</strong> la basse atmosphère. Sans lui, la température moyenne serait d'environ $-18\\,°\\text{C}$ au lieu de $+15\\,°\\text{C}$.` },
        { type: 'ex', label: 'EX', titre: 'Raisonner sur une rétroaction',
          contenu: `<strong>Énoncé</strong> : un réchauffement fait fondre la banquise. Quel effet sur la température ?<br><strong>Résolution</strong> : la fonte remplace une surface claire (fort albédo) par l'océan sombre (faible albédo). La Terre <strong>absorbe plus</strong> d'énergie, ce qui <strong>amplifie le réchauffement</strong> : c'est une <strong>rétroaction positive</strong> (boucle amplificatrice).` },
      ]
    },
    {
      titre: 'Reconstituer les climats du passé',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Indices paléoclimatiques',
          contenu: `On reconstitue les climats anciens grâce à des <strong>archives</strong> et des <strong>indices indirects</strong> (proxies) :<br><ul><li><strong>carottes de glace</strong> : bulles d'air piégées, rapport isotopique de l'oxygène ;</li><li><strong>pollens</strong> fossiles (végétation = climat) ;</li><li><strong>fossiles</strong> et sédiments marins.</li></ul>` },
        { type: 'prop', label: 'PROP', titre: 'Thermomètre isotopique',
          contenu: `Le rapport <strong>$^{18}O / ^{16}O$</strong> dépend de la température : l'oxygène lourd ($^{18}O$) s'évapore et précipite différemment selon le froid.<br><ul><li>Dans la <strong>glace</strong> : un rapport faible en $^{18}O$ indique un climat <strong>froid</strong>.</li><li>Dans les <strong>carbonates marins</strong> (coquilles) : un rapport élevé indique des conditions <strong>froides / forte glaciation</strong>.</li></ul>` },
        { type: 'prop', label: 'PROP', titre: 'Lien CO₂ – température au Quaternaire',
          contenu: `Les carottes de glace montrent que, sur les derniers centaines de milliers d'années, la <strong>température</strong> et la <strong>teneur en $CO_2$</strong> varient <strong>de façon couplée</strong> (alternance de périodes glaciaires et interglaciaires).<br>Ces variations naturelles sont liées notamment aux <strong>paramètres orbitaux de Milankovitch</strong> (excentricité, obliquité, précession).` },
        { type: 'ex', label: 'EX', titre: 'Exploiter une carotte de glace',
          contenu: `<strong>Énoncé</strong> : à une profondeur donnée, une carotte montre un $\\delta^{18}O$ faible et un $CO_2$ atmosphérique bas. Quel climat ?<br><strong>Résolution</strong> : un $\\delta^{18}O$ faible (dans la glace) traduit un climat <strong>froid</strong> ; un $CO_2$ bas est cohérent avec une <strong>période glaciaire</strong>. Les deux indices concordent : il s'agit d'un épisode <strong>glaciaire</strong>.` },
      ]
    },
    {
      titre: 'Le changement climatique actuel et futur',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Origine anthropique',
          contenu: `Depuis l'ère industrielle, la teneur en <strong>$CO_2$</strong> atmosphérique augmente rapidement, du fait de la <strong>combustion des énergies fossiles</strong> et de la déforestation.<br>Cette hausse <strong>renforce l'effet de serre</strong> et explique le <strong>réchauffement global</strong> observé : son origine est majoritairement <strong>anthropique</strong> (humaine).` },
        { type: 'def', label: 'DEF', titre: 'Modèles climatiques et scénarios',
          contenu: `Les <strong>modèles climatiques</strong> simulent l'évolution du climat à partir des lois physiques. Le GIEC (IPCC) établit des <strong>scénarios</strong> selon les émissions futures de gaz à effet de serre.<br>Les projections donnent une <strong>fourchette</strong> de réchauffement : plus les émissions sont fortes, plus la hausse de température prévue est importante.` },
        { type: 'prop', label: 'PROP', titre: 'Conséquences et enjeux',
          contenu: `Le réchauffement entraîne : <strong>fonte des glaces</strong>, <strong>hausse du niveau des mers</strong>, <strong>acidification des océans</strong>, intensification d'événements extrêmes, déplacement des espèces.<br>Les <strong>enjeux</strong> sont à la fois climatiques, écologiques et <strong>sociétaux</strong> ; ils appellent des mesures d'<strong>atténuation</strong> (réduire les émissions) et d'<strong>adaptation</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Comparer variations passées et actuelle',
          contenu: `<strong>Énoncé</strong> : pourquoi qualifier le réchauffement actuel d'exceptionnel par rapport aux variations naturelles ?<br><strong>Résolution</strong> : les variations naturelles (orbitales) se déroulent sur des <strong>dizaines de milliers d'années</strong>, alors que la hausse actuelle de $CO_2$ et de température se produit en <strong>quelques décennies</strong>. La <strong>vitesse</strong> et l'origine <strong>anthropique</strong> rendent ce changement exceptionnel.` },
      ]
    },
    {
      titre: 'Le cycle du carbone et les climats anciens',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Cycle du carbone',
          contenu: `Le <strong>cycle du carbone</strong> décrit les échanges de carbone entre les <strong>réservoirs</strong> : atmosphère, océans, biosphère, roches (et combustibles fossiles).<br>La teneur en <strong>$CO_2$ atmosphérique</strong> dépend de l'équilibre entre les flux ; elle influence directement l'effet de serre et donc le climat.` },
        { type: 'prop', label: 'PROP', titre: 'Piégeage et libération du carbone',
          contenu: `Le carbone est <strong>piégé</strong> sur de longues durées par la <strong>photosynthèse</strong>, l'<strong>enfouissement de matière organique</strong> (formant les combustibles fossiles) et la <strong>précipitation de carbonates</strong> (calcaires).<br>Il est <strong>libéré</strong> par la respiration, le volcanisme et, aujourd'hui, la <strong>combustion massive d'énergies fossiles</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Variations climatiques à grande échelle',
          contenu: `Aux échelles de <strong>millions d'années</strong>, le climat a connu des périodes <strong>chaudes</strong> (fort $CO_2$, ex. au Mésozoïque) et <strong>froides</strong> (glaciations).<br>Ces variations dépendent notamment de la <strong>teneur en $CO_2$</strong>, de la position des continents et du volcanisme : autant de paramètres qui modulent l'effet de serre sur le long terme.` },
        { type: 'ex', label: 'EX', titre: 'Relier combustibles fossiles et CO₂',
          contenu: `<strong>Énoncé</strong> : pourquoi la combustion du charbon et du pétrole augmente-t-elle le $CO_2$ atmosphérique ?<br><strong>Résolution</strong> : ces combustibles sont du <strong>carbone fossile</strong>, piégé il y a des millions d'années. Leur combustion le <strong>réinjecte rapidement</strong> sous forme de $CO_2$ dans l'atmosphère, déséquilibrant le cycle du carbone et renforçant l'effet de serre.` },
      ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// THÈME 3 — CORPS HUMAIN ET SANTÉ : LE FONCTIONNEMENT IMMUNITAIRE
// ══════════════════════════════════════════════════════════════

{
  id: 'svt-tgen-immunite-innee',
  matiere: 'svt',
  titre: 'L\'immunité innée',
  ordre: 7,
  filiere: 'term-gen',
  enrich: false,
  sections: [
    {
      titre: 'Caractéristiques de l\'immunité innée',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Immunité innée',
          contenu: `L'<strong>immunité innée</strong> est la <strong>première ligne de défense</strong> de l'organisme. Elle est :<br><ul><li><strong>immédiate</strong> (sans délai d'apprentissage) ;</li><li><strong>non spécifique</strong> (efficace contre de nombreux agresseurs) ;</li><li><strong>héréditaire</strong> et présente dès la naissance ;</li><li>partagée par de nombreux animaux (très <strong>conservée</strong> au cours de l'évolution).</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Cellules de l\'immunité innée',
          contenu: `Les cellules effectrices sont surtout des <strong>cellules phagocytaires</strong> (<strong>macrophages</strong>, <strong>granulocytes</strong>, <strong>cellules dendritiques</strong>) issues de la moelle osseuse.<br>Elles reconnaissent des <strong>motifs moléculaires</strong> communs à de nombreux microbes, grâce à des <strong>récepteurs</strong> spécifiques de ces motifs (non d'un antigène précis).` },
        { type: 'prop', label: 'PROP', titre: 'Barrières naturelles',
          contenu: `Avant toute réaction cellulaire, l'organisme dispose de <strong>barrières</strong> qui limitent l'entrée des microbes :<br><ul><li><strong>peau</strong> et <strong>muqueuses</strong> (barrières physiques) ;</li><li>sécrétions (mucus, larmes, acidité gastrique) ;</li><li><strong>microbiote</strong> qui occupe le terrain face aux pathogènes.</li></ul>` },
      ]
    },
    {
      titre: 'La réaction inflammatoire',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Réaction inflammatoire aiguë',
          contenu: `La <strong>réaction inflammatoire</strong> est la réponse immédiate locale à une infection ou une lésion. Elle se manifeste par <strong>quatre symptômes</strong> : <strong>rougeur, chaleur, gonflement (œdème), douleur</strong>.<br>Elle vise à éliminer l'agresseur et à préparer la réparation des tissus.` },
        { type: 'prop', label: 'PROP', titre: 'Médiateurs chimiques',
          contenu: `Les cellules sentinelles (mastocytes, macrophages) libèrent des <strong>médiateurs chimiques de l'inflammation</strong> (ex. <strong>histamine</strong>, prostaglandines, cytokines).<br>Ils provoquent une <strong>vasodilatation</strong> et une augmentation de la <strong>perméabilité</strong> des capillaires, permettant l'arrivée massive de plasma et de cellules immunitaires sur le site.` },
        { type: 'def', label: 'DEF', titre: 'Phagocytose',
          contenu: `La <strong>phagocytose</strong> est l'<strong>ingestion et la destruction</strong> d'un élément étranger par une cellule phagocytaire. Étapes : <strong>adhésion</strong>, <strong>ingestion</strong> (formation d'une vésicule), <strong>digestion</strong> enzymatique, puis <strong>rejet</strong> des débris.<br>Elle élimine directement de nombreux microbes.` },
        { type: 'ex', label: 'EX', titre: 'Expliquer un anti-inflammatoire',
          contenu: `<strong>Énoncé</strong> : un médicament anti-inflammatoire bloque la synthèse des prostaglandines. Quel effet ?<br><strong>Résolution</strong> : les prostaglandines sont des <strong>médiateurs de l'inflammation</strong>. Les bloquer réduit la vasodilatation, l'œdème et la douleur : les <strong>symptômes inflammatoires diminuent</strong>. (Ces médicaments traitent le symptôme, pas la cause infectieuse.)` },
      ]
    },
    {
      titre: 'Lien avec l\'immunité adaptative',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Cellules présentatrices d\'antigène',
          contenu: `Certaines cellules de l'immunité innée (surtout les <strong>cellules dendritiques</strong> et les macrophages) deviennent des <strong>cellules présentatrices de l'antigène (CPA)</strong> : après phagocytose, elles exposent des <strong>fragments de l'antigène</strong> à leur surface.<br>Elles font ainsi le <strong>lien</strong> entre immunité innée et immunité adaptative.` },
        { type: 'prop', label: 'PROP', titre: 'Déclenchement de la réponse adaptative',
          contenu: `Si l'immunité innée ne suffit pas, les CPA migrent vers les <strong>ganglions lymphatiques</strong> et y présentent l'antigène aux <strong>lymphocytes</strong>.<br>Cette présentation <strong>active</strong> la réponse <strong>adaptative</strong>, plus lente mais <strong>spécifique</strong> de l'agresseur.` },
        { type: 'ex', label: 'EX', titre: 'Ordonner innée puis adaptative',
          contenu: `<strong>Énoncé</strong> : lors d'une infection, replacer dans l'ordre : présentation de l'antigène, phagocytose, activation des lymphocytes, inflammation.<br><strong>Résolution</strong> : <strong>inflammation</strong> (immédiate) → <strong>phagocytose</strong> par les cellules innées → <strong>présentation de l'antigène</strong> par les CPA → <strong>activation des lymphocytes</strong> (réponse adaptative). L'innée précède et déclenche l'adaptative.` },
      ]
    },
    {
      titre: 'Maîtrise médicale de l\'inflammation',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Médicaments anti-inflammatoires',
          contenu: `Les <strong>anti-inflammatoires</strong> réduisent les symptômes de l'inflammation en bloquant la production de <strong>médiateurs chimiques</strong> (notamment les prostaglandines).<br>On distingue les <strong>AINS</strong> (anti-inflammatoires non stéroïdiens, ex. ibuprofène) et les <strong>corticoïdes</strong>. Ils traitent le symptôme, sans agir sur la cause infectieuse.` },
        { type: 'prop', label: 'PROP', titre: 'Intérêt et limites de l\'inflammation',
          contenu: `L'inflammation est <strong>utile</strong> : elle concentre les défenses sur le site et favorise la réparation.<br>Mais excessive ou chronique, elle devient <strong>néfaste</strong> (douleurs, lésions des tissus). D'où l'intérêt, dans certains cas, de la <strong>moduler</strong> par des médicaments, en évaluant le bénéfice attendu.` },
        { type: 'def', label: 'DEF', titre: 'Marqueurs de l\'inflammation',
          contenu: `Une inflammation s'accompagne de <strong>signes mesurables</strong> : élévation de certaines protéines dans le sang, augmentation du nombre de cellules immunitaires, parfois <strong>fièvre</strong>.<br>Ces marqueurs aident au <strong>diagnostic</strong> et au suivi de la réponse de l'organisme à une agression.` },
        { type: 'ex', label: 'EX', titre: 'Interpréter une prise de médicament',
          contenu: `<strong>Énoncé</strong> : un patient prend un AINS pour une entorse douloureuse et enflée. Que se passe-t-il ? Soigne-t-il l'entorse ?<br><strong>Résolution</strong> : l'AINS bloque les <strong>médiateurs de l'inflammation</strong> : la douleur et l'œdème <strong>diminuent</strong>. Mais il agit sur le <strong>symptôme</strong> inflammatoire, pas sur la lésion elle-même : il <strong>soulage</strong> sans réparer directement les tissus.` },
      ]
    }
  ]
},

{
  id: 'svt-tgen-immunite-adaptative',
  matiere: 'svt',
  titre: 'L\'immunité adaptative',
  ordre: 8,
  filiere: 'term-gen',
  enrich: false,
  sections: [
    {
      titre: 'Caractéristiques et acteurs',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Immunité adaptative',
          contenu: `L'<strong>immunité adaptative</strong> est une réponse <strong>spécifique</strong> d'un antigène donné. Elle est :<br><ul><li><strong>plus lente</strong> à se mettre en place (plusieurs jours) ;</li><li><strong>spécifique</strong> de l'antigène rencontré ;</li><li>dotée d'une <strong>mémoire</strong> ;</li><li>propre aux <strong>vertébrés</strong>.</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Antigène et lymphocytes',
          contenu: `Un <strong>antigène</strong> est une molécule reconnue comme <strong>étrangère</strong>, capable de déclencher une réponse immunitaire.<br>Les acteurs sont les <strong>lymphocytes</strong> : <strong>LB</strong> (immunité humorale, anticorps), <strong>LT4</strong> (auxiliaires) et <strong>LT8</strong> (cytotoxiques). Chaque lymphocyte porte un <strong>récepteur spécifique</strong> d'un antigène.` },
        { type: 'prop', label: 'PROP', titre: 'Sélection clonale',
          contenu: `L'organisme possède un immense répertoire de lymphocytes, chacun spécifique d'un antigène. L'antigène <strong>sélectionne</strong> les lymphocytes dont le récepteur lui correspond : c'est la <strong>sélection clonale</strong>.<br>Ces lymphocytes sont alors <strong>activés</strong>, se <strong>multiplient</strong> (amplification clonale) et se <strong>différencient</strong> en cellules effectrices et mémoire.` },
      ]
    },
    {
      titre: 'L\'immunité à médiation humorale',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Anticorps',
          contenu: `Un <strong>anticorps</strong> (immunoglobuline) est une <strong>protéine en forme de Y</strong> produite par les plasmocytes. Il possède deux <strong>sites de reconnaissance</strong> spécifiques d'un antigène (régions variables).<br>Il est <strong>soluble</strong> dans le plasma et les sécrétions : il agit à distance des cellules.` },
        { type: 'prop', label: 'PROP', titre: 'Du LB au plasmocyte',
          contenu: `Le <strong>LB</strong> dont l'anticorps de surface reconnaît l'antigène est sélectionné, puis <strong>activé</strong> avec l'aide des LT4. Il se multiplie et se différencie en :<br><ul><li><strong>plasmocytes</strong> : cellules sécrétrices d'anticorps ;</li><li><strong>LB mémoire</strong> : conservés pour une réponse future plus rapide.</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Complexe immun et neutralisation',
          contenu: `L'anticorps se fixe sur son antigène et forme un <strong>complexe immun</strong> (antigène-anticorps). Cela permet :<br><ul><li>la <strong>neutralisation</strong> de l'agent (toxine, virus rendu inopérant) ;</li><li>la <strong>facilitation de la phagocytose</strong> : le complexe est reconnu et éliminé par les phagocytes.</li></ul>` },
        { type: 'ex', label: 'EX', titre: 'Interpréter un test sérologique',
          contenu: `<strong>Énoncé</strong> : un test détecte des anticorps anti-X dans le sang d'un patient. Que peut-on en conclure ?<br><strong>Résolution</strong> : la présence d'<strong>anticorps spécifiques de X</strong> prouve que le système immunitaire a <strong>rencontré l'antigène X</strong> (infection passée/présente ou vaccination) et a déclenché une <strong>réponse humorale adaptative</strong> avec production d'anticorps par les plasmocytes.` },
      ]
    },
    {
      titre: 'L\'immunité à médiation cellulaire',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Lymphocytes T cytotoxiques (LT8)',
          contenu: `Les <strong>LT8</strong> sélectionnés et activés se différencient en <strong>lymphocytes T cytotoxiques (LTc)</strong>.<br>Ils détruisent les <strong>cellules infectées</strong> (par un virus) ou anormales (cancéreuses), en provoquant leur <strong>mort cellulaire</strong> après contact direct.` },
        { type: 'prop', label: 'PROP', titre: 'Rôle central des LT4',
          contenu: `Les <strong>LT4 auxiliaires</strong> sont les <strong>chefs d'orchestre</strong> de la réponse adaptative. Activés par les CPA, ils sécrètent des <strong>cytokines (interleukines)</strong> qui :<br><ul><li>amplifient la <strong>prolifération</strong> des LB et des LT8 ;</li><li>stimulent leur <strong>différenciation</strong> en cellules effectrices.</li></ul>Sans LT4, les réponses humorale et cytotoxique sont inefficaces.` },
        { type: 'prop', label: 'PROP', titre: 'Coopération des acteurs',
          contenu: `La réponse adaptative est une <strong>coopération</strong> : les CPA présentent l'antigène, les <strong>LT4</strong> coordonnent, les <strong>LB</strong> produisent les anticorps (voie humorale), les <strong>LT8</strong> détruisent les cellules infectées (voie cellulaire).<br>Chaque type de lymphocyte garde des cellules <strong>mémoire</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Choisir la voie adaptée',
          contenu: `<strong>Énoncé</strong> : contre un virus présent à l'intérieur de cellules, quelle voie de l'immunité adaptative est efficace ?<br><strong>Résolution</strong> : les anticorps n'atteignent pas un virus <strong>caché dans les cellules</strong>. C'est la voie <strong>cellulaire</strong> : les <strong>LT8 cytotoxiques</strong> détruisent les cellules infectées, supprimant ainsi les « usines » à virus.` },
      ]
    },
    {
      titre: 'Origine et tolérance du répertoire immunitaire',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Diversité des récepteurs',
          contenu: `Chaque lymphocyte porte un <strong>récepteur</strong> spécifique d'un antigène. L'organisme en produit des <strong>milliards de types différents</strong> : c'est le <strong>répertoire immunitaire</strong>.<br>Cette immense diversité provient d'un <strong>réarrangement aléatoire</strong> des gènes codant ces récepteurs, lors de la maturation des lymphocytes.` },
        { type: 'prop', label: 'PROP', titre: 'Maturation des lymphocytes',
          contenu: `Les lymphocytes naissent dans la <strong>moelle osseuse</strong>. Les <strong>LB</strong> y achèvent leur maturation ; les <strong>LT</strong> migrent vers le <strong>thymus</strong> pour y mûrir (d'où le « T »).<br>Au cours de cette maturation, le répertoire est constitué <strong>avant tout contact</strong> avec l'antigène.` },
        { type: 'def', label: 'DEF', titre: 'Tolérance au soi',
          contenu: `Les lymphocytes dont le récepteur reconnaît les molécules du <strong>soi</strong> (l'organisme lui-même) sont <strong>éliminés ou inactivés</strong> lors de la maturation : c'est l'acquisition de la <strong>tolérance au soi</strong>.<br>Elle évite que le système immunitaire ne s'attaque à ses propres cellules. Son défaut est à l'origine des <strong>maladies auto-immunes</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Expliquer une maladie auto-immune',
          contenu: `<strong>Énoncé</strong> : dans certaines maladies, le système immunitaire détruit des cellules de l'organisme. Quelle explication ?<br><strong>Résolution</strong> : la <strong>tolérance au soi</strong> est défaillante : des lymphocytes reconnaissant le <strong>soi</strong> n'ont pas été éliminés. Ils déclenchent une réponse immunitaire contre les cellules de l'organisme : c'est une <strong>maladie auto-immune</strong>.` },
      ]
    }
  ]
},

{
  id: 'svt-tgen-vaccination',
  matiere: 'svt',
  titre: 'Mémoire immunitaire et vaccination',
  ordre: 9,
  filiere: 'term-gen',
  enrich: false,
  sections: [
    {
      titre: 'La mémoire immunitaire',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Cellules mémoire',
          contenu: `Après une première réponse adaptative, une partie des lymphocytes activés se conserve sous forme de <strong>lymphocytes mémoire</strong> (LB et LT mémoire), à <strong>longue durée de vie</strong>.<br>Ils gardent la « trace » de l'antigène et permettent une réponse plus efficace lors d'un nouveau contact.` },
        { type: 'prop', label: 'PROP', titre: 'Réponses primaire et secondaire',
          contenu: `<ul><li><strong>Réponse primaire</strong> (premier contact) : <strong>lente</strong> (plusieurs jours), peu intense.</li><li><strong>Réponse secondaire</strong> (nouveau contact) : <strong>rapide</strong>, plus <strong>intense</strong> et durable, grâce aux cellules mémoire.</li></ul>La réponse secondaire est qualitativement et quantitativement supérieure : c'est la base de la protection durable.` },
        { type: 'ex', label: 'EX', titre: 'Lire des courbes d\'anticorps',
          contenu: `<strong>Énoncé</strong> : après un 1er contact avec un antigène, le taux d'anticorps monte lentement ; après un 2e contact, il monte très vite et plus haut. Expliquer.<br><strong>Résolution</strong> : la 1re injection induit une <strong>réponse primaire</strong> et crée des <strong>cellules mémoire</strong>. La 2e injection déclenche une <strong>réponse secondaire</strong> : les cellules mémoire réagissent <strong>rapidement</strong>, d'où une production d'anticorps plus précoce et abondante.` },
      ]
    },
    {
      titre: 'Le principe de la vaccination',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Vaccination',
          contenu: `La <strong>vaccination</strong> consiste à introduire un <strong>antigène inoffensif</strong> (agent atténué, inactivé, fragment, etc.) pour provoquer une <strong>réponse primaire</strong> et la formation de <strong>cellules mémoire</strong>, <strong>sans déclencher la maladie</strong>.<br>C'est une <strong>immunisation active et préventive</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Rôle des adjuvants et rappels',
          contenu: `Un <strong>adjuvant</strong> est une substance qui <strong>stimule</strong> la réponse innée et renforce l'efficacité du vaccin.<br>Les <strong>rappels</strong> provoquent à chaque fois une réponse secondaire qui <strong>entretient</strong> et augmente la mémoire immunitaire, garantissant une protection durable.` },
        { type: 'def', label: 'DEF', titre: 'Immunité collective',
          contenu: `L'<strong>immunité collective (de groupe)</strong> : lorsqu'une part suffisante de la population est vaccinée, la circulation de l'agent pathogène est <strong>freinée</strong>, protégeant indirectement les non-vaccinés (nourrissons, immunodéprimés).<br>La vaccination a ainsi un enjeu <strong>individuel</strong> et de <strong>santé publique</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Justifier l\'efficacité d\'un vaccin',
          contenu: `<strong>Énoncé</strong> : pourquoi une personne vaccinée tombe-t-elle rarement malade lors de l'infection réelle ?<br><strong>Résolution</strong> : le vaccin a déjà induit des <strong>cellules mémoire</strong> spécifiques de l'agent. Lors de l'infection, l'organisme déclenche une <strong>réponse secondaire rapide et intense</strong> qui élimine le pathogène <strong>avant l'apparition des symptômes</strong>.` },
      ]
    },
    {
      titre: 'Types de vaccins et stratégies',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Différentes natures de vaccins',
          contenu: `Selon l'antigène introduit, on distingue plusieurs types de vaccins :<br><ul><li>agents <strong>atténués</strong> (vivants, affaiblis) ;</li><li>agents <strong>inactivés</strong> (tués) ;</li><li><strong>fragments</strong> ou molécules de l'agent (sous-unités, anatoxines) ;</li><li>vaccins fondés sur l'<strong>information génétique</strong> de l'antigène (ex. ARN messager).</li></ul>Tous visent à présenter un antigène <strong>inoffensif</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Vaccination préventive vs sérothérapie',
          contenu: `<ul><li>La <strong>vaccination</strong> est <strong>préventive</strong> : elle stimule une réponse <strong>active</strong> de l'organisme (cellules mémoire) avant tout contact. Protection <strong>durable</strong>.</li><li>La <strong>sérothérapie</strong> injecte des <strong>anticorps déjà formés</strong> : protection <strong>immédiate</strong> mais <strong>passive</strong> et <strong>brève</strong> (pas de mémoire).</li></ul>` },
        { type: 'prop', label: 'PROP', titre: 'Limites et adaptation des vaccins',
          contenu: `Certains agents <strong>mutent</strong> rapidement (ex. virus de la grippe) : l'antigène change, ce qui peut rendre un vaccin <strong>moins efficace</strong>.<br>Il faut alors <strong>adapter régulièrement</strong> la composition vaccinale aux souches circulantes. La couverture vaccinale reste un enjeu de santé publique.` },
        { type: 'ex', label: 'EX', titre: 'Choisir vaccin ou sérum',
          contenu: `<strong>Énoncé</strong> : une personne non vaccinée se blesse et risque le tétanos immédiatement. Vaccin ou sérum ?<br><strong>Résolution</strong> : le vaccin agit en plusieurs jours (réponse primaire) : trop lent ici. On administre un <strong>sérum</strong> (anticorps préformés) pour une <strong>protection immédiate</strong> (immunité passive), éventuellement complété d'une vaccination pour le long terme.` },
      ]
    },
    {
      titre: 'Enjeux de santé publique',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Éradication et contrôle des maladies',
          contenu: `Une vaccination généralisée a permis l'<strong>éradication de la variole</strong> et le recul de nombreuses maladies (poliomyélite, rougeole…).<br>Une <strong>couverture vaccinale élevée</strong> est nécessaire pour atteindre l'<strong>immunité collective</strong> et interrompre la transmission d'un agent.` },
        { type: 'def', label: 'DEF', titre: 'Balance bénéfice-risque',
          contenu: `Toute stratégie vaccinale s'évalue par sa <strong>balance bénéfice-risque</strong> : les <strong>bénéfices</strong> (protection individuelle et collective, vies sauvées) sont comparés aux <strong>effets indésirables</strong> possibles.<br>Pour les vaccins recommandés, le bénéfice est <strong>très largement supérieur</strong> au risque, ce qui justifie leur usage.` },
        { type: 'prop', label: 'PROP', titre: 'Surveillance et vigilance',
          contenu: `Les vaccins font l'objet d'<strong>essais cliniques</strong> avant autorisation, puis d'une <strong>pharmacovigilance</strong> continue (suivi des effets après mise sur le marché).<br>Cette démarche scientifique garantit la <strong>sécurité</strong> et permet d'ajuster les recommandations en fonction des données.` },
        { type: 'ex', label: 'EX', titre: 'Argumenter l\'intérêt collectif',
          contenu: `<strong>Énoncé</strong> : pourquoi vacciner même les personnes peu à risque de forme grave ?<br><strong>Résolution</strong> : au-delà de la protection individuelle, une forte couverture crée l'<strong>immunité collective</strong> qui <strong>freine la circulation</strong> de l'agent. Cela protège indirectement les plus <strong>fragiles</strong> (nourrissons, immunodéprimés) qui ne peuvent être vaccinés ou répondent mal.` },
      ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// THÈME — RÉFLEXES, COMPORTEMENTS ET SYSTÈME NERVEUX
// ══════════════════════════════════════════════════════════════

{
  id: 'svt-tgen-reflexe-medullaire',
  matiere: 'svt',
  titre: 'Le réflexe myotatique et le message nerveux',
  ordre: 10,
  filiere: 'term-gen',
  enrich: false,
  sections: [
    {
      titre: 'Le réflexe myotatique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Réflexe myotatique',
          contenu: `Le <strong>réflexe myotatique</strong> est la <strong>contraction réflexe d'un muscle</strong> en réponse à son propre <strong>étirement</strong> (ex. réflexe rotulien).<br>Il est <strong>involontaire</strong>, <strong>rapide</strong>, <strong>stéréotypé</strong> et sert au maintien de la posture. Il constitue un modèle d'étude du fonctionnement nerveux.` },
        { type: 'def', label: 'DEF', titre: 'Arc réflexe',
          contenu: `L'<strong>arc réflexe</strong> est le trajet du message nerveux. Il comprend cinq éléments :<br><ul><li>un <strong>récepteur</strong> (fuseau neuromusculaire sensible à l'étirement) ;</li><li>un <strong>nerf afférent (sensitif)</strong> ;</li><li>un <strong>centre nerveux</strong> (moelle épinière) ;</li><li>un <strong>nerf efférent (moteur)</strong> ;</li><li>un <strong>effecteur</strong> (le muscle).</li></ul>` },
        { type: 'prop', label: 'PROP', titre: 'Réflexe monosynaptique',
          contenu: `Le réflexe myotatique est <strong>monosynaptique</strong> : il ne met en jeu qu'<strong>une seule synapse</strong> dans la moelle épinière, entre le neurone sensitif et le motoneurone.<br>Ce circuit court explique sa <strong>rapidité</strong>. Le corps cellulaire du neurone sensitif est situé dans le <strong>ganglion</strong> de la racine dorsale.` },
        { type: 'ex', label: 'EX', titre: 'Localiser une lésion',
          contenu: `<strong>Énoncé</strong> : un patient ne présente plus de réflexe rotulien d'un côté ; la sensibilité est conservée mais le muscle ne se contracte pas. Où est la lésion ?<br><strong>Résolution</strong> : la voie <strong>sensitive</strong> fonctionne (sensibilité intacte) et le centre aussi. L'absence de contraction malgré un muscle sain oriente vers une atteinte de la <strong>voie efférente (motoneurone / nerf moteur)</strong>.` },
      ]
    },
    {
      titre: 'Le neurone et le message nerveux',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Neurone',
          contenu: `Le <strong>neurone</strong> est la cellule de base du système nerveux. Il comprend un <strong>corps cellulaire</strong>, des <strong>dendrites</strong> (réception) et un <strong>axone</strong> (conduction du message).<br>Il est spécialisé dans la <strong>réception</strong>, le <strong>traitement</strong> et la <strong>transmission</strong> de l'information sous forme de signaux électriques.` },
        { type: 'def', label: 'DEF', titre: 'Potentiel d\'action',
          contenu: `Le message nerveux le long de l'axone est codé par des <strong>potentiels d'action (PA)</strong> : de brèves inversions du potentiel de la membrane.<br>Le PA obéit à la loi du <strong>tout ou rien</strong> : il a une <strong>amplitude constante</strong>. Il se <strong>propage</strong> sans s'atténuer jusqu'à l'extrémité de l'axone.` },
        { type: 'prop', label: 'PROP', titre: 'Codage de l\'intensité',
          contenu: `Comme le PA a une amplitude fixe, l'intensité du stimulus est codée par la <strong>fréquence des potentiels d'action</strong> :<br><ul><li>stimulus faible → faible fréquence de PA ;</li><li>stimulus intense → fréquence élevée de PA.</li></ul>C'est un <strong>codage en fréquence</strong> (et non en amplitude).` },
        { type: 'ex', label: 'EX', titre: 'Interpréter un enregistrement',
          contenu: `<strong>Énoncé</strong> : on augmente l'étirement d'un muscle et on enregistre davantage de potentiels d'action par seconde sur le nerf sensitif. Interpréter.<br><strong>Résolution</strong> : l'amplitude des PA ne change pas (tout ou rien). C'est leur <strong>fréquence</strong> qui augmente : un étirement plus fort est codé par une <strong>fréquence de PA plus élevée</strong> (codage en fréquence de l'intensité).` },
      ]
    },
    {
      titre: 'La synapse',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Synapse chimique',
          contenu: `La <strong>synapse</strong> est la zone de communication entre deux neurones, ou entre un neurone et un muscle (<strong>synapse neuromusculaire</strong>).<br>Une synapse chimique comprend l'<strong>élément présynaptique</strong>, la <strong>fente synaptique</strong> et l'<strong>élément postsynaptique</strong>. Le message y est transmis par une molécule : le <strong>neurotransmetteur</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Transmission synaptique',
          contenu: `À l'arrivée du PA, l'élément présynaptique <strong>libère</strong> le neurotransmetteur (ex. <strong>acétylcholine</strong>) dans la fente, par exocytose de vésicules.<br>Le neurotransmetteur se fixe sur des <strong>récepteurs</strong> postsynaptiques spécifiques, ce qui génère un nouveau message dans la cellule réceptrice. La transmission est <strong>unidirectionnelle</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Plaque motrice et contraction',
          contenu: `La <strong>jonction neuromusculaire (plaque motrice)</strong> est la synapse entre le motoneurone et la fibre musculaire. L'<strong>acétylcholine</strong> libérée déclenche la <strong>contraction</strong> du muscle.<br>Le neurotransmetteur est ensuite <strong>dégradé/recapté</strong> pour arrêter le signal.` },
        { type: 'ex', label: 'EX', titre: 'Expliquer l\'action d\'une substance',
          contenu: `<strong>Énoncé</strong> : une substance bloque les récepteurs de l'acétylcholine de la plaque motrice. Conséquence ?<br><strong>Résolution</strong> : le neurotransmetteur ne peut plus agir sur la fibre musculaire : le message n'est pas transmis, le muscle <strong>ne se contracte plus</strong> (paralysie). Cela illustre le rôle clé des récepteurs postsynaptiques.` },
      ]
    },
    {
      titre: 'Le muscle, effecteur du réflexe',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Fibre musculaire et contraction',
          contenu: `Le muscle est constitué de <strong>fibres musculaires</strong> (cellules allongées) contenant des protéines contractiles (actine, myosine).<br>L'arrivée du message nerveux à la plaque motrice déclenche le <strong>raccourcissement</strong> des fibres : le muscle se <strong>contracte</strong> et exerce une force sur le squelette.` },
        { type: 'def', label: 'DEF', titre: 'Unité motrice',
          contenu: `Une <strong>unité motrice</strong> est l'ensemble formé par <strong>un motoneurone</strong> et <strong>toutes les fibres musculaires</strong> qu'il commande.<br>Toutes ces fibres se contractent <strong>ensemble</strong> lorsque le motoneurone émet un message : c'est l'unité fonctionnelle de la contraction.` },
        { type: 'prop', label: 'PROP', titre: 'Graduation de la force',
          contenu: `La <strong>force</strong> développée par un muscle est modulée par :<br><ul><li>le <strong>nombre d'unités motrices recrutées</strong> (plus on en active, plus c'est fort) ;</li><li>la <strong>fréquence</strong> des messages reçus par les fibres.</li></ul>L'organisme ajuste ainsi finement l'intensité du mouvement.` },
        { type: 'ex', label: 'EX', titre: 'Relier recrutement et force',
          contenu: `<strong>Énoncé</strong> : pour soulever une charge plus lourde, comment le système nerveux augmente-t-il la force du muscle ?<br><strong>Résolution</strong> : il <strong>recrute davantage d'unités motrices</strong> et augmente la <strong>fréquence</strong> des messages envoyés aux fibres. Plus de fibres se contractent, plus intensément : la <strong>force musculaire</strong> augmente.` },
      ]
    }
  ]
},

{
  id: 'svt-tgen-cerveau-comportement',
  matiere: 'svt',
  titre: 'Cerveau, motricité et plasticité',
  ordre: 11,
  filiere: 'term-gen',
  enrich: false,
  sections: [
    {
      titre: 'Le contrôle du mouvement volontaire',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Cortex moteur',
          contenu: `Le <strong>mouvement volontaire</strong> est commandé par le <strong>cortex moteur</strong> (aire motrice, lobe frontal). Les neurones moteurs cérébraux y élaborent la commande, transmise jusqu'aux <strong>motoneurones</strong> de la moelle épinière, puis aux muscles.<br>Le cortex moteur est <strong>cartographié</strong> : chaque zone commande une partie du corps (homonculus moteur).` },
        { type: 'prop', label: 'PROP', titre: 'Voies motrices et croisement',
          contenu: `La commande motrice descend par des <strong>faisceaux</strong> de la moelle épinière. Les voies sont en grande partie <strong>croisées</strong> : l'hémisphère <strong>gauche</strong> commande la motricité du côté <strong>droit</strong> du corps et inversement.<br>Une lésion d'un hémisphère entraîne donc des troubles moteurs du <strong>côté opposé</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Intégration nerveuse',
          contenu: `Un motoneurone reçoit de <strong>nombreux messages</strong>, excitateurs et inhibiteurs, via ses synapses. Il réalise une <strong>intégration</strong> : il « additionne » ces signaux et n'émet un message (sommation) que si le bilan dépasse un <strong>seuil</strong>.<br>Le motoneurone est ainsi la <strong>voie finale commune</strong> des commandes réflexes et volontaires.` },
        { type: 'ex', label: 'EX', titre: 'Interpréter une atteinte motrice',
          contenu: `<strong>Énoncé</strong> : après un AVC dans l'hémisphère gauche, un patient est paralysé du côté droit. Expliquer.<br><strong>Résolution</strong> : les voies motrices sont <strong>croisées</strong> : l'hémisphère gauche commande le côté droit. La lésion du cortex moteur gauche supprime donc la commande des muscles du <strong>côté droit</strong>, d'où la paralysie controlatérale.` },
      ]
    },
    {
      titre: 'La plasticité cérébrale',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Plasticité cérébrale',
          contenu: `La <strong>plasticité cérébrale</strong> est la capacité du cerveau à <strong>modifier ses connexions</strong> (synapses) et l'organisation de ses aires en fonction de l'<strong>activité</strong>, de l'<strong>apprentissage</strong> et de l'<strong>expérience</strong>.<br>Elle est très importante durant le développement, mais persiste toute la vie.` },
        { type: 'prop', label: 'PROP', titre: 'Apprentissage et mémoire',
          contenu: `L'<strong>apprentissage</strong> repose sur le <strong>renforcement</strong> des synapses sollicitées et la création de nouvelles connexions ; la <strong>répétition</strong> consolide ces circuits.<br>À l'inverse, des connexions peu utilisées s'<strong>affaiblissent</strong>. La plasticité est donc le support de la <strong>mémoire</strong> et de l'acquisition de nouvelles compétences.` },
        { type: 'prop', label: 'PROP', titre: 'Récupération après lésion',
          contenu: `Après une lésion cérébrale, des régions intactes peuvent <strong>réorganiser</strong> leurs connexions et <strong>prendre en charge</strong> (partiellement) les fonctions perdues, surtout avec une <strong>rééducation</strong>.<br>Cette capacité de réorganisation illustre la plasticité du cerveau adulte.` },
        { type: 'ex', label: 'EX', titre: 'Expliquer une récupération',
          contenu: `<strong>Énoncé</strong> : après un AVC suivi d'une rééducation intensive, un patient retrouve l'usage partiel de sa main. Comment ?<br><strong>Résolution</strong> : la <strong>plasticité cérébrale</strong> permet à des zones voisines saines de <strong>réorganiser leurs connexions</strong> pour assurer la fonction touchée. La <strong>rééducation</strong> (répétition) renforce ces nouveaux circuits, d'où la récupération.` },
      ]
    },
    {
      titre: 'Cerveau, comportement et préservation',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Systèmes de récompense et motivation',
          contenu: `Le cerveau possède un <strong>système de récompense</strong> impliquant un neurotransmetteur, la <strong>dopamine</strong>. Activé par des expériences agréables, il <strong>renforce</strong> certains comportements (motivation).<br>Ce système est central dans l'apprentissage et peut être détourné par les substances <strong>addictives</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Effets des substances et perturbateurs',
          contenu: `Des substances (drogues, alcool) ou certaines molécules de l'environnement peuvent <strong>perturber les synapses</strong> en imitant ou bloquant des neurotransmetteurs.<br>Elles modifient le fonctionnement et la plasticité du cerveau, pouvant induire <strong>dépendance</strong> et altérations durables.` },
        { type: 'prop', label: 'PROP', titre: 'Préserver son système nerveux',
          contenu: `Le bon fonctionnement du système nerveux se préserve par une bonne <strong>hygiène de vie</strong> : <strong>sommeil</strong> suffisant, activité physique et intellectuelle, alimentation équilibrée, et évitement des substances <strong>neurotoxiques</strong>.<br>Ces facteurs entretiennent la plasticité et limitent les atteintes neuronales.` },
        { type: 'ex', label: 'EX', titre: 'Relier addiction et synapse',
          contenu: `<strong>Énoncé</strong> : une drogue augmente fortement la dopamine dans le système de récompense. Pourquoi crée-t-elle une dépendance ?<br><strong>Résolution</strong> : en stimulant excessivement le <strong>système de récompense</strong> (dopamine), la substance <strong>renforce</strong> anormalement le comportement de consommation. Le cerveau s'<strong>adapte</strong> (plasticité), ce qui installe la <strong>dépendance</strong> et le besoin de reconsommer.` },
      ]
    },
    {
      titre: 'Explorer le cerveau : méthodes',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Imagerie cérébrale',
          contenu: `L'<strong>imagerie cérébrale</strong> permet d'étudier le cerveau in vivo :<br><ul><li>l'<strong>IRM anatomique</strong> visualise les <strong>structures</strong> ;</li><li>l'<strong>IRM fonctionnelle (IRMf)</strong> repère les zones <strong>actives</strong> lors d'une tâche, par l'augmentation locale du débit sanguin.</li></ul>Elle a permis de <strong>cartographier</strong> les aires cérébrales.` },
        { type: 'prop', label: 'PROP', titre: 'Étude des lésions',
          contenu: `Historiquement, l'observation de <strong>patients lésés</strong> a relié des <strong>fonctions</strong> à des <strong>régions</strong> du cerveau : une lésion d'une aire entraîne la perte d'une fonction précise (ex. aires du langage).<br>Ces corrélations <strong>lésion ↔ déficit</strong> ont fondé la <strong>localisation des fonctions</strong> cérébrales.` },
        { type: 'prop', label: 'PROP', titre: 'Cartographie fonctionnelle du cortex',
          contenu: `Le croisement des méthodes montre une <strong>organisation fonctionnelle</strong> du cortex : aires <strong>motrices</strong>, <strong>sensorielles</strong>, <strong>visuelles</strong>, du <strong>langage</strong>… occupent des régions définies.<br>Cette cartographie reste <strong>modulée par la plasticité</strong> : les limites des aires peuvent évoluer avec l'expérience.` },
        { type: 'ex', label: 'EX', titre: 'Interpréter une IRMf',
          contenu: `<strong>Énoncé</strong> : en IRMf, le cortex moteur s'active quand un sujet bouge la main. Que conclure ?<br><strong>Résolution</strong> : l'activation locale, révélée par l'augmentation du <strong>débit sanguin</strong>, montre que cette région du cortex <strong>commande le mouvement</strong> de la main. L'IRMf permet ainsi d'<strong>associer une fonction à une aire</strong> chez le sujet vivant.` },
      ]
    }
  ]
}

]

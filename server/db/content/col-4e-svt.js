// Contenu cours — 4ème — SVT (Sciences de la Vie et de la Terre)
// Format : DATA exporté, consommé par le seed

export const DATA = [

// ════════════════════════════════════════════════════════════════════════════
// THÈME 1 — LE CORPS HUMAIN ET LA SANTÉ : REPRODUCTION
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'svt-4e-puberte',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'La puberté et l\'adolescence',
  ordre: 1,
  enrich: false,
  sections: [
    {
      titre: 'Les transformations de la puberté',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Puberté',
          contenu: `La <strong>puberté</strong> est la période de transition entre l'enfance et l'âge adulte au cours de laquelle le corps devient capable de se reproduire.<br>Elle débute généralement entre <strong>8 et 13 ans</strong> chez la fille et entre <strong>9 et 14 ans</strong> chez le garçon. Sa durée et son âge de déclenchement <strong>varient d'un individu à l'autre</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Caractères sexuels primaires et secondaires',
          contenu: `On distingue :<br>— Les <strong>caractères sexuels primaires</strong> : organes génitaux présents dès la naissance (ovaires, utérus, vagin chez la fille ; testicules, pénis chez le garçon).<br>— Les <strong>caractères sexuels secondaires</strong> : caractères qui apparaissent à la puberté et différencient les sexes (pilosité, développement des seins, mue de la voix, etc.).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Transformations physiques à la puberté',
          contenu: `<strong>Chez la fille :</strong> développement des seins, apparition de la pilosité (pubienne, axillaire), élargissement du bassin, premières règles (<strong>ménarche</strong>).<br><strong>Chez le garçon :</strong> développement des testicules et du pénis, mue de la voix, pilosité (pubienne, visage), premières éjaculations.<br><strong>Communs :</strong> poussée de croissance, transpiration plus abondante, modifications de la peau (acné).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Fonctionnement continu vs cyclique',
          contenu: `À partir de la puberté :<br>— Chez l'homme, la production de spermatozoïdes est <strong>continue</strong> et dure toute la vie.<br>— Chez la femme, le fonctionnement des ovaires est <strong>cyclique</strong> (cycle d'environ 28 jours) et s'arrête à la <strong>ménopause</strong> (vers 50 ans).`
        }
      ]
    },
    {
      titre: 'Les transformations psychologiques',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Adolescence',
          contenu: `L'<strong>adolescence</strong> est la période de la vie qui accompagne la puberté. Au-delà des transformations physiques, elle s'accompagne de <strong>transformations psychologiques et comportementales</strong> : recherche d'autonomie, affirmation de la personnalité, nouvelles relations sociales et affectives.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Diversité et respect',
          contenu: `Les transformations de la puberté se produisent à des <strong>âges et rythmes différents</strong> selon les individus. Cette <strong>diversité est normale</strong>. Le respect de soi et des autres, ainsi que la connaissance de son corps, sont essentiels pendant cette période.`
        }
      ]
    }
  ]
},

{
  id: 'svt-4e-systeme-reproducteur',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'Le système reproducteur humain',
  ordre: 2,
  enrich: false,
  sections: [
    {
      titre: 'L\'appareil reproducteur masculin',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Organes de l\'appareil masculin',
          contenu: `L'appareil reproducteur de l'homme comprend :<br>— Les <strong>testicules</strong> : produisent les spermatozoïdes et l'hormone sexuelle (testostérone).<br>— Les <strong>voies génitales</strong> (épididyme, spermiductes/canaux déférents) : transportent les spermatozoïdes.<br>— Les <strong>glandes annexes</strong> (vésicules séminales, prostate) : produisent le liquide séminal.<br>— Le <strong>pénis</strong> : organe d'accouplement.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Spermatozoïde',
          contenu: `Le <strong>spermatozoïde</strong> est la cellule reproductrice (gamète) mâle. Il est constitué d'une <strong>tête</strong> (contenant le noyau avec l'information génétique), d'une <strong>pièce intermédiaire</strong> et d'un <strong>flagelle</strong> qui lui permet de se déplacer. C'est une cellule mobile et de très petite taille (~60 µm).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Production des spermatozoïdes',
          contenu: `À partir de la puberté, les testicules produisent en <strong>continu</strong> des millions de spermatozoïdes chaque jour, et ce jusqu'à la fin de la vie. Les spermatozoïdes sont émis lors de l'<strong>éjaculation</strong>, mélangés au liquide séminal pour former le <strong>sperme</strong>.`
        }
      ]
    },
    {
      titre: 'L\'appareil reproducteur féminin',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Organes de l\'appareil féminin',
          contenu: `L'appareil reproducteur de la femme comprend :<br>— Les <strong>ovaires</strong> (deux) : produisent les ovules et les hormones sexuelles (œstrogènes, progestérone).<br>— Les <strong>trompes</strong> : conduisent l'ovule vers l'utérus ; lieu de la fécondation.<br>— L'<strong>utérus</strong> : organe musculeux où se développe l'embryon, tapissé par la <strong>muqueuse utérine</strong>.<br>— Le <strong>vagin</strong> : voie d'accouplement et de naissance.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Ovule',
          contenu: `L'<strong>ovule</strong> est la cellule reproductrice (gamète) femelle. C'est une <strong>grosse cellule sphérique</strong> et <strong>immobile</strong>, contenant un noyau avec l'information génétique et des réserves nutritives. Un seul ovule est généralement libéré à chaque cycle.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'L\'ovulation',
          contenu: `Environ une fois par cycle (≈ tous les 28 jours), un ovaire libère un ovule : c'est l'<strong>ovulation</strong>. L'ovule est alors capté par la trompe. S'il n'est pas fécondé dans les ~24 heures, il dégénère.`
        }
      ]
    },
    {
      titre: 'Le cycle menstruel',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Cycle menstruel et règles',
          contenu: `Le <strong>cycle menstruel</strong> dure en moyenne <strong>28 jours</strong>. Il débute le premier jour des <strong>règles</strong> (menstruations) : l'épaississement de la muqueuse utérine est éliminé par le vagin lorsqu'il n'y a pas eu de grossesse, provoquant un saignement d'environ 3 à 5 jours.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Évolution de la muqueuse utérine',
          contenu: `Au cours du cycle, la <strong>muqueuse utérine</strong> s'épaissit progressivement pour pouvoir accueillir un éventuel embryon.<br>— En l'<strong>absence de fécondation</strong> : la muqueuse se désagrège → règles.<br>— En <strong>cas de fécondation</strong> : la muqueuse est conservée et accueille l'embryon ; il n'y a pas de règles.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : repérer la période de fécondité',
          contenu: `Une femme a un cycle régulier de 28 jours. L'ovulation a lieu vers le <strong>14ᵉ jour</strong>. Les spermatozoïdes survivent jusqu'à 5 jours dans les voies génitales et l'ovule ~24 h.<br><strong>Solution :</strong> la période de fécondité s'étend donc d'environ le <strong>9ᵉ au 15ᵉ jour</strong> du cycle. Un rapport en dehors de cette période a peu de chances d'aboutir à une grossesse (mais le risque n'est jamais nul car les cycles sont irréguliers).`
        }
      ]
    }
  ]
},

{
  id: 'svt-4e-transmission-vie',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'Transmission de la vie : de la fécondation à la naissance',
  ordre: 3,
  enrich: false,
  sections: [
    {
      titre: 'La fécondation',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Fécondation',
          contenu: `La <strong>fécondation</strong> est la rencontre et la fusion d'un spermatozoïde (gamète mâle) et d'un ovule (gamète femelle). Elle a lieu dans une <strong>trompe</strong>. Elle aboutit à la formation d'une <strong>cellule-œuf</strong> (zygote), première cellule du futur individu.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Un seul spermatozoïde féconde',
          contenu: `Des millions de spermatozoïdes sont déposés lors d'un rapport sexuel, mais <strong>un seul</strong> parvient à pénétrer dans l'ovule. Dès lors, une membrane empêche l'entrée des autres. La cellule-œuf contient l'information génétique provenant <strong>pour moitié de la mère et pour moitié du père</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Nidation',
          contenu: `La cellule-œuf se divise en se déplaçant vers l'utérus, formant un <strong>embryon</strong>. Vers le 7ᵉ jour, l'embryon s'implante dans la muqueuse utérine épaissie : c'est la <strong>nidation</strong>. Elle marque le début de la grossesse.`
        }
      ]
    },
    {
      titre: 'La grossesse',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Embryon et fœtus',
          contenu: `On parle d'<strong>embryon</strong> durant les 8 premières semaines (mise en place des organes), puis de <strong>fœtus</strong> jusqu'à la naissance (croissance et maturation). La grossesse dure environ <strong>9 mois</strong> (≈ 39 semaines).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Placenta et cordon ombilical',
          contenu: `Le <strong>placenta</strong> est un organe d'échanges entre la mère et le fœtus, relié à celui-ci par le <strong>cordon ombilical</strong>. À travers le placenta, le fœtus reçoit le <strong>dioxygène et les nutriments</strong> du sang maternel et rejette ses <strong>déchets</strong> ($CO_2$, urée). Les sangs de la mère et du fœtus <strong>ne se mélangent pas</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Le développement fœtal',
          contenu: `Le fœtus se développe dans la <strong>cavité utérine</strong>, protégé par le <strong>liquide amniotique</strong>. Au fil des mois, ses organes deviennent fonctionnels. Certaines substances consommées par la mère (alcool, tabac, drogues, certains médicaments) <strong>traversent le placenta</strong> et peuvent nuire au fœtus.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'L\'accouchement',
          contenu: `Vers le terme, des <strong>contractions</strong> de l'utérus marquent le début de l'accouchement. Le col de l'utérus se dilate, puis le bébé est expulsé par le vagin. L'expulsion du placenta (la « délivrance ») suit la naissance.`
        }
      ]
    }
  ]
},

{
  id: 'svt-4e-contraception',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'Maîtrise de la reproduction et contraception',
  ordre: 4,
  enrich: false,
  sections: [
    {
      titre: 'La contraception',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Contraception',
          contenu: `La <strong>contraception</strong> regroupe l'ensemble des méthodes permettant d'éviter une grossesse de façon temporaire et réversible. Elle permet à chacun de <strong>choisir le moment</strong> d'avoir un enfant.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les principales méthodes contraceptives',
          contenu: `— <strong>Pilule</strong> (hormonale) : bloque l'ovulation.<br>— <strong>Préservatif</strong> (masculin/féminin) : barrière empêchant la rencontre des gamètes ; <strong>seul moyen protégeant aussi des IST</strong>.<br>— <strong>Stérilet (DIU)</strong> : empêche la nidation.<br>— <strong>Implant, patch, anneau</strong> : méthodes hormonales.<br>Aucune méthode (hormis l'abstinence) n'est efficace à 100 %.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Contraception d\'urgence',
          contenu: `La <strong>contraception d'urgence</strong> (« pilule du lendemain ») se prend après un rapport non ou mal protégé. Plus elle est prise tôt, plus elle est efficace (dans les 72 h). Elle est disponible en pharmacie, gratuitement et anonymement pour les mineures. <strong>Ce n'est pas une méthode contraceptive régulière.</strong>`
        }
      ]
    },
    {
      titre: 'IST et prévention',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Infections sexuellement transmissibles (IST)',
          contenu: `Les <strong>IST</strong> sont des infections (causées par des bactéries ou des virus) qui se transmettent lors de rapports sexuels. Exemples : <strong>VIH/SIDA</strong>, chlamydia, hépatite B, papillomavirus (HPV), syphilis. Certaines peuvent provoquer une stérilité ou des maladies graves.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Prévention des IST',
          contenu: `La meilleure protection contre les IST est le <strong>préservatif</strong>. D'autres mesures existent : <strong>dépistage</strong> régulier, <strong>vaccination</strong> (contre l'hépatite B et le papillomavirus). En cas d'infection, un traitement précoce est important.`
        },
        {
          type: 'def', label: 'DEF', titre: 'IVG et PMA',
          contenu: `— L'<strong>IVG</strong> (interruption volontaire de grossesse) permet d'interrompre une grossesse non désirée, dans un cadre légal.<br>— La <strong>PMA</strong> (procréation médicalement assistée) regroupe des techniques (insémination, FIV) aidant les couples ayant des difficultés à concevoir.`
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// THÈME 2 — LA PLANÈTE TERRE, L'ENVIRONNEMENT ET L'ACTION HUMAINE
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'svt-4e-terre-systeme-solaire',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'La Terre dans le système solaire',
  ordre: 5,
  enrich: false,
  sections: [
    {
      titre: 'Le système solaire',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Le système solaire',
          contenu: `Le <strong>système solaire</strong> est l'ensemble formé par le <strong>Soleil</strong> (une étoile) et tous les corps qui gravitent autour de lui : <strong>8 planètes</strong>, leurs satellites, des astéroïdes et des comètes. La Terre est la <strong>3ᵉ planète</strong> en partant du Soleil.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Planètes telluriques et gazeuses',
          contenu: `— Les <strong>planètes telluriques</strong> (Mercure, Vénus, Terre, Mars) : petites, rocheuses, denses, proches du Soleil.<br>— Les <strong>planètes gazeuses</strong> (Jupiter, Saturne, Uranus, Neptune) : grosses, gazeuses, peu denses, éloignées du Soleil.`
        },
        {
          type: 'form', label: 'FORM', titre: 'Unité astronomique et année-lumière',
          contenu: `Les distances dans l'espace s'expriment avec des unités adaptées :<br>— L'<strong>unité astronomique</strong> (ua) : distance Terre-Soleil ≈ $150$ millions de km ($1{,}5 \\times 10^{8}$ km).<br>— L'<strong>année-lumière</strong> (al) : distance parcourue par la lumière en un an, soit ≈ $9{,}5 \\times 10^{12}$ km. La lumière voyage à $c = 300\\,000$ km/s.`
        }
      ]
    },
    {
      titre: 'Les conditions de la vie sur Terre',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'La zone d\'habitabilité',
          contenu: `La Terre se situe dans la <strong>zone d'habitabilité</strong> du Soleil : ni trop près (trop chaud, l'eau s'évapore), ni trop loin (trop froid, l'eau gèle). Cette distance permet la présence d'<strong>eau liquide</strong>, condition essentielle à la vie telle qu'on la connaît.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les particularités de la Terre',
          contenu: `La vie sur Terre est rendue possible par plusieurs conditions :<br>— Présence d'<strong>eau liquide</strong> (océans).<br>— Une <strong>atmosphère</strong> riche en dioxygène et protectrice (couche d'ozone).<br>— Une <strong>température moyenne modérée</strong> (~15 °C).<br>— La distance au Soleil adaptée.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Mouvements de la Terre',
          contenu: `La Terre effectue deux mouvements :<br>— La <strong>rotation</strong> sur elle-même en ~24 h (axe Nord-Sud) : à l'origine de l'<strong>alternance jour/nuit</strong>.<br>— La <strong>révolution</strong> autour du Soleil en ~365,25 jours : à l'origine de l'<strong>année</strong>. L'inclinaison de l'axe de la Terre est à l'origine des <strong>saisons</strong>.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : calculer un temps de trajet de la lumière',
          contenu: `La distance Terre-Soleil est de $1{,}5 \\times 10^{8}$ km et la lumière voyage à $300\\,000$ km/s.<br><strong>Combien de temps met la lumière du Soleil pour atteindre la Terre ?</strong><br><strong>Solution :</strong> $$t = \\frac{d}{c} = \\frac{1{,}5 \\times 10^{8}}{3 \\times 10^{5}} = 500 \\text{ s} \\approx 8 \\text{ min } 20 \\text{ s}.$$`
        }
      ]
    }
  ]
},

{
  id: 'svt-4e-structure-terre',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'La structure interne de la Terre',
  ordre: 6,
  enrich: false,
  sections: [
    {
      titre: 'Les enveloppes de la Terre',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Les couches concentriques',
          contenu: `La Terre est formée d'enveloppes concentriques, de la surface vers le centre :<br>— La <strong>croûte</strong> (continentale ou océanique) : couche solide externe, fine.<br>— Le <strong>manteau</strong> : épais (~2900 km), solide mais déformable.<br>— Le <strong>noyau</strong> (externe liquide, interne solide) : essentiellement composé de fer et de nickel.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Lithosphère et asthénosphère',
          contenu: `— La <strong>lithosphère</strong> : couche externe <strong>rigide</strong>, comprenant la croûte et la partie supérieure du manteau. Elle est découpée en <strong>plaques</strong>.<br>— L'<strong>asthénosphère</strong> : partie du manteau située sous la lithosphère, plus chaude et <strong>ductile</strong> (déformable), sur laquelle « glissent » les plaques.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Température et pression internes',
          contenu: `Plus on s'enfonce vers le centre de la Terre, plus la <strong>température</strong> et la <strong>pression augmentent</strong>. La température atteint plusieurs milliers de degrés au niveau du noyau (~5000 °C). Cette chaleur interne est à l'origine de l'activité du globe.`
        }
      ]
    },
    {
      titre: 'Les plaques lithosphériques',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Plaque lithosphérique',
          contenu: `Une <strong>plaque lithosphérique</strong> (ou plaque tectonique) est un morceau rigide de la lithosphère. La surface de la Terre est découpée en une <strong>douzaine de plaques</strong> principales (eurasienne, africaine, pacifique, nord-américaine, etc.) qui se déplacent les unes par rapport aux autres.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Mouvement des plaques',
          contenu: `Les plaques se déplacent <strong>lentement</strong> (quelques centimètres par an, l'ordre de grandeur de la croissance des ongles) sur l'asthénosphère. Ce mouvement est entretenu par la <strong>chaleur interne</strong> de la Terre (courants de convection dans le manteau).`
        },
        {
          type: 'meth', label: 'METH', titre: 'Repérer les limites de plaques',
          contenu: `Les <strong>limites de plaques</strong> coïncident avec les zones d'activité géologique. Pour les repérer sur une carte :<br>— Localiser les zones de fort <strong>volcanisme</strong>.<br>— Localiser les zones de forte <strong>sismicité</strong> (séismes).<br>— Localiser les <strong>chaînes de montagnes</strong> et les <strong>dorsales océaniques</strong>.<br>Ces phénomènes se concentrent aux frontières des plaques.`
        }
      ]
    }
  ]
},

{
  id: 'svt-4e-tectonique',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'La tectonique des plaques',
  ordre: 7,
  enrich: false,
  sections: [
    {
      titre: 'Les frontières de plaques',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Dorsale océanique (divergence)',
          contenu: `Une <strong>dorsale océanique</strong> est une chaîne de montagnes sous-marine où deux plaques <strong>s'écartent</strong> (frontière <strong>divergente</strong>). Le magma remonte, refroidit et crée de la <strong>nouvelle lithosphère océanique</strong> : c'est l'<strong>accrétion</strong> (ou expansion des fonds océaniques).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Subduction (convergence)',
          contenu: `Dans une zone de <strong>subduction</strong>, deux plaques se rapprochent (frontière <strong>convergente</strong>) : la plaque océanique, plus dense, <strong>plonge sous</strong> l'autre plaque. La lithosphère est alors <strong>recyclée</strong> dans le manteau. Ces zones génèrent des <strong>séismes</strong> et du <strong>volcanisme</strong> intenses.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Collision et coulissage',
          contenu: `— En <strong>collision</strong>, deux plaques continentales se heurtent et forment des <strong>chaînes de montagnes</strong> (ex. l'Himalaya, les Alpes).<br>— Au niveau d'une <strong>faille transformante</strong>, deux plaques <strong>coulissent</strong> l'une contre l'autre (ex. faille de San Andreas), provoquant des séismes.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Bilan : création et recyclage',
          contenu: `La surface de la Terre est en <strong>renouvellement permanent</strong> :<br>— Création de lithosphère aux <strong>dorsales</strong> (divergence).<br>— Destruction/recyclage de lithosphère en <strong>subduction</strong> (convergence).<br>Globalement, la surface de la Terre reste <strong>constante</strong> : ce qui est créé compense ce qui est détruit.`
        }
      ]
    },
    {
      titre: 'Preuves et histoire de la théorie',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'La dérive des continents (Wegener)',
          contenu: `En 1912, <strong>Alfred Wegener</strong> propose la théorie de la <strong>dérive des continents</strong> : autrefois réunis en un supercontinent (la <strong>Pangée</strong>), les continents se sont séparés et déplacés. Ses arguments : la <strong>complémentarité des côtes</strong> (Amérique du Sud / Afrique), des <strong>fossiles identiques</strong> de part et d'autre de l'océan, des <strong>roches semblables</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Confirmation moderne',
          contenu: `La théorie a été confirmée au XXᵉ siècle grâce à :<br>— La découverte des <strong>dorsales océaniques</strong> et de l'expansion des fonds.<br>— Les mesures par <strong>GPS</strong> qui montrent le déplacement réel des plaques (quelques cm/an).<br>Elle est devenue la <strong>théorie de la tectonique des plaques</strong>, modèle unificateur de la géologie.`
        }
      ]
    }
  ]
},

{
  id: 'svt-4e-seismes',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'Les séismes',
  ordre: 8,
  enrich: false,
  sections: [
    {
      titre: 'Origine et propagation des séismes',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Séisme',
          contenu: `Un <strong>séisme</strong> (ou tremblement de terre) est une vibration brutale du sol. Il résulte d'une <strong>rupture brutale</strong> des roches en profondeur, le long d'une <strong>faille</strong>, lorsque les contraintes accumulées (dues au mouvement des plaques) deviennent trop fortes.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Foyer et épicentre',
          contenu: `— Le <strong>foyer</strong> (ou hypocentre) : lieu en profondeur où se produit la rupture.<br>— L'<strong>épicentre</strong> : point à la surface situé à la verticale du foyer ; c'est là que les dégâts sont généralement les plus importants.<br>L'énergie libérée se propage sous forme d'<strong>ondes sismiques</strong> dans toutes les directions.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les ondes sismiques',
          contenu: `Les <strong>ondes sismiques</strong> se propagent à partir du foyer et font vibrer le sol. Elles sont enregistrées par des appareils appelés <strong>sismographes</strong> (ou sismomètres), qui tracent un <strong>sismogramme</strong>. Plus on est loin de l'épicentre, plus les ondes arrivent tard et atténuées.`
        }
      ]
    },
    {
      titre: 'Mesurer un séisme',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Magnitude',
          contenu: `La <strong>magnitude</strong> mesure l'<strong>énergie libérée</strong> par un séisme à son foyer. Elle est mesurée par une échelle ouverte (échelle de <strong>Richter</strong>). C'est une valeur <strong>unique</strong> pour un séisme donné. Une augmentation d'un degré correspond à une énergie ~30 fois plus grande.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Intensité',
          contenu: `L'<strong>intensité</strong> mesure les <strong>effets et les dégâts</strong> observés en un lieu donné (échelle <strong>MSK</strong> ou EMS, de I à XII). Contrairement à la magnitude, l'intensité <strong>varie selon le lieu</strong> : elle diminue quand on s'éloigne de l'épicentre.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Distinguer magnitude et intensité',
          contenu: `Pour ne pas confondre :<br>— <strong>Magnitude</strong> → énergie au foyer → <strong>une seule valeur</strong> par séisme → échelle de Richter.<br>— <strong>Intensité</strong> → dégâts en surface → <strong>plusieurs valeurs</strong> selon le lieu → échelle MSK.<br>Un séisme de forte magnitude peut faire peu de dégâts s'il a lieu en zone désertique (faible intensité ressentie).`
        }
      ]
    }
  ]
},

{
  id: 'svt-4e-volcanisme',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'Le volcanisme',
  ordre: 9,
  enrich: false,
  sections: [
    {
      titre: 'Le phénomène volcanique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Volcan et magma',
          contenu: `Un <strong>volcan</strong> est une structure géologique par laquelle remonte du <strong>magma</strong> (roche fondue formée en profondeur). Le magma s'accumule dans un <strong>réservoir magmatique</strong>, puis remonte par une <strong>cheminée</strong> jusqu'au <strong>cratère</strong>. Arrivé en surface, il devient de la <strong>lave</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Éruption effusive',
          contenu: `Une <strong>éruption effusive</strong> émet une lave <strong>fluide</strong> qui s'écoule en <strong>coulées</strong>, avec des projections (fontaines de lave). Le volcan a une forme étalée (volcan « rouge », ex. le Piton de la Fournaise). Ce type d'éruption est généralement <strong>peu explosif</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Éruption explosive',
          contenu: `Une <strong>éruption explosive</strong> met en jeu un magma <strong>visqueux</strong> et riche en gaz. Les gaz emprisonnés provoquent de <strong>violentes explosions</strong>, projetant cendres, blocs et formant des <strong>nuées ardentes</strong> (volcan « gris », ex. la Montagne Pelée). Ce type est le <strong>plus dangereux</strong>.`
        }
      ]
    },
    {
      titre: 'Produits et localisation',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Les produits volcaniques',
          contenu: `Lors d'une éruption, un volcan émet :<br>— des <strong>laves</strong> (qui refroidissent en roches volcaniques comme le basalte),<br>— des <strong>gaz</strong> (vapeur d'eau, $CO_2$, dioxyde de soufre),<br>— des <strong>matériaux solides</strong> (cendres, bombes, lapilli).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Répartition des volcans',
          contenu: `Les volcans ne sont pas répartis au hasard : ils se concentrent surtout aux <strong>frontières de plaques</strong> (dorsales et zones de subduction, comme la « ceinture de feu » du Pacifique). Quelques volcans existent aussi au milieu des plaques (<strong>points chauds</strong>, ex. Hawaï).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : type d\'éruption',
          contenu: `Un volcan émet une lave très fluide qui forme de longues coulées noires, sans grande explosion.<br><strong>De quel type d'éruption s'agit-il ?</strong><br><strong>Solution :</strong> il s'agit d'une éruption <strong>effusive</strong> (magma fluide, peu de gaz, peu explosif). Ce volcan est de type « rouge », comme le Piton de la Fournaise.`
        }
      ]
    }
  ]
},

{
  id: 'svt-4e-risques-geologiques',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'Risques géologiques et prévention',
  ordre: 10,
  enrich: false,
  sections: [
    {
      titre: 'Aléa, enjeu et risque',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Aléa, enjeu, risque',
          contenu: `— L'<strong>aléa</strong> : probabilité qu'un phénomène naturel dangereux se produise (séisme, éruption…).<br>— L'<strong>enjeu</strong> : ensemble des personnes et des biens exposés.<br>— Le <strong>risque</strong> : conséquence de la rencontre d'un aléa et d'un enjeu. <strong>Risque = aléa × enjeu.</strong> Un aléa fort dans une zone vide n'engendre pas de risque.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les risques géologiques majeurs',
          contenu: `Les principaux risques liés à l'activité interne du globe :<br>— <strong>Séismes</strong> : effondrements de bâtiments, tsunamis.<br>— <strong>Volcanisme</strong> : coulées, nuées ardentes, retombées de cendres, lahars.<br>Ils sont surtout présents dans les régions situées aux <strong>frontières de plaques</strong>.`
        }
      ]
    },
    {
      titre: 'Prévention et protection',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Prévision et surveillance',
          contenu: `On ne sait pas <strong>prédire</strong> précisément la date d'un séisme, mais on <strong>surveille</strong> les zones à risque. Pour les volcans, la surveillance (sismomètres, mesure des gaz et déformations) permet souvent de <strong>prévoir une éruption</strong> et d'<strong>évacuer</strong> à temps.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Réduire le risque',
          contenu: `Mesures de prévention et de protection :<br>— Construire des bâtiments <strong>parasismiques</strong>.<br>— Établir des <strong>plans de prévention des risques</strong> (PPR) interdisant la construction en zone dangereuse.<br>— <strong>Informer et éduquer</strong> la population (exercices, consignes).<br>— Mettre en place des systèmes d'<strong>alerte précoce</strong> (tsunamis).`
        },
        {
          type: 'meth', label: 'METH', titre: 'Les bons réflexes en cas de séisme',
          contenu: `Consignes de sécurité :<br>— Pendant : se mettre à l'abri (sous une table, contre un mur porteur), s'éloigner des fenêtres.<br>— Après : couper gaz et électricité, évacuer calmement, ne pas prendre l'ascenseur.<br>— Ne pas rester dans une construction fragile ; suivre les consignes des autorités.`
        }
      ]
    }
  ]
},

{
  id: 'svt-4e-cycles-biogeochimiques',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'Les cycles biogéochimiques',
  ordre: 11,
  enrich: false,
  sections: [
    {
      titre: 'Le cycle de l\'eau',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Cycle de l\'eau',
          contenu: `Le <strong>cycle de l'eau</strong> décrit le déplacement permanent de l'eau entre les océans, l'atmosphère et les continents. Ses étapes : <strong>évaporation</strong> (océans), <strong>condensation</strong> (nuages), <strong>précipitations</strong> (pluie, neige), <strong>ruissellement</strong> et <strong>infiltration</strong>, puis retour à l'océan. La quantité totale d'eau sur Terre reste <strong>constante</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Réservoirs d\'eau',
          contenu: `L'eau est répartie en différents <strong>réservoirs</strong> : océans (l'essentiel, eau salée), glaciers et calottes polaires, eaux souterraines (nappes), eaux de surface (lacs, rivières) et atmosphère. Seule une <strong>très faible part</strong> est de l'eau douce facilement accessible.`
        }
      ]
    },
    {
      titre: 'Le cycle du carbone',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Cycle du carbone',
          contenu: `Le <strong>cycle du carbone</strong> décrit la circulation du carbone entre l'atmosphère ($CO_2$), les êtres vivants, les océans et les roches. Les principaux processus :<br>— <strong>Photosynthèse</strong> : les végétaux absorbent le $CO_2$.<br>— <strong>Respiration</strong> et <strong>décomposition</strong> : rejet de $CO_2$.<br>— <strong>Combustions</strong> (notamment des énergies fossiles) : rejet de $CO_2$.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Carbone et climat',
          contenu: `Le $CO_2$ est un <strong>gaz à effet de serre</strong>. Les activités humaines (combustion d'énergies fossiles, déforestation) augmentent sa concentration dans l'atmosphère, ce qui <strong>renforce l'effet de serre</strong> et contribue au <strong>réchauffement climatique</strong>. Le carbone peut être <strong>stocké</strong> longtemps dans les roches (calcaire, charbon, pétrole).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : perturbation du cycle du carbone',
          contenu: `On observe depuis 150 ans une augmentation rapide du $CO_2$ atmosphérique.<br><strong>Quelle activité humaine est principalement responsable ?</strong><br><strong>Solution :</strong> la <strong>combustion massive d'énergies fossiles</strong> (charbon, pétrole, gaz), depuis la révolution industrielle, libère le carbone stocké dans les roches. La <strong>déforestation</strong> aggrave le phénomène en réduisant la photosynthèse.`
        }
      ]
    }
  ]
},

{
  id: 'svt-4e-histoire-vie-terre',
  filiere: '4eme',
  matiere: 'svt',
  titre: 'Histoire de la vie et de la Terre',
  ordre: 12,
  enrich: false,
  sections: [
    {
      titre: 'Les archives géologiques',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Fossile',
          contenu: `Un <strong>fossile</strong> est un reste ou une empreinte d'un organisme ayant vécu dans le passé, conservé dans une roche (souvent une roche <strong>sédimentaire</strong>). Les fossiles sont des <strong>archives</strong> qui renseignent sur les êtres vivants du passé et sur les milieux dans lesquels ils vivaient.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Roches sédimentaires et strates',
          contenu: `Les <strong>roches sédimentaires</strong> se forment par accumulation et compaction de <strong>sédiments</strong> au fil du temps. Elles se déposent en couches superposées appelées <strong>strates</strong>. Plus une strate est <strong>profonde</strong>, plus elle est <strong>ancienne</strong> (principe de superposition).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Le principe de superposition',
          contenu: `<strong>Principe de superposition :</strong> dans une série de couches non bouleversées, une couche est plus <strong>récente</strong> que celle qu'elle recouvre et plus <strong>ancienne</strong> que celle qui la recouvre. Ce principe permet de classer les événements géologiques dans l'ordre <strong>chronologique relatif</strong>.`
        }
      ]
    },
    {
      titre: 'Dater et reconstituer le passé',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Fossile stratigraphique',
          contenu: `Un <strong>fossile stratigraphique</strong> (ou fossile-marqueur) est l'espèce d'un organisme qui a vécu sur une <strong>courte période</strong> mais s'est <strong>largement répandue</strong>. Sa présence dans une roche permet d'en <strong>dater</strong> l'âge (ex. les ammonites, les trilobites).`
        },
        {
          type: 'meth', label: 'METH', titre: 'Datation relative vs absolue',
          contenu: `— La <strong>datation relative</strong> classe les événements les uns par rapport aux autres (avant/après), grâce aux strates et aux fossiles.<br>— La <strong>datation absolue</strong> donne un âge chiffré (en millions d'années), grâce à la <strong>radioactivité</strong> de certains éléments contenus dans les roches.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les grandes étapes de l\'histoire de la vie',
          contenu: `La Terre s'est formée il y a ~<strong>4,6 milliards d'années</strong>. La vie est apparue dans les océans il y a ~3,8 milliards d'années. Elle s'est ensuite diversifiée et complexifiée. L'histoire de la vie est ponctuée de <strong>crises biologiques</strong> (extinctions massives), comme celle ayant fait disparaître les <strong>dinosaures</strong> il y a ~66 millions d'années.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : ordonner des strates',
          contenu: `Dans une falaise non bouleversée, on observe (du bas vers le haut) trois couches : A (contient des trilobites), B (contient des ammonites), C (contient des coquillages actuels).<br><strong>Classer ces couches de la plus ancienne à la plus récente.</strong><br><strong>Solution :</strong> d'après le principe de superposition, la plus ancienne est en bas. Ordre : <strong>A (plus ancienne) → B → C (plus récente)</strong>. Cela confirme que les trilobites sont plus anciens que les ammonites.`
        }
      ]
    }
  ]
}

];

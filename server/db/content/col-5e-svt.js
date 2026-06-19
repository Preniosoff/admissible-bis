// Contenu cours — 5ème — SVT
// Format : DATA exporté, consommé par le seed

export const DATA = [

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRE 1 — Respiration et occupation des milieux de vie
// ════════════════════════════════════════════════════════════════════════════
{
  id: 'svt-5e-respiration-milieux',
  filiere: '5eme',
  matiere: 'svt',
  titre: 'Respiration et occupation des milieux de vie',
  ordre: 1,
  enrich: false,
  sections: [
    {
      titre: 'La respiration des êtres vivants',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Respiration',
          contenu: 'La <strong>respiration</strong> est un échange gazeux avec le milieu : tous les êtres vivants <strong>prélèvent du dioxygène</strong> (O$_2$) et <strong>rejettent du dioxygène carbone</strong> (CO$_2$).<br>Ces échanges ont lieu en permanence, le jour comme la nuit. Ils permettent à l\'organisme de produire l\'énergie nécessaire à son fonctionnement.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Milieu et organe respiratoire',
          contenu: 'Le <strong>milieu de respiration</strong> est l\'endroit où l\'animal prélève son O$_2$ : l\'<strong>air</strong> ou l\'<strong>eau</strong>.<br>L\'<strong>organe respiratoire</strong> est la partie du corps réalisant les échanges gazeux :<br>— <strong>poumons</strong> → respiration aérienne (mammifères, oiseaux, reptiles)<br>— <strong>branchies</strong> → respiration dans l\'eau (poissons)<br>— <strong>trachées</strong> → tubes ramifiés des insectes<br>— <strong>peau</strong> → respiration cutanée (ver de terre, certains amphibiens)'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Milieu de vie ≠ milieu de respiration',
          contenu: 'Le milieu de <strong>vie</strong> (où vit l\'animal) n\'est pas toujours le milieu de <strong>respiration</strong> (où il prélève l\'O$_2$).<br>Exemples :<br>— Le <strong>dauphin</strong> vit dans l\'eau mais respire dans l\'<strong>air</strong> (poumons, remonte en surface).<br>— La <strong>larve de moustique</strong> vit dans l\'eau mais respire l\'air par un siphon.<br>— Le <strong>dytique</strong> (insecte aquatique) emporte une réserve d\'air sous ses ailes.'
        }
      ]
    },
    {
      titre: 'Les organes respiratoires et leurs adaptations',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Une grande surface d\'échange',
          contenu: 'Tous les organes respiratoires partagent un point commun : une <strong>grande surface d\'échange</strong>, finement subdivisée, riche en <strong>vaisseaux sanguins</strong> (très vascularisée) et à <strong>paroi fine</strong>.<br>Cette organisation facilite le passage du dioxygène vers le sang et celui du dioxyde de carbone vers le milieu.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Branchies du poisson',
          contenu: 'Chez le poisson, l\'eau entre par la <strong>bouche</strong>, passe sur les <strong>branchies</strong> rouges (riches en sang) puis ressort par les <strong>ouïes</strong>.<br>Les branchies, formées de fins <strong>filaments</strong>, offrent une grande surface en contact avec l\'eau : le dioxygène dissous dans l\'eau passe dans le sang.<br>C\'est pourquoi un poisson sorti de l\'eau meurt : ses filaments branchiaux s\'effondrent et la surface d\'échange disparaît.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Dioxygène dissous',
          contenu: 'L\'eau contient du <strong>dioxygène dissous</strong>, en bien plus faible quantité que l\'air.<br>Sa concentration dépend de plusieurs facteurs :<br>— l\'<strong>agitation</strong> de l\'eau (une cascade enrichit l\'eau en O$_2$) ;<br>— la <strong>température</strong> : l\'eau froide contient plus d\'O$_2$ que l\'eau chaude ;<br>— les <strong>végétaux aquatiques</strong> qui produisent de l\'O$_2$.'
        }
      ]
    },
    {
      titre: 'La répartition des êtres vivants',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Facteur de l\'environnement',
          contenu: 'Un <strong>facteur de l\'environnement</strong> est une caractéristique du milieu qui influence la présence et la répartition des êtres vivants.<br>On distingue :<br>— les <strong>facteurs physico-chimiques</strong> (température, lumière, humidité, teneur en O$_2$, courant) ;<br>— les <strong>facteurs biologiques</strong> (présence d\'autres espèces, nourriture, prédateurs).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Influence des facteurs sur la répartition',
          contenu: 'La <strong>répartition des êtres vivants</strong> dans un milieu dépend des conditions de respiration.<br>Exemple dans un cours d\'eau : la <strong>truite</strong> exige une eau froide, vive et bien oxygénée ; la <strong>carpe</strong> tolère une eau chaude, calme et pauvre en O$_2$. On les trouve donc dans des zones différentes de la rivière.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Impact de l\'activité humaine',
          contenu: 'Les <strong>activités humaines</strong> modifient les milieux et la respiration des organismes :<br>— <strong>pollution</strong> et rejets organiques → baisse de l\'O$_2$ dissous, asphyxie des poissons ;<br>— <strong>réchauffement</strong> de l\'eau (rejets industriels) → moins d\'O$_2$ dissous ;<br>— <strong>aménagements</strong> (barrages) → modification du courant.<br>Ces modifications changent la <strong>biodiversité</strong> du milieu.'
        }
      ]
    },
    {
      titre: 'Le peuplement au cours des saisons',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Peuplement d\'un milieu',
          contenu: 'Le <strong>peuplement</strong> d\'un milieu est l\'ensemble des êtres vivants qui y vivent. Il <strong>varie au cours des saisons</strong> en réponse aux changements de température et de durée du jour.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Stratégies de survie en hiver',
          contenu: 'Pour franchir l\'hiver, les êtres vivants adoptent différentes stratégies :<br>— <strong>migration</strong> : déplacement vers un climat plus favorable (hirondelles) ;<br>— <strong>hibernation</strong> : ralentissement de l\'activité (marmotte, hérisson) ;<br>— <strong>formes de résistance</strong> : graines, œufs, bourgeons, qui passent l\'hiver et redonnent un individu au printemps.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Le marronnier au fil des saisons',
          contenu: 'Au <strong>printemps</strong>, les bourgeons du marronnier s\'ouvrent et donnent des feuilles. En <strong>été</strong>, l\'arbre est couvert de feuilles. En <strong>automne</strong>, les feuilles tombent. En <strong>hiver</strong>, l\'arbre est nu mais conserve ses <strong>bourgeons</strong>, formes de résistance qui assurent la reprise au printemps suivant.'
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRE 2 — La nutrition des organes : l'appareil digestif
// ════════════════════════════════════════════════════════════════════════════
{
  id: 'svt-5e-digestion',
  filiere: '5eme',
  matiere: 'svt',
  titre: 'La digestion et l\'absorption des nutriments',
  ordre: 2,
  enrich: false,
  sections: [
    {
      titre: 'Les besoins de l\'organisme',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Aliment et nutriment',
          contenu: 'Un <strong>aliment</strong> est une substance consommée par l\'organisme. Il contient des <strong>nutriments</strong> : substances simples, directement assimilables par les cellules.<br>Les principaux nutriments sont les <strong>glucides</strong> (sucres), les <strong>lipides</strong> (graisses), les <strong>protides</strong> (protéines), ainsi que l\'<strong>eau</strong>, les <strong>sels minéraux</strong> et les <strong>vitamines</strong>.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Rôle des nutriments',
          contenu: 'Les nutriments ont deux grands rôles :<br>— <strong>rôle énergétique</strong> : fournir de l\'énergie (glucides et lipides surtout) ;<br>— <strong>rôle bâtisseur</strong> : construire et renouveler les cellules (protides surtout).<br>Une <strong>alimentation équilibrée</strong> apporte tous les nutriments dans de bonnes proportions, adaptées aux besoins (âge, activité).'
        }
      ]
    },
    {
      titre: 'Le trajet des aliments',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'L\'appareil digestif',
          contenu: 'L\'<strong>appareil digestif</strong> est constitué :<br>— du <strong>tube digestif</strong> : bouche → œsophage → estomac → intestin grêle → gros intestin → anus ;<br>— de <strong>glandes digestives</strong> annexes : glandes salivaires, foie, pancréas, qui déversent des sucs digestifs dans le tube.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Digestion',
          contenu: 'La <strong>digestion</strong> est la transformation des gros aliments en petits <strong>nutriments</strong> solubles, capables de passer dans le sang.<br>Elle combine :<br>— une <strong>action mécanique</strong> : mastication (dents), brassage (estomac), qui fragmentent les aliments ;<br>— une <strong>action chimique</strong> : les <strong>sucs digestifs</strong> dissolvent et simplifient les aliments.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Enzymes digestives',
          contenu: 'Les sucs digestifs contiennent des <strong>enzymes</strong> : des substances qui découpent les grosses molécules d\'aliments en petits nutriments.<br>Chaque enzyme agit sur un type d\'aliment précis. Exemple : l\'<strong>amylase</strong> de la salive transforme l\'amidon (gros glucide) en glucose (petit nutriment).'
        }
      ]
    },
    {
      titre: 'L\'absorption intestinale',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Absorption intestinale',
          contenu: 'L\'<strong>absorption intestinale</strong> est le passage des nutriments depuis l\'intérieur de l\'intestin vers le <strong>sang</strong>.<br>Elle se déroule essentiellement dans l\'<strong>intestin grêle</strong>, organe long de plusieurs mètres.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'L\'intestin grêle, surface d\'absorption',
          contenu: 'L\'intestin grêle présente des caractéristiques qui facilitent l\'absorption :<br>— une <strong>grande longueur</strong> (~6 m) et de nombreux replis ;<br>— des <strong>villosités</strong> : petits replis qui augmentent fortement la surface (≈ 250 m²) ;<br>— une <strong>paroi fine</strong> très <strong>vascularisée</strong> (riche en vaisseaux sanguins).<br>Les nutriments traversent la paroi et rejoignent le sang.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Repérer un organe d\'échange efficace',
          contenu: 'Un bon organe d\'échange (poumon, intestin, branchie) possède toujours :<br>1. une <strong>grande surface</strong> (replis, villosités, alvéoles) ;<br>2. une <strong>paroi fine</strong> ;<br>3. une <strong>forte vascularisation</strong>.<br>Pour justifier l\'efficacité d\'un organe, citez ces trois critères.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Le devenir d\'un steak-frites',
          contenu: 'Un repas steak-frites apporte des <strong>protides</strong> (steak) et des <strong>glucides</strong> (frites = amidon).<br>Dans le tube digestif, les enzymes transforment :<br>— les protides → <strong>acides aminés</strong> ;<br>— l\'amidon → <strong>glucose</strong>.<br>Ces nutriments traversent les villosités de l\'intestin grêle et passent dans le sang, qui les distribue aux organes. La partie non digérée forme les <strong>excréments</strong>, évacués par l\'anus.'
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRE 3 — L'appareil respiratoire et les échanges gazeux
// ════════════════════════════════════════════════════════════════════════════
{
  id: 'svt-5e-appareil-respiratoire',
  filiere: '5eme',
  matiere: 'svt',
  titre: 'L\'appareil respiratoire et les échanges gazeux',
  ordre: 3,
  enrich: false,
  sections: [
    {
      titre: 'L\'organisation de l\'appareil respiratoire',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Appareil respiratoire humain',
          contenu: 'L\'air suit le trajet : <strong>fosses nasales</strong> (ou bouche) → <strong>trachée</strong> → <strong>bronches</strong> → <strong>bronchioles</strong> → <strong>alvéoles pulmonaires</strong>.<br>Les <strong>poumons</strong> (deux organes spongieux) contiennent des millions d\'<strong>alvéoles</strong>, minuscules sacs où ont lieu les échanges gazeux.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Ventilation pulmonaire',
          contenu: 'La <strong>ventilation</strong> est le renouvellement de l\'air dans les poumons. Elle comporte deux mouvements :<br>— l\'<strong>inspiration</strong> : la cage thoracique se soulève, le <strong>diaphragme</strong> descend, les poumons se gonflent d\'air ;<br>— l\'<strong>expiration</strong> : la cage thoracique s\'abaisse, le diaphragme remonte, l\'air est chassé.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'L\'alvéole, surface d\'échange',
          contenu: 'Les alvéoles pulmonaires sont adaptées aux échanges gazeux :<br>— très <strong>nombreuses</strong> (≈ 300 millions) → grande surface (≈ 100 m²) ;<br>— <strong>paroi très fine</strong> ;<br>— entourées d\'un fin réseau de <strong>vaisseaux sanguins</strong> (capillaires).<br>Le dioxygène passe de l\'air vers le sang, le dioxyde de carbone du sang vers l\'air.'
        }
      ]
    },
    {
      titre: 'La composition de l\'air',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Air inspiré et air expiré',
          contenu: 'La comparaison des deux air montre les échanges :<br>— <strong>air inspiré</strong> : ~21 % de O$_2$, ~0,04 % de CO$_2$ ;<br>— <strong>air expiré</strong> : ~16 % de O$_2$ (moins), ~4 % de CO$_2$ (plus).<br>L\'organisme a donc <strong>prélevé du O$_2$</strong> et <strong>rejeté du CO$_2$</strong> au niveau des alvéoles.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Test à l\'eau de chaux',
          contenu: 'L\'<strong>eau de chaux</strong> se <strong>trouble</strong> (devient laiteuse) en présence de dioxyde de carbone.<br>Expérience : on souffle dans un tube d\'eau de chaux à l\'aide d\'une paille. L\'eau de chaux se trouble → l\'air expiré est <strong>riche en CO$_2$</strong>.<br>Conclusion : la respiration rejette du CO$_2$.'
        }
      ]
    },
    {
      titre: 'Hygiène de l\'appareil respiratoire',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Effets du tabac',
          contenu: 'La <strong>fumée de tabac</strong> contient des substances toxiques (goudrons, nicotine, monoxyde de carbone).<br>Elle dégrade les <strong>alvéoles</strong>, diminue la surface d\'échange et favorise <strong>bronchites</strong>, <strong>cancers</strong> du poumon et maladies cardiovasculaires.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Qualité de l\'air et santé',
          contenu: 'La <strong>pollution de l\'air</strong> (particules fines, gaz d\'échappement) irrite les voies respiratoires et aggrave l\'<strong>asthme</strong>.<br>Pour préserver l\'appareil respiratoire : aérer les pièces, éviter la fumée de tabac, pratiquer une activité physique en air pur.'
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRE 4 — L'appareil circulatoire et l'approvisionnement des organes
// ════════════════════════════════════════════════════════════════════════════
{
  id: 'svt-5e-circulation',
  filiere: '5eme',
  matiere: 'svt',
  titre: 'L\'appareil circulatoire et l\'approvisionnement des organes',
  ordre: 4,
  enrich: false,
  sections: [
    {
      titre: 'Les besoins des organes',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Approvisionnement des organes',
          contenu: 'Pour fonctionner, chaque <strong>organe</strong> a besoin en permanence de <strong>dioxygène</strong> et de <strong>nutriments</strong> (glucose surtout). Il rejette des <strong>déchets</strong> : dioxyde de carbone, urée.<br>Ces substances sont transportées par le <strong>sang</strong>.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les besoins augmentent avec l\'activité',
          contenu: 'Plus un organe est <strong>actif</strong>, plus ses besoins en O$_2$ et en glucose sont importants.<br>Exemple : un muscle au repos consomme peu ; le même muscle à l\'effort consomme beaucoup plus. Le sang doit alors l\'approvisionner davantage.'
        }
      ]
    },
    {
      titre: 'Le sang et les vaisseaux',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Le sang',
          contenu: 'Le <strong>sang</strong> est un liquide composé :<br>— d\'un liquide jaune, le <strong>plasma</strong>, qui transporte les nutriments, les gaz et les déchets dissous ;<br>— de <strong>globules rouges</strong> (transport du O$_2$) ;<br>— de <strong>globules blancs</strong> (défense de l\'organisme) ;<br>— de <strong>plaquettes</strong> (coagulation).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Les vaisseaux sanguins',
          contenu: 'Le sang circule dans trois types de vaisseaux :<br>— les <strong>artères</strong> : transportent le sang <strong>du cœur vers les organes</strong> ;<br>— les <strong>veines</strong> : ramènent le sang <strong>des organes vers le cœur</strong> ;<br>— les <strong>capillaires</strong> : minuscules vaisseaux à paroi fine, au contact des organes, où se font les échanges.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les échanges au niveau des organes',
          contenu: 'Au niveau des <strong>capillaires</strong>, le sang cède à l\'organe le <strong>dioxygène</strong> et les <strong>nutriments</strong>, et récupère les <strong>déchets</strong> (CO$_2$, urée).<br>Le sang qui arrive est riche en O$_2$ et nutriments ; le sang qui repart est appauvri en O$_2$ et chargé en CO$_2$.'
        }
      ]
    },
    {
      titre: 'Le cœur, moteur de la circulation',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Le cœur',
          contenu: 'Le <strong>cœur</strong> est un <strong>muscle creux</strong> qui se contracte sans arrêt et joue le rôle de <strong>pompe</strong>. Il propulse le sang dans tout le corps.<br>Il est divisé en deux moitiés (droite et gauche), chacune comportant une <strong>oreillette</strong> (en haut) et un <strong>ventricule</strong> (en bas).'
        },
        {
          type: 'def', label: 'DEF', titre: 'La double circulation',
          contenu: 'Le sang effectue deux circuits :<br>— la <strong>circulation pulmonaire</strong> : cœur → poumons → cœur (le sang se recharge en O$_2$) ;<br>— la <strong>circulation générale</strong> : cœur → organes → cœur (le sang distribue O$_2$ et nutriments).<br>Le sang passe deux fois par le cœur à chaque tour complet : c\'est une <strong>double circulation</strong>.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Le sens de circulation',
          contenu: 'Le sang circule toujours dans le même sens, à cause des <strong>valves</strong> du cœur qui empêchent le reflux.<br>Schéma général : <strong>oreillette → ventricule → artère → organes → veine → oreillette</strong>.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Calcul du débit cardiaque',
          contenu: 'Au repos, le cœur bat environ 70 fois par minute et éjecte environ 70 mL de sang à chaque battement.<br>Le <strong>débit</strong> est : $$70 \\times 70 = 4900 \\text{ mL/min} \\approx 5 \\text{ L/min}$$Le corps contenant environ 5 L de sang, tout le sang fait le tour du corps en <strong>une minute</strong> environ au repos.'
        }
      ]
    },
    {
      titre: 'Hygiène de l\'appareil circulatoire',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Maladies cardiovasculaires',
          contenu: 'Les <strong>maladies cardiovasculaires</strong> touchent le cœur et les vaisseaux. Une artère peut se <strong>boucher</strong> (dépôts de graisses) : l\'organe en aval n\'est plus approvisionné.<br>— <strong>infarctus</strong> : artère du cœur bouchée ;<br>— <strong>AVC</strong> : vaisseau du cerveau bouché ou rompu.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Prévention',
          contenu: 'Pour préserver l\'appareil circulatoire :<br>— pratiquer une <strong>activité physique</strong> régulière (le cœur est un muscle) ;<br>— avoir une <strong>alimentation équilibrée</strong> (peu de graisses) ;<br>— <strong>ne pas fumer</strong> et limiter le sel.'
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRE 5 — Le fonctionnement de l'organisme à l'effort
// ════════════════════════════════════════════════════════════════════════════
{
  id: 'svt-5e-effort',
  filiere: '5eme',
  matiere: 'svt',
  titre: 'Le fonctionnement de l\'organisme à l\'effort',
  ordre: 5,
  enrich: false,
  sections: [
    {
      titre: 'Les modifications à l\'effort',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Réactions du corps à l\'effort',
          contenu: 'Lors d\'un <strong>effort physique</strong>, plusieurs paramètres augmentent :<br>— la <strong>fréquence cardiaque</strong> (le cœur bat plus vite) ;<br>— la <strong>fréquence respiratoire</strong> (on respire plus vite) ;<br>— le <strong>volume d\'air</strong> inspiré à chaque mouvement ;<br>— la <strong>température corporelle</strong> et la <strong>sueur</strong>.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Fréquence cardiaque',
          contenu: 'La <strong>fréquence cardiaque</strong> est le nombre de <strong>battements du cœur par minute</strong> (battements/min). Elle se mesure en prenant le <strong>pouls</strong>.<br>Au repos : ~70 battements/min. À l\'effort : elle peut dépasser 150 battements/min.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Mesurer sa fréquence cardiaque',
          contenu: '1. Placer deux doigts sur le poignet ou le cou pour sentir le <strong>pouls</strong>.<br>2. Compter le nombre de battements pendant <strong>15 secondes</strong>.<br>3. Multiplier par <strong>4</strong> pour obtenir le nombre de battements par minute.<br>Exemple : 22 battements en 15 s → $22 \\times 4 = 88$ battements/min.'
        }
      ]
    },
    {
      titre: 'Pourquoi ces modifications ?',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Besoins accrus des muscles',
          contenu: 'À l\'effort, les <strong>muscles</strong> travaillent davantage : ils consomment plus de <strong>dioxygène</strong> et de <strong>glucose</strong> et rejettent plus de <strong>CO$_2$</strong>.<br>Pour y répondre, le corps augmente la respiration (plus d\'O$_2$ capté) et la circulation (plus de sang amené aux muscles). C\'est l\'origine des modifications observées.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Production d\'énergie',
          contenu: 'Les muscles utilisent le <strong>glucose</strong> et le <strong>dioxygène</strong> pour produire l\'<strong>énergie</strong> nécessaire au mouvement. Cette réaction libère aussi de la <strong>chaleur</strong> (d\'où l\'élévation de température) et du <strong>dioxyde de carbone</strong> (déchet).'
        },
        {
          type: 'ex', label: 'EX', titre: 'Interpréter un graphique d\'effort',
          contenu: 'On mesure la fréquence cardiaque d\'un élève avant, pendant et après une course.<br>— Au <strong>repos</strong> : ~75 battements/min.<br>— Pendant l\'<strong>effort</strong> : elle monte à ~150 battements/min (le cœur approvisionne mieux les muscles).<br>— À l\'<strong>arrêt</strong> : elle redescend progressivement vers la valeur de repos. Le temps de retour au repos (temps de récupération) est <strong>plus court chez une personne entraînée</strong>.'
        }
      ]
    },
    {
      titre: 'Entraînement et santé',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Effets de l\'entraînement',
          contenu: 'Une <strong>activité physique régulière</strong> (entraînement) améliore les performances :<br>— le cœur devient plus <strong>puissant</strong> (fréquence de repos plus basse) ;<br>— la <strong>récupération</strong> est plus rapide après l\'effort ;<br>— les muscles et le souffle se développent.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Dopage et limites',
          contenu: 'Le <strong>dopage</strong> consiste à utiliser des substances interdites pour augmenter artificiellement ses performances. Il est <strong>dangereux pour la santé</strong> (cœur, foie) et <strong>interdit</strong>.<br>Pour progresser sainement : entraînement régulier, alimentation équilibrée, repos et hydratation.'
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRE 6 — La reproduction sexuée des êtres vivants
// ════════════════════════════════════════════════════════════════════════════
{
  id: 'svt-5e-reproduction-sexuee',
  filiere: '5eme',
  matiere: 'svt',
  titre: 'La reproduction sexuée des êtres vivants',
  ordre: 6,
  enrich: false,
  sections: [
    {
      titre: 'Les cellules reproductrices',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Reproduction sexuée',
          contenu: 'La <strong>reproduction sexuée</strong> nécessite <strong>deux parents</strong> : un mâle et une femelle. Elle repose sur la rencontre de deux <strong>cellules reproductrices</strong> (ou gamètes).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Gamètes mâle et femelle',
          contenu: 'Les <strong>cellules reproductrices</strong> (gamètes) sont :<br>— le <strong>gamète mâle</strong> : le <strong>spermatozoïde</strong>, petit et mobile (il possède un flagelle), produit en grand nombre ;<br>— le <strong>gamète femelle</strong> : l\'<strong>ovule</strong>, gros et immobile, contenant des réserves, produit en faible nombre.'
        }
      ]
    },
    {
      titre: 'La fécondation',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Fécondation',
          contenu: 'La <strong>fécondation</strong> est la rencontre et la fusion d\'un spermatozoïde et d\'un ovule. Elle donne une <strong>cellule-œuf</strong>, première cellule du nouvel être vivant.<br>$$\\text{spermatozoïde} + \\text{ovule} \\rightarrow \\text{cellule-œuf}$$'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Fécondation externe et interne',
          contenu: 'Selon le milieu où se rencontrent les gamètes :<br>— <strong>fécondation externe</strong> : a lieu <strong>dans l\'eau</strong>, hors du corps (poissons, grenouilles). Beaucoup de gamètes sont produits ;<br>— <strong>fécondation interne</strong> : a lieu <strong>dans le corps</strong> de la femelle, après accouplement (oiseaux, mammifères, reptiles).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Développement de l\'embryon',
          contenu: 'La cellule-œuf se <strong>divise</strong> de nombreuses fois et forme un <strong>embryon</strong>, qui grandit pour devenir un nouvel individu.<br>— <strong>Ovipares</strong> : l\'embryon se développe dans un <strong>œuf</strong>, hors du corps (oiseaux, poissons).<br>— <strong>Vivipares</strong> : l\'embryon se développe <strong>dans le ventre</strong> de la mère (mammifères).'
        }
      ]
    },
    {
      titre: 'Reproduction et milieu de vie',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Influence des conditions du milieu',
          contenu: 'La reproduction sexuée est influencée par les <strong>conditions du milieu</strong> : température, durée du jour, présence de nourriture, qualité de l\'eau.<br>De nombreuses espèces se reproduisent à une <strong>saison précise</strong> (le printemps souvent), favorable à la survie des jeunes.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Impact de l\'Homme',
          contenu: 'Les <strong>activités humaines</strong> peuvent modifier la reproduction des espèces :<br>— la <strong>pollution</strong> et la destruction des milieux réduisent les zones de reproduction ;<br>— à l\'inverse, la création de <strong>réserves naturelles</strong> ou de passages favorise la reproduction et la biodiversité.'
        },
        {
          type: 'ex', label: 'EX', titre: 'La reproduction du saumon',
          contenu: 'Le <strong>saumon</strong> vit en mer mais remonte les rivières pour se reproduire dans une eau froide, vive et bien oxygénée, sur des fonds de graviers. La femelle y pond ses ovules, le mâle les féconde (<strong>fécondation externe</strong>).<br>La construction de <strong>barrages</strong> bloque la remontée et menace la reproduction : on installe alors des <strong>passes à poissons</strong>.'
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRE 7 — La reproduction asexuée et la colonisation des milieux
// ════════════════════════════════════════════════════════════════════════════
{
  id: 'svt-5e-reproduction-asexuee',
  filiere: '5eme',
  matiere: 'svt',
  titre: 'La reproduction asexuée et la colonisation d\'un milieu',
  ordre: 7,
  enrich: false,
  sections: [
    {
      titre: 'Le principe de la reproduction asexuée',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Reproduction asexuée',
          contenu: 'La <strong>reproduction asexuée</strong> se fait à partir d\'un <strong>seul parent</strong>, <strong>sans cellule reproductrice</strong> ni fécondation. Les descendants sont <strong>identiques</strong> au parent (ce sont des clones).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Sexuée ou asexuée : les différences',
          contenu: 'Comparaison des deux modes :<br>— <strong>Sexuée</strong> : 2 parents, gamètes, fécondation, descendants <strong>variés</strong>.<br>— <strong>Asexuée</strong> : 1 parent, pas de gamètes, descendants <strong>identiques</strong> au parent.<br>La reproduction asexuée est souvent <strong>plus rapide</strong> et permet de coloniser vite un milieu.'
        }
      ]
    },
    {
      titre: 'Les modes de reproduction asexuée',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Bouturage et multiplication végétative',
          contenu: 'Chez les <strong>plantes</strong>, la reproduction asexuée est appelée <strong>multiplication végétative</strong> :<br>— <strong>bouture</strong> : un fragment de tige replanté donne un nouveau plant (géranium) ;<br>— <strong>stolon</strong> : tige rampante qui s\'enracine (fraisier) ;<br>— <strong>tubercule</strong>, <strong>bulbe</strong> ou <strong>rhizome</strong> qui donnent de nouvelles plantes (pomme de terre, tulipe).'
        },
        {
          type: 'ex', label: 'EX', titre: 'Reproduction asexuée animale',
          contenu: 'Certains animaux se reproduisent aussi de façon asexuée :<br>— le <strong>bourgeonnement</strong> de l\'<strong>hydre</strong> : un petit bourgeon pousse sur le corps puis se détache ;<br>— la <strong>régénération</strong> du <strong>ver planaire</strong> : un fragment coupé reforme un individu complet.'
        }
      ]
    },
    {
      titre: 'Colonisation et biodiversité',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Coloniser un milieu',
          contenu: 'La reproduction asexuée permet de <strong>coloniser rapidement</strong> un milieu favorable, en produisant de nombreux individus identiques en peu de temps.<br>C\'est un avantage quand les conditions sont stables. En revanche, si le milieu change, tous les individus identiques sont vulnérables de la même façon.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Biodiversité',
          contenu: 'La <strong>biodiversité</strong> est la diversité des êtres vivants dans un milieu (nombre d\'espèces, variété des individus).<br>La reproduction <strong>sexuée</strong> favorise la biodiversité car elle crée des descendants variés, mieux capables de s\'adapter aux changements du milieu.'
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRE 8 — La nutrition des végétaux et la photosynthèse
// ════════════════════════════════════════════════════════════════════════════
{
  id: 'svt-5e-nutrition-vegetaux',
  filiere: '5eme',
  matiere: 'svt',
  titre: 'La nutrition des végétaux et la photosynthèse',
  ordre: 8,
  enrich: false,
  sections: [
    {
      titre: 'Les besoins des végétaux',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Autotrophie',
          contenu: 'Contrairement aux animaux, les <strong>plantes vertes</strong> n\'ont pas besoin de manger d\'autres êtres vivants : elles <strong>fabriquent elles-mêmes</strong> leur matière organique. On dit qu\'elles sont <strong>autotrophes</strong>.<br>Pour cela, elles utilisent uniquement des matières minérales et de la lumière.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Les besoins de la plante',
          contenu: 'Pour vivre et grandir, une plante verte a besoin :<br>— d\'<strong>eau</strong> et de <strong>sels minéraux</strong>, prélevés dans le sol par les <strong>racines</strong> ;<br>— de <strong>dioxyde de carbone</strong> (CO$_2$), prélevé dans l\'air par les <strong>feuilles</strong> ;<br>— de <strong>lumière</strong>, captée par les feuilles.'
        }
      ]
    },
    {
      titre: 'Le prélèvement dans le sol',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Sève brute',
          contenu: 'Les <strong>racines</strong> absorbent l\'<strong>eau</strong> et les <strong>sels minéraux</strong> du sol. Ce mélange forme la <strong>sève brute</strong>, qui monte des racines vers les feuilles dans des vaisseaux conducteurs.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les poils absorbants',
          contenu: 'Les racines portent de très nombreux <strong>poils absorbants</strong>, fins et nombreux, qui augmentent considérablement la <strong>surface de contact</strong> avec le sol.<br>On retrouve le principe général : une <strong>grande surface</strong> facilite les échanges (ici l\'absorption d\'eau et de sels minéraux).'
        }
      ]
    },
    {
      titre: 'La photosynthèse',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Photosynthèse',
          contenu: 'La <strong>photosynthèse</strong> est la fabrication de matière organique (glucose) par les plantes vertes, <strong>à la lumière</strong>, à partir d\'eau et de dioxyde de carbone.<br>Elle se déroule dans les <strong>feuilles</strong>, grâce à un pigment vert : la <strong>chlorophylle</strong>.'
        },
        {
          type: 'form', label: 'FORM', titre: 'Bilan de la photosynthèse',
          contenu: 'Le bilan de la photosynthèse (en présence de lumière) :<br>$$\\text{eau} + \\text{dioxyde de carbone} \\xrightarrow{\\text{lumière}} \\text{glucose} + \\text{dioxygène}$$La plante <strong>fabrique du glucose</strong> (matière organique) et <strong>rejette du dioxygène</strong>. C\'est l\'origine de l\'O$_2$ de l\'atmosphère.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Conditions de la photosynthèse',
          contenu: 'La photosynthèse n\'a lieu que si <strong>trois conditions</strong> sont réunies :<br>— la présence de <strong>lumière</strong> (le jour seulement) ;<br>— la présence de <strong>chlorophylle</strong> (parties vertes) ;<br>— la disponibilité d\'<strong>eau</strong> et de <strong>CO$_2$</strong>.<br>Sans lumière, pas de photosynthèse : mais la plante <strong>respire</strong> en permanence (jour et nuit).'
        },
        {
          type: 'ex', label: 'EX', titre: 'Mise en évidence de l\'amidon',
          contenu: 'On éclaire une feuille de géranium pendant la journée, puis on la teste à l\'<strong>eau iodée</strong> (qui colore l\'amidon en <strong>bleu-noir</strong>).<br>— Partie <strong>éclairée</strong> : se colore en bleu-noir → elle a fabriqué de l\'<strong>amidon</strong> par photosynthèse.<br>— Partie <strong>cachée de la lumière</strong> (cache opaque) : reste brune → pas d\'amidon.<br>Conclusion : la photosynthèse nécessite la lumière.'
        }
      ]
    },
    {
      titre: 'Plantes et écosystème',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Les plantes, base des chaînes alimentaires',
          contenu: 'Comme elles produisent leur propre matière organique, les <strong>plantes vertes</strong> sont des <strong>producteurs</strong>. Elles sont à la <strong>base des chaînes alimentaires</strong> : tous les animaux dépendent, directement ou indirectement, de la matière fabriquée par les végétaux.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Rôle dans le cycle du carbone et de l\'oxygène',
          contenu: 'Les plantes jouent un rôle clé dans l\'équilibre de l\'atmosphère :<br>— elles <strong>absorbent du CO$_2$</strong> (gaz à effet de serre) ;<br>— elles <strong>libèrent du O$_2$</strong>, indispensable à la respiration de la plupart des êtres vivants.<br>La préservation des forêts (« poumons » de la planète) est donc essentielle.'
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRE 9 — L'eau, l'érosion, le transport et la sédimentation
// ════════════════════════════════════════════════════════════════════════════
{
  id: 'svt-5e-erosion-sedimentation',
  filiere: '5eme',
  matiere: 'svt',
  titre: 'L\'eau, l\'érosion, le transport et la sédimentation',
  ordre: 9,
  enrich: false,
  sections: [
    {
      titre: 'L\'érosion des paysages',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Érosion',
          contenu: 'L\'<strong>érosion</strong> est l\'ensemble des phénomènes qui usent et <strong>désagrègent les roches</strong> en surface. Les principaux agents d\'érosion sont l\'<strong>eau</strong> (pluie, rivières, mer), le <strong>vent</strong>, le <strong>gel</strong> et les <strong>variations de température</strong>.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Altération des roches',
          contenu: 'L\'<strong>altération</strong> est la fragmentation et la transformation des roches sur place :<br>— le <strong>gel</strong> : l\'eau qui s\'infiltre dans les fissures gèle, augmente de volume et fait éclater la roche (gélifraction) ;<br>— l\'eau de pluie <strong>dissout</strong> certaines roches (le calcaire) ;<br>— les <strong>racines</strong> des plantes écartent les blocs.<br>L\'altération produit des débris de toutes tailles : blocs, galets, sables, argiles.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'L\'eau, agent principal',
          contenu: 'L\'<strong>eau</strong> est le principal agent qui modèle les paysages. La pluie arrache les particules, les rivières creusent leur lit (<strong>vallées</strong>), la mer attaque les côtes (<strong>falaises</strong>).<br>L\'érosion est lente à l\'échelle humaine, mais transforme totalement les paysages sur des milliers à des millions d\'années.'
        }
      ]
    },
    {
      titre: 'Le transport des particules',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Transport',
          contenu: 'Le <strong>transport</strong> est le déplacement des débris arrachés par l\'érosion, principalement par les <strong>cours d\'eau</strong>.<br>Pendant le transport, les particules s\'<strong>usent</strong> et se <strong>cassent</strong> : les blocs anguleux deviennent des <strong>galets arrondis</strong> puis du <strong>sable</strong>.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Transport et vitesse du courant',
          contenu: 'La capacité de transport dépend de la <strong>vitesse du courant</strong> :<br>— un courant <strong>rapide</strong> (en montagne) transporte de gros éléments (blocs, galets) ;<br>— un courant <strong>lent</strong> (en plaine) ne transporte que des éléments fins (sable, argile).<br>Plus le courant ralentit, plus les particules transportées sont fines.'
        }
      ]
    },
    {
      titre: 'La sédimentation',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Sédimentation',
          contenu: 'La <strong>sédimentation</strong> est le <strong>dépôt</strong> des particules transportées lorsque le courant ralentit ou s\'arrête (lacs, embouchures, fond de mer).<br>Les particules déposées forment des <strong>sédiments</strong> qui s\'accumulent en couches superposées appelées <strong>strates</strong>.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Tri des sédiments',
          contenu: 'Au moment du dépôt, les particules se <strong>trient selon leur taille</strong> : les plus grosses (galets, sables) se déposent en premier quand le courant ralentit, les plus fines (argiles) se déposent en dernier, en eau calme.<br>C\'est le <strong>tri granulométrique</strong>.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Le delta d\'un fleuve',
          contenu: 'À l\'embouchure d\'un fleuve, le courant ralentit fortement au contact de la mer. Le fleuve dépose alors les sédiments qu\'il transportait, formant un <strong>delta</strong>.<br>Les sables se déposent près de l\'embouchure, les argiles (plus fines) sont emportées plus loin avant de se déposer en eau calme. On observe ainsi un tri des sédiments du plus grossier au plus fin.'
        }
      ]
    },
    {
      titre: 'Des sédiments aux roches sédimentaires',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Roche sédimentaire',
          contenu: 'Une <strong>roche sédimentaire</strong> se forme par la <strong>transformation lente des sédiments</strong> accumulés. Au fil du temps, sous le poids des couches supérieures, les sédiments se compactent et se <strong>cimentent</strong> : ils durcissent et deviennent une roche.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Quelques roches sédimentaires',
          contenu: 'Exemples de roches sédimentaires courantes :<br>— le <strong>grès</strong> : grains de sable cimentés ;<br>— le <strong>calcaire</strong> : issu de débris de coquilles et de boues calcaires ;<br>— l\'<strong>argile</strong> : formée de particules très fines.<br>Ces roches se forment en <strong>strates</strong> visibles dans les falaises et les carrières.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Fossiles et reconstitution du passé',
          contenu: 'Les roches sédimentaires peuvent contenir des <strong>fossiles</strong> : restes ou traces d\'êtres vivants conservés dans la roche.<br>Les fossiles permettent de <strong>reconstituer les milieux du passé</strong> : la présence de coquillages fossiles dans une roche calcaire indique qu\'à cet endroit se trouvait autrefois la mer.'
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRE 10 — Météorologie et climats
// ════════════════════════════════════════════════════════════════════════════
{
  id: 'svt-5e-meteo-climats',
  filiere: '5eme',
  matiere: 'svt',
  titre: 'Météorologie et climats',
  ordre: 10,
  enrich: false,
  sections: [
    {
      titre: 'Météo et climat',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Météorologie',
          contenu: 'La <strong>météorologie</strong> est l\'étude du <strong>temps qu\'il fait</strong> à un endroit donné et à un instant donné.<br>Elle décrit des phénomènes qui changent rapidement : température, pluie, vent, nuages, pression. La météo se prévoit à <strong>court terme</strong> (quelques jours).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Climat',
          contenu: 'Le <strong>climat</strong> est l\'ensemble des conditions météorologiques <strong>moyennes</strong> d\'une région, observées sur une <strong>longue durée</strong> (au moins 30 ans).<br>Météo ≠ climat : la météo décrit le temps d\'un jour, le climat caractérise une région sur des décennies.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Les instruments de mesure',
          contenu: 'Pour caractériser le temps, on mesure plusieurs grandeurs :<br>— la <strong>température</strong> → thermomètre ;<br>— les <strong>précipitations</strong> → pluviomètre ;<br>— la <strong>vitesse du vent</strong> → anémomètre, et sa direction → girouette ;<br>— la <strong>pression</strong> → baromètre ;<br>— l\'<strong>humidité</strong> → hygromètre.'
        }
      ]
    },
    {
      titre: 'Les masses d\'air et les vents',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Mouvements de l\'air',
          contenu: 'L\'<strong>air chaud</strong> est plus léger : il <strong>monte</strong>. L\'<strong>air froid</strong> est plus dense : il <strong>descend</strong>.<br>Ces déplacements d\'air créent les <strong>vents</strong>. Le Soleil, en chauffant inégalement la surface de la Terre, est le moteur de ces mouvements.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Le cycle de l\'eau',
          contenu: 'L\'eau passe sans cesse d\'un état à un autre : c\'est le <strong>cycle de l\'eau</strong>.<br>— <strong>Évaporation</strong> : l\'eau des océans s\'évapore sous l\'effet du Soleil.<br>— <strong>Condensation</strong> : la vapeur monte, refroidit et forme les <strong>nuages</strong>.<br>— <strong>Précipitations</strong> : pluie, neige, grêle retombent.<br>— <strong>Ruissellement</strong> et infiltration : l\'eau rejoint les rivières et les océans.'
        }
      ]
    },
    {
      titre: 'Les différents climats',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Les grands climats',
          contenu: 'Selon la latitude, on distingue de grands types de climats :<br>— climat <strong>polaire</strong> : très froid (pôles) ;<br>— climat <strong>tempéré</strong> : saisons marquées (France) ;<br>— climat <strong>tropical</strong> : chaud, saison sèche et saison des pluies ;<br>— climat <strong>équatorial</strong> : chaud et humide toute l\'année ;<br>— climat <strong>aride</strong> : très sec (déserts).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Climat et latitude',
          contenu: 'Le climat dépend surtout de la <strong>latitude</strong> : à l\'<strong>équateur</strong>, les rayons du Soleil arrivent presque à la verticale, l\'énergie reçue est forte → il fait chaud.<br>Aux <strong>pôles</strong>, les rayons arrivent très inclinés, l\'énergie est répartie sur une grande surface → il fait froid.'
        }
      ]
    },
    {
      titre: 'Le changement climatique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Réchauffement climatique',
          contenu: 'Le <strong>réchauffement climatique</strong> est l\'augmentation de la <strong>température moyenne</strong> de la planète observée depuis plus d\'un siècle.<br>Il est principalement dû aux <strong>activités humaines</strong> qui rejettent des <strong>gaz à effet de serre</strong> (CO$_2$ notamment) en brûlant des combustibles (charbon, pétrole, gaz).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Conséquences et actions',
          contenu: 'Les conséquences du réchauffement :<br>— <strong>fonte des glaces</strong> et hausse du niveau des mers ;<br>— événements <strong>extrêmes</strong> plus fréquents (canicules, sécheresses) ;<br>— déplacement des espèces et perte de biodiversité.<br>Pour agir : <strong>réduire</strong> les émissions de gaz à effet de serre (transports, énergie) et préserver les forêts.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Lire un climatogramme',
          contenu: 'Un <strong>climatogramme</strong> représente, pour une ville, la <strong>température moyenne</strong> (courbe) et les <strong>précipitations</strong> (barres) de chaque mois.<br>Exemple : un climatogramme avec des températures élevées toute l\'année et de fortes pluies de juin à septembre indique un climat <strong>tropical</strong> à saison des pluies. C\'est l\'outil de base pour identifier le climat d\'une région.'
        }
      ]
    }
  ]
}

]

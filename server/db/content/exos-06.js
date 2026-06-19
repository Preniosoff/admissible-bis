// Exercices charnières — lot 06 (français collège 5e/6e)
// Format append : ajoute une section « Exercice charnière » à chaque chapitre existant.

export const DATA = [
  {
    id: 'fr-5e-conjugaison',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Sur la piste du cerf blanc : tous les temps du récit',
            contenu: `<strong>Énoncé.</strong> Lis attentivement ce début de récit, puis réponds aux questions.<br><br>
<em>« Le jeune écuyer <strong>traversait</strong> (1) la forêt depuis l'aube. Les branches <strong>craquaient</strong> (2) sous les sabots de son cheval. Soudain, un cerf blanc <strong>bondit</strong> (3) sur le sentier, <strong>s'immobilisa</strong> (4), puis <strong>disparut</strong> (5) dans les fourrés. L'écuyer <strong>comprit</strong> (6) qu'il <strong>avait rencontré</strong> (7) une créature merveilleuse. « Si je <strong>suis</strong> (8) cet animal, pensa-t-il, je <strong>découvrirai</strong> (9) peut-être le château dont parlent les anciens. » Il éperonna sa monture et s'élança. »</em><br><br>
<strong>1.</strong> Pour chacun des verbes numérotés (1) à (9), donne l'<strong>infinitif</strong>, le <strong>temps</strong> et le <strong>mode</strong>. Attention : deux d'entre eux cachent un piège.<br>
<strong>2.</strong> Observe les verbes (1)-(2) puis (3)-(4)-(5). Pourquoi l'auteur passe-t-il de l'imparfait au passé simple ? Énonce la règle d'emploi de ces deux temps dans un récit au passé.<br>
<strong>3.</strong> « il <strong>avait rencontré</strong> » : comment ce temps composé est-il formé ? Quelle nuance de sens apporte-t-il par rapport à un passé simple ? Réécris ensuite la dernière phrase (« Il éperonna sa monture et s'élança ») au <strong>passé composé</strong>, puis au <strong>plus-que-parfait</strong>. Attention au choix de l'auxiliaire.<br>
<strong>4.</strong> Réécris la phrase entre guillemets en commençant par « Si je <strong>suivais</strong> cet animal… » et fais toutes les modifications nécessaires. Quel mode et quel temps obtiens-tu pour le second verbe ? Rappelle sa formation.<br>
<strong>5.</strong> Le seigneur ordonne : « Il faut que tu <strong>suives</strong> ce cerf et que tu <strong>reviennes</strong> avant la nuit. » Identifie le mode et le temps des deux verbes en gras et justifie leur emploi. Puis exprime le même ordre à l'<strong>impératif présent</strong>, 2<sup>e</sup> personne du singulier.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Identification des neuf verbes.</strong>
<ul>
<li>(1) traversait → <em>traverser</em>, imparfait, indicatif.</li>
<li>(2) craquaient → <em>craquer</em>, imparfait, indicatif.</li>
<li>(3) bondit → <em>bondir</em>, <strong>passé simple</strong>, indicatif. Piège n°1 : la forme est identique au présent (« il bondit »). Ici le récit est au passé et les verbes voisins (s'immobilisa, disparut) sont au passé simple : c'est donc un passé simple.</li>
<li>(4) s'immobilisa → <em>s'immobiliser</em>, passé simple, indicatif.</li>
<li>(5) disparut → <em>disparaître</em>, passé simple, indicatif.</li>
<li>(6) comprit → <em>comprendre</em>, passé simple, indicatif.</li>
<li>(7) avait rencontré → <em>rencontrer</em>, <strong>plus-que-parfait</strong>, indicatif (temps composé).</li>
<li>(8) suis → <em>suivre</em> (et non <em>être</em> !), présent, indicatif. Piège n°2 : on peut remplacer par « si je <em>poursuis</em> cet animal » ; « être cet animal » n'aurait aucun sens.</li>
<li>(9) découvrirai → <em>découvrir</em>, futur simple, indicatif.</li>
</ul>
<strong>2. Imparfait ou passé simple ?</strong> Les verbes (1) et (2) à l'imparfait posent le <strong>décor</strong> : ce sont des actions qui durent, l'arrière-plan du récit (la traversée de la forêt, le craquement continu des branches). Les verbes (3), (4), (5) au passé simple racontent des actions <strong>brèves, soudaines et achevées</strong> qui font avancer l'histoire : c'est le premier plan, annoncé par l'adverbe « Soudain ». <em>Règle</em> : dans un récit au passé, l'imparfait décrit et installe le décor ; le passé simple rapporte les actions de premier plan.<br><br>
<strong>3. Le plus-que-parfait.</strong> « avait rencontré » = auxiliaire <em>avoir</em> à l'<strong>imparfait</strong> + <strong>participe passé</strong> du verbe (rencontré). Il exprime une action <strong>antérieure</strong> à une autre action passée : la rencontre a eu lieu <em>avant</em> que l'écuyer ne comprenne.<br>
Réécritures de « Il éperonna sa monture et s'élança » :
<ul>
<li>Passé composé : « Il <strong>a éperonné</strong> sa monture et <strong>s'est élancé</strong>. »</li>
<li>Plus-que-parfait : « Il <strong>avait éperonné</strong> sa monture et <strong>s'était élancé</strong>. »</li>
</ul>
<em>Éperonner</em> se conjugue avec <strong>avoir</strong> ; <em>s'élancer</em> est un verbe <strong>pronominal</strong>, donc il se conjugue avec <strong>être</strong> (et le participe s'accorde avec le sujet : élancé, masculin singulier).<br><br>
<strong>4. Le conditionnel présent.</strong> « Si je <strong>suivais</strong> cet animal, je <strong>découvrirais</strong> peut-être le château dont parlent les anciens. » Après « si + imparfait », la principale passe au <strong>conditionnel présent</strong> : l'action n'est plus annoncée comme certaine (futur), elle est soumise à une condition. Formation : <strong>radical du futur + terminaisons de l'imparfait</strong> → découvrir-/-ais : je découvrir<em>ais</em>.<br><br>
<strong>5. Subjonctif et impératif.</strong> « que tu suives », « que tu reviennes » : <strong>subjonctif présent</strong> (terminaisons -es). Il s'emploie après « il faut que », qui exprime une <strong>obligation</strong>. Le même ordre à l'impératif présent, 2<sup>e</sup> personne du singulier, sans sujet exprimé : « <strong>Suis</strong> ce cerf et <strong>reviens</strong> avant la nuit ! » (le verbe <em>suivre</em>, du 3<sup>e</sup> groupe, garde son -s à l'impératif, contrairement aux verbes en -er).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'fr-5e-fonctions',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le messager de l\'aube : toutes les fonctions dans un récit',
            contenu: `<strong>Énoncé.</strong> Lis ce court récit, puis réponds aux questions.<br><br>
<em>« Au lever du jour, les chevaliers quittèrent le château. Perceval semblait inquiet : il confia son angoisse à son écuyer. Dans la grande salle, la reine attendait patiemment des nouvelles. Elle paraissait calme, mais son cœur battait avec violence. Bientôt surgit dans la cour un messager couvert de poussière : il apportait une lettre à la souveraine. »</em><br><br>
<strong>1.</strong> Relève le <strong>sujet</strong> de chacun des verbes suivants : <em>quittèrent, semblait, confia, attendait, battait, surgit, apportait</em>. Quelle particularité présente le sujet de « surgit » ? Quelle question permet de le retrouver ?<br>
<strong>2.</strong> Donne la fonction (COD ou COI) de chacun des groupes suivants et justifie chaque réponse par la question posée après le verbe : « le château », « son angoisse », « à son écuyer », « des nouvelles », « une lettre », « à la souveraine ».<br>
<strong>3.</strong> Relève les deux <strong>attributs du sujet</strong> du texte ainsi que les verbes qui les introduisent. Explique précisément pourquoi « inquiet » n'est <strong>pas</strong> un COD, alors que « son angoisse » en est un.<br>
<strong>4.</strong> Relève quatre <strong>compléments circonstanciels</strong> de sens différents ou variés (temps, lieu, manière) ; précise ce que chacun exprime, puis prouve sur l'un d'eux qu'il s'agit bien d'un CC grâce à deux manipulations.<br>
<strong>5.</strong> Dans « il apportait une lettre à la souveraine », remplace les deux compléments par les pronoms qui conviennent. Qu'est-ce que cette transformation confirme sur leur fonction ?<br>
<strong>6.</strong> Écriture : rédige deux phrases sur l'univers du texte. La première contiendra un <strong>verbe d'état + un attribut du sujet</strong> ; la seconde commencera par un <strong>CC de lieu</strong> et contiendra un <strong>COD</strong>. Souligne et nomme ces fonctions.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Les sujets.</strong>
<ul>
<li>quittèrent → <em>les chevaliers</em> ; semblait → <em>Perceval</em> ; confia → <em>il</em> (= Perceval) ; attendait → <em>la reine</em> ; battait → <em>son cœur</em> ; surgit → <em>un messager couvert de poussière</em> ; apportait → <em>il</em> (= le messager).</li>
<li>Le sujet de « surgit » est <strong>inversé</strong> : il est placé <em>après</em> le verbe. On le retrouve avec la question « <strong>Qui est-ce qui</strong> surgit dans la cour ? » → un messager couvert de poussière. C'est bien lui qui commande l'accord du verbe.</li>
</ul>
<strong>2. Les compléments du verbe.</strong>
<ul>
<li>« le château » : quittèrent <em>quoi ?</em> → <strong>COD</strong> (construction directe, sans préposition).</li>
<li>« son angoisse » : confia <em>quoi ?</em> → <strong>COD</strong>.</li>
<li>« à son écuyer » : confia <em>à qui ?</em> → <strong>COI</strong> (introduit par la préposition <em>à</em>).</li>
<li>« des nouvelles » : attendait <em>quoi ?</em> → <strong>COD</strong> (« des » est ici l'article indéfini pluriel, pas une préposition).</li>
<li>« une lettre » : apportait <em>quoi ?</em> → <strong>COD</strong>.</li>
<li>« à la souveraine » : apportait <em>à qui ?</em> → <strong>COI</strong>.</li>
</ul>
<strong>3. Les attributs du sujet.</strong> « <em>inquiet</em> » (introduit par <strong>semblait</strong>) et « <em>calme</em> » (introduit par <strong>paraissait</strong>). <em>Sembler</em> et <em>paraître</em> sont des <strong>verbes d'état</strong> : ils n'expriment pas une action mais une manière d'être. « Inquiet » ne désigne pas un objet distinct sur lequel porterait l'action : il exprime une <strong>qualité du sujet lui-même</strong> (Perceval = inquiet) et s'accorde avec lui. Au contraire, « son angoisse » suit un verbe d'action (<em>confier</em>) et désigne autre chose que le sujet : c'est un COD. Règle du cours : « Il regarde <em>la lune</em> » → COD ; « Il devient <em>médecin</em> » → attribut.<br><br>
<strong>4. Les compléments circonstanciels.</strong>
<ul>
<li>« Au lever du jour » → CC de <strong>temps</strong> (quand ?).</li>
<li>« Dans la grande salle » et « dans la cour » → CC de <strong>lieu</strong> (où ?).</li>
<li>« patiemment » et « avec violence » → CC de <strong>manière</strong> (comment ?).</li>
<li>« Bientôt » → CC de <strong>temps</strong>.</li>
</ul>
Preuve sur « Dans la grande salle » : il est <strong>déplaçable</strong> (« La reine attendait patiemment des nouvelles dans la grande salle ») et <strong>supprimable</strong> (« La reine attendait patiemment des nouvelles ») — la phrase reste correcte : c'est bien un CC.<br><br>
<strong>5. La pronominalisation.</strong> « Il <strong>la lui</strong> apportait. » Le COD « une lettre » est remplacé par le pronom <strong>la</strong> ; le COI « à la souveraine » est remplacé par le pronom <strong>lui</strong>. Cette transformation confirme la fonction de chaque groupe : le COD se pronominalise en <em>le/la/les</em>, le COI (introduit par <em>à</em>) en <em>lui/leur</em>.<br><br>
<strong>6. Écriture (exemple de réponse).</strong>
<ul>
<li>« Le messager <strong>demeurait</strong> <u>silencieux</u>. » → <em>silencieux</em> : attribut du sujet « le messager », introduit par le verbe d'état <em>demeurer</em>.</li>
<li>« <u>Dans la cour du château</u>, l'écuyer sellait <u>son cheval</u>. » → <em>Dans la cour du château</em> : CC de lieu ; <em>son cheval</em> : COD (sellait quoi ?).</li>
</ul>
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'fr-5e-litterature-moyenage',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du chevalier à la farce : deux visages du Moyen Âge',
            contenu: `<strong>Énoncé.</strong> Lis les deux documents, puis réponds aux questions.<br><br>
<strong>Document A — récit chevaleresque (texte inspiré des romans de la Table ronde)</strong><br>
<em>« Le jour de la Pentecôte, à la cour du roi Arthur, une demoiselle en pleurs parut devant la Table ronde. « Sire, dit-elle, un chevalier félon retient ma dame prisonnière au château du Gué Périlleux. » Le jeune Yvonet, armé chevalier depuis peu, se leva aussitôt : il jura sur son épée de délivrer la captive, car son serment l'obligeait à protéger les dames et les faibles. Après trois jours de chevauchée, il atteignit une rivière noire. Sur l'autre rive se dressait un pont plus étroit qu'une lame d'épée, gardé par un nain : « Passe ton chemin, chevalier ! Ce pont est enchanté : nul ne le franchit sans l'accord de la fée Morgane. » »</em><br><br>
<strong>Document B — scène de farce</strong><br>
<em>GAUTIER, le maître. — Maraud ! Où est le pâté que je t'avais confié ?<br>
COLIN, le valet, cachant ses mains derrière son dos. — Quel pâté, mon bon maître ?<br>
GAUTIER. — Le pâté de lièvre que je destinais au bailli !<br>
COLIN. — Ah, celui-là… Un chat l'a mangé, par ma foi !<br>
GAUTIER. — Un chat ? Et ces miettes, sur ton menton ?<br>
COLIN, s'essuyant vivement. — C'est que… j'ai goûté une miette pour savoir si le chat disait vrai !<br>
GAUTIER, saisissant son bâton. — Attends un peu, gourmand, que je t'assaisonne ! (Il le poursuit autour de la table.)</em><br><br>
<strong>1.</strong> Montre que le document A est un <strong>récit chevaleresque</strong> : relève trois indices de natures différentes (cadre médiéval, valeurs du chevalier, vocabulaire de la chevalerie) en citant le texte.<br>
<strong>2.</strong> Quels éléments rattachent ce récit à la <strong>légende arthurienne</strong> ? Cite-les, puis rappelle en deux ou trois phrases ce que tu sais du roi Arthur, de la Table ronde et de deux autres figures de cette légende.<br>
<strong>3.</strong> Relève un élément <strong>merveilleux</strong> dans le document A. Donne la définition du merveilleux et explique le rôle de cet élément dans le récit.<br>
<strong>4.</strong> À quel genre appartient le document B ? Justifie ta réponse par trois indices de <strong>présentation</strong>, puis identifie deux <strong>procédés comiques</strong> différents (comique de mots, de gestes, de situation) en citant le texte.<br>
<strong>5.</strong> Compare le héros du document A et le valet du document B : qu'est-ce que ces deux textes nous montrent de la littérature du Moyen Âge ?<br>
<strong>6.</strong> Écriture (une vingtaine de lignes) : imagine la suite du document A — Yvonet doit franchir le pont enchanté. Contraintes : respecte le schéma narratif (épreuve → résolution), introduis <strong>un élément merveilleux</strong>, emploie l'<strong>imparfait</strong> pour les descriptions et le <strong>passé simple</strong> pour les actions, insère au moins <strong>une réplique au discours direct</strong>.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Un récit chevaleresque.</strong>
<ul>
<li><em>Cadre médiéval</em> : la cour d'un roi, un « château », une fête religieuse (« le jour de la Pentecôte »), une « épée ».</li>
<li><em>Valeurs du chevalier</em> : Yvonet incarne l'idéal chevaleresque — il « jura sur son épée de délivrer la captive » et son « serment l'obligeait à protéger les dames et les faibles » : courage, fidélité à la parole donnée, protection des plus faibles, service des dames (esprit de l'amour courtois).</li>
<li><em>Vocabulaire de la chevalerie</em> : « armé chevalier » (l'adoubement), « félon » (le traître qui viole le code de la chevalerie), « chevauchée », « délivrer la captive ».</li>
</ul>
<strong>2. La légende arthurienne.</strong> Trois éléments rattachent le texte à cette légende : « la cour du roi <strong>Arthur</strong> », la « <strong>Table ronde</strong> » et la « <strong>fée Morgane</strong> ». Rappel de cours : le roi Arthur réunit autour de lui les chevaliers de la Table ronde ; la table est <strong>ronde</strong> pour que tous soient <strong>égaux</strong>. Le magicien <strong>Merlin</strong> conseille le roi. Parmi les chevaliers célèbres : <strong>Lancelot</strong>, et <strong>Perceval</strong> ou <strong>Galaad</strong>, les seuls assez purs pour espérer trouver le <strong>Graal</strong>, la coupe sacrée dont la quête est l'aventure la plus haute. C'est <strong>Chrétien de Troyes</strong>, au XII<sup>e</sup> siècle, qui a écrit les plus célèbres de ces romans (<em>Lancelot</em>, <em>Yvain ou le Chevalier au lion</em>, <em>Perceval</em>).<br><br>
<strong>3. Le merveilleux.</strong> « Ce pont est <strong>enchanté</strong> : nul ne le franchit sans l'accord de la <strong>fée Morgane</strong>. » Le <em>merveilleux</em> est la présence d'éléments magiques et surnaturels (fées, enchanteurs, objets enchantés) <strong>acceptés comme normaux</strong> dans le récit : personne ne s'étonne qu'un pont soit ensorcelé. Rôle : le pont enchanté constitue une <strong>épreuve</strong> qui permettra au héros de prouver sa valeur — le merveilleux sert la quête.<br><br>
<strong>4. Une scène de farce.</strong> Indices de présentation du texte théâtral : les <strong>noms des personnages</strong> en tête de réplique (GAUTIER, COLIN), les <strong>didascalies</strong> en italique qui indiquent les gestes (« cachant ses mains derrière son dos », « Il le poursuit autour de la table »), et l'absence de narrateur : tout passe par le <strong>dialogue</strong>. C'est une <strong>farce</strong> : courte pièce comique du Moyen Âge mettant en scène des personnages populaires (un maître, un valet) dans une histoire de tromperie — comme <em>La Farce de Maître Pathelin</em> (XV<sup>e</sup> siècle), célèbre histoire de « trompeur trompé ». Procédés comiques :
<ul>
<li><em>Comique de situation</em> : le mensonge absurde de Colin (« Un chat l'a mangé ») est démasqué par les miettes sur son menton — le menteur est pris en flagrant délit.</li>
<li><em>Comique de mots</em> : « j'ai goûté une miette pour savoir si le chat disait vrai » (excuse absurde) et le jeu de mots culinaire « que je t'<strong>assaisonne</strong> ! » (= que je te batte).</li>
<li><em>Comique de gestes</em> : Colin « s'essuyant vivement », la poursuite autour de la table, le bâton brandi.</li>
</ul>
<strong>5. Deux visages du Moyen Âge.</strong> Le document A présente un héros noble, guidé par un idéal sérieux (l'honneur, le serment, la protection des faibles) : il fait <strong>admirer</strong> les valeurs de la chevalerie. Le document B met en scène un valet rusé, menteur et gourmand : il cherche à faire <strong>rire</strong> d'un quotidien populaire. La littérature médiévale a donc deux registres complémentaires : l'idéal chevaleresque des romans de chevalerie et le rire de la farce.<br><br>
<strong>6. Écriture — démarche et texte modèle.</strong> Plan conseillé : 1) face à l'épreuve (description à l'imparfait) ; 2) l'affrontement ou la traversée (actions au passé simple) ; 3) l'aide merveilleuse ; 4) la victoire et la relance de la quête.<br><br>
<em>« Yvonet considéra le pont. La lame de pierre luisait sous la brume et, en contrebas, la rivière noire grondait comme une bête. Le jeune chevalier mit pied à terre et posa la main sur la garde de son épée. « Nain, répondit-il, j'ai juré de délivrer une dame : ni pont ni sortilège ne m'arrêteront. » Le nain éclata d'un rire aigre et frappa trois fois le sol de son bâton. Aussitôt, des flammes vertes coururent sur la pierre. Yvonet se souvint alors de l'anneau que sa marraine, une fée, lui avait offert le jour de son adoubement en lui disant : « Tant que tu le porteras, le feu ne pourra rien contre toi. » Il s'avança. Les flammes léchaient ses chausses sans le brûler ; le vent hurlait ; l'étroite passerelle tremblait sous ses pas, mais le chevalier gardait les yeux fixés sur l'autre rive. Quand il toucha enfin la terre ferme, les flammes moururent d'un coup et le nain s'inclina très bas : « Tu as vaincu l'enchantement, seigneur. La route du Gué Périlleux t'est ouverte. » Yvonet remonta en selle et reprit sa chevauchée, le cœur plein d'espérance. »</em><br><br>
On vérifie les contraintes : schéma narratif respecté (épreuve, péripétie, résolution, relance de la quête), élément merveilleux (l'anneau de la fée, les flammes vertes), imparfait pour le décor (« luisait », « grondait », « léchaient »), passé simple pour les actions (« considéra », « frappa », « s'avança », « toucha »), deux répliques au discours direct.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'fr-5e-propositions',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'La veillée : démonter les phrases complexes',
            contenu: `<strong>Énoncé.</strong> Lis ce texte dont les phrases sont numérotées, puis réponds aux questions.<br><br>
<em>« [1] Le soir tombait sur le village. [2] Les paysans rentrèrent les bêtes, fermèrent les portes et allumèrent les chandelles. [3] Marthe écoutait le vieux conteur qui parlait des chevaliers d'autrefois. [4] Elle espérait qu'il raconterait encore la légende du dragon, car cette histoire la faisait frissonner. [5] Dehors, le vent se leva ; la pluie frappa bientôt les volets. »</em><br><br>
<strong>1.</strong> Pour chaque phrase, relève les <strong>verbes conjugués</strong>, déduis-en le nombre de <strong>propositions</strong>, et dis si la phrase est <strong>simple</strong> ou <strong>complexe</strong>.<br>
<strong>2.</strong> Dans les phrases [2] et [5], délimite les propositions entre crochets et précise comment elles sont reliées : <strong>juxtaposition</strong> ou <strong>coordination</strong> ? Indique à chaque fois la marque exacte (signe de ponctuation ou conjonction).<br>
<strong>3.</strong> Phrase [3] : relève la <strong>proposition subordonnée relative</strong>. Quel mot l'introduit ? Quel est son antécédent ? Quel mot complète-t-elle ? Recopie aussi la proposition principale.<br>
<strong>4.</strong> Phrase [4] : elle contient deux liens de natures différentes. Identifie la <strong>subordonnée conjonctive</strong> (mot introducteur ? verbe complété ?), puis explique pourquoi « car cette histoire la faisait frissonner » n'est <strong>pas</strong> une subordonnée. Récite la liste complète des conjonctions de coordination.<br>
<strong>5.</strong> Relie les deux phrases simples « Le vent se leva. La pluie frappa les volets. » de <strong>trois manières différentes</strong> : (a) par juxtaposition, (b) par coordination avec la conjonction qui convient, (c) par subordination en utilisant « quand ». Nomme à chaque fois le lien obtenu.<br>
<strong>6.</strong> Écriture : rédige une phrase complexe d'<strong>au moins trois propositions</strong> sur le thème de la veillée, contenant à la fois une <strong>coordination</strong> et une <strong>subordonnée relative</strong>. Analyse-la ensuite (délimite et nomme chaque proposition).
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Compter les propositions.</strong> Rappel : autant de propositions que de verbes conjugués.
<ul>
<li>[1] <em>tombait</em> → 1 proposition → phrase <strong>simple</strong>.</li>
<li>[2] <em>rentrèrent, fermèrent, allumèrent</em> → 3 propositions → phrase <strong>complexe</strong>.</li>
<li>[3] <em>écoutait, parlait</em> → 2 propositions → phrase <strong>complexe</strong>.</li>
<li>[4] <em>espérait, raconterait, faisait</em> → 3 propositions → phrase <strong>complexe</strong>.</li>
<li>[5] <em>se leva, frappa</em> → 2 propositions → phrase <strong>complexe</strong>.</li>
</ul>
<strong>2. Juxtaposition et coordination.</strong>
<ul>
<li>[2] : [Les paysans rentrèrent les bêtes], [fermèrent les portes] [et allumèrent les chandelles]. Les deux premières propositions sont <strong>juxtaposées</strong> (reliées par une <strong>virgule</strong>) ; la troisième est <strong>coordonnée</strong> à la deuxième par la conjonction de coordination « <strong>et</strong> ».</li>
<li>[5] : [Dehors, le vent se leva] ; [la pluie frappa bientôt les volets]. Deux propositions indépendantes <strong>juxtaposées</strong>, reliées par un <strong>point-virgule</strong>.</li>
</ul>
<strong>3. La subordonnée relative.</strong> Proposition principale : « Marthe écoutait le vieux conteur ». Subordonnée relative : « <strong>qui parlait des chevaliers d'autrefois</strong> », introduite par le pronom relatif « <strong>qui</strong> ». Son antécédent est le groupe nominal « <strong>le vieux conteur</strong> » : la relative complète ce <strong>nom</strong> (c'est la marque de la relative : elle enrichit un nom, comme le ferait un adjectif).<br><br>
<strong>4. Conjonctive ou coordonnée ?</strong> « <strong>qu'il raconterait encore la légende du dragon</strong> » est une <strong>subordonnée conjonctive</strong> introduite par la conjonction de subordination « <strong>que</strong> » : elle complète le <strong>verbe</strong> « espérait » (elle espérait <em>quoi ?</em>) et ne peut pas exister seule. En revanche, « car cette histoire la faisait frissonner » est reliée au reste par « <strong>car</strong> », qui appartient à la liste des conjonctions de <strong>coordination</strong> : <em>mais, ou, et, donc, or, ni, car</em> (« Mais où est donc Ornicar ? »). C'est donc une proposition <strong>coordonnée</strong>, et non une subordonnée — attention au piège : « car » exprime la cause comme « parce que », mais seul « parce que » introduit une subordination.<br><br>
<strong>5. Les trois manipulations.</strong>
<ul>
<li>(a) Juxtaposition : « Le vent se leva<strong>,</strong> la pluie frappa les volets. » (les deux indépendantes sont reliées par une virgule).</li>
<li>(b) Coordination : « Le vent se leva <strong>et</strong> la pluie frappa les volets. » (on pourrait aussi employer « donc » pour marquer la conséquence).</li>
<li>(c) Subordination : « <strong>Quand le vent se leva</strong>, la pluie frappa les volets. » → « Quand le vent se leva » est une subordonnée conjonctive de temps ; « la pluie frappa les volets » est la principale.</li>
</ul>
<strong>6. Écriture (exemple de réponse).</strong> « Marthe adorait les histoires que racontait le vieux conteur, mais elle redoutait le moment où il faudrait monter se coucher. »<br>
Analyse : [Marthe adorait les histoires] → proposition <strong>principale</strong> ; [que racontait le vieux conteur] → subordonnée <strong>relative</strong>, pronom relatif « que », antécédent « les histoires » ; [mais elle redoutait le moment] → proposition <strong>coordonnée</strong> à la première par « mais » ; [où il faudrait monter se coucher] → subordonnée <strong>relative</strong>, pronom relatif « où », antécédent « le moment ». Quatre propositions : la phrase est bien complexe et respecte les deux contraintes.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'fr-6e-classes-grammaticales',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le chat sur la table : étiqueter chaque mot',
            contenu: `<strong>Énoncé.</strong> Lis ce petit texte, puis réponds aux questions.<br><br>
<em>« Oh ! Hier, le jeune chat noir a bondi sur la table et il a renversé un grand vase bleu. Maman le gronde doucement, mais elle sourit, car cette petite bête est vraiment trop mignonne. »</em><br><br>
<strong>1.</strong> Classe les mots suivants dans un tableau à deux colonnes (<strong>classes variables</strong> / <strong>classes invariables</strong>) et donne la classe précise de chacun : <em>hier, chat, et, il, doucement, sur, mignonne, cette, sourit, oh</em>.<br>
<strong>2.</strong> Compare « <strong>le</strong> jeune chat noir » et « Maman <strong>le</strong> gronde ». Le mot « le » a-t-il la même classe grammaticale dans les deux cas ? Justifie ta réponse.<br>
<strong>3.</strong> Relève tous les <strong>déterminants</strong> du texte et précise leur sorte (article défini, article indéfini, déterminant démonstratif).<br>
<strong>4.</strong> Relève les <strong>adjectifs qualificatifs</strong> et indique pour chacun le nom qu'il précise. Comment peut-on prouver que l'adjectif est une classe <strong>variable</strong> ? Donne un exemple.<br>
<strong>5.</strong> Réécris la première phrase en remplaçant « le jeune chat noir » par « <strong>les jeunes chats noirs</strong> » et fais toutes les modifications nécessaires. Quels mots ont changé de forme ? Lesquels n'ont pas changé ? Quelle conclusion en tires-tu ?<br>
<strong>6.</strong> Écriture : invente une phrase (ou deux) contenant au moins : un <strong>nom</strong>, un <strong>déterminant</strong>, un <strong>adjectif</strong>, un <strong>pronom</strong>, un <strong>verbe</strong>, un <strong>adverbe</strong> et une <strong>préposition</strong>. Étiquette ensuite chaque mot avec sa classe.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Le tableau des classes.</strong>
<ul>
<li><strong>Classes variables</strong> : <em>chat</em> → nom commun ; <em>il</em> → pronom personnel ; <em>mignonne</em> → adjectif qualificatif ; <em>cette</em> → déterminant démonstratif ; <em>sourit</em> → verbe (<em>sourire</em>, conjugué au présent).</li>
<li><strong>Classes invariables</strong> : <em>hier</em> → adverbe (de temps) ; <em>et</em> → conjonction de coordination ; <em>doucement</em> → adverbe (de manière) ; <em>sur</em> → préposition ; <em>oh</em> → interjection.</li>
</ul>
<strong>2. « Le » : déterminant ou pronom ?</strong> Non, « le » n'a pas la même classe dans les deux cas.
<ul>
<li>Dans « <strong>le</strong> jeune chat noir », « le » précède un <strong>nom</strong> : c'est un <strong>déterminant</strong> (article défini).</li>
<li>Dans « Maman <strong>le</strong> gronde », « le » est placé devant un <strong>verbe</strong> et <strong>remplace</strong> le groupe nominal « le jeune chat noir » (Maman gronde <em>qui ?</em> → le chat) : c'est un <strong>pronom</strong> personnel.</li>
</ul>
C'est la preuve que pour trouver la classe d'un mot, il faut regarder le mot qu'il accompagne.<br><br>
<strong>3. Les déterminants du texte.</strong> <em>le</em> (article défini, devant « jeune chat noir »), <em>la</em> (article défini, devant « table »), <em>un</em> (article indéfini, devant « grand vase bleu »), <em>cette</em> (déterminant démonstratif, devant « petite bête »). Attention : le « le » de « Maman le gronde » n'est pas un déterminant (voir question 2).<br><br>
<strong>4. Les adjectifs qualificatifs.</strong> <em>jeune</em> et <em>noir</em> précisent le nom « chat » ; <em>grand</em> et <em>bleu</em> précisent le nom « vase » ; <em>petite</em> et <em>mignonne</em> précisent le nom « bête ». Preuve que l'adjectif est variable : il <strong>s'accorde</strong> en genre et en nombre avec le nom. Exemple : « un chat <em>noir</em> » → « une chatte <em>noire</em> » → « des chats <em>noirs</em> » : l'adjectif change de forme.<br><br>
<strong>5. La phrase au pluriel.</strong> « Oh ! Hier, <strong>les jeunes chats noirs ont bondi</strong> sur la table et <strong>ils ont renversé</strong> un grand vase bleu. »
<ul>
<li><strong>Ont changé</strong> : le déterminant (le → les), l'adjectif (jeune → jeunes, noir → noirs), le nom (chat → chats), le verbe (a bondi → ont bondi ; a renversé → ont renversé, car le verbe s'accorde avec son sujet), le pronom (il → ils). Ce sont toutes des classes <strong>variables</strong>.</li>
<li><strong>N'ont pas changé</strong> : <em>oh</em> (interjection), <em>hier</em> (adverbe), <em>sur</em> (préposition), <em>et</em> (conjonction). Ce sont les classes <strong>invariables</strong> : elles gardent toujours la même forme.</li>
</ul>
Conclusion : les mots variables changent de forme selon le genre, le nombre ou la personne ; les mots invariables ne changent jamais.<br><br>
<strong>6. Écriture (exemple de réponse).</strong> « Soudain, le petit oiseau s'envole vers son nid et il chante joyeusement. »<br>
Étiquetage : <em>Soudain</em> → adverbe ; <em>le</em> → déterminant (article défini) ; <em>petit</em> → adjectif qualificatif ; <em>oiseau</em> → nom commun ; <em>s'envole</em> → verbe (avec le pronom <em>s'</em>) ; <em>vers</em> → préposition ; <em>son</em> → déterminant possessif ; <em>nid</em> → nom commun ; <em>et</em> → conjonction de coordination ; <em>il</em> → pronom personnel ; <em>chante</em> → verbe ; <em>joyeusement</em> → adverbe.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'fr-6e-conjugaison',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le rouge-gorge de Lina : quatre temps en un récit',
            contenu: `<strong>Énoncé.</strong> Lis ce texte, puis réponds aux questions.<br><br>
<em>« Chaque matin, Lina <strong>prend</strong> (1) le chemin de l'école et elle <strong>observe</strong> (2) les oiseaux. L'an dernier, ils <strong>chantaient</strong> (3) déjà dans les haies du jardin. Un jour, elle <strong>aperçut</strong> (4) un rouge-gorge qui <strong>se posa</strong> (5) sur son épaule. « Demain, je <strong>reviendrai</strong> (6) avec des graines », promit-elle. »</em><br><br>
<strong>1.</strong> Pour chaque verbe numéroté (1) à (6), donne l'<strong>infinitif</strong>, le <strong>groupe</strong>, le <strong>temps</strong> et la <strong>personne</strong>.<br>
<strong>2.</strong> Conjugue au <strong>présent de l'indicatif</strong> : nous (commencer), nous (manger), tu (prendre), ils (aller), vous (être). Attention aux particularités d'orthographe.<br>
<strong>3.</strong> Réécris « Demain, je reviendrai avec des graines » avec <strong>nous</strong>, puis avec <strong>elles</strong>. Conjugue ensuite au <strong>futur simple</strong> : être (tu), avoir (il), faire (nous), aller (ils). Rappelle la règle de formation du futur pour les verbes du 1<sup>er</sup> groupe.<br>
<strong>4.</strong> Explique pourquoi le verbe (3) est à l'<strong>imparfait</strong> alors que le verbe (4) est au <strong>passé simple</strong>. Puis complète sans te tromper de terminaison : « Tous les soirs, je ferm… les volets. » / « Ce soir-là, je ferm… les volets plus tôt que d'habitude. » Justifie.<br>
<strong>5.</strong> Transpose la première phrase (« Chaque matin, Lina prend le chemin de l'école et elle observe les oiseaux ») à l'<strong>imparfait</strong> en commençant par « Autrefois », puis au <strong>futur simple</strong> en commençant par « Demain ».<br>
<strong>6.</strong> Bilan : conjugue <strong>être</strong> puis <strong>avoir</strong> à la 1<sup>re</sup> personne du singulier aux quatre temps étudiés (présent, futur simple, imparfait, passé simple).
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Identification des verbes.</strong>
<ul>
<li>(1) prend → <em>prendre</em>, 3<sup>e</sup> groupe, présent de l'indicatif, 3<sup>e</sup> personne du singulier.</li>
<li>(2) observe → <em>observer</em>, 1<sup>er</sup> groupe, présent, 3<sup>e</sup> pers. du singulier.</li>
<li>(3) chantaient → <em>chanter</em>, 1<sup>er</sup> groupe, imparfait, 3<sup>e</sup> pers. du pluriel.</li>
<li>(4) aperçut → <em>apercevoir</em>, 3<sup>e</sup> groupe, passé simple, 3<sup>e</sup> pers. du singulier.</li>
<li>(5) se posa → <em>se poser</em>, 1<sup>er</sup> groupe, passé simple, 3<sup>e</sup> pers. du singulier.</li>
<li>(6) reviendrai → <em>revenir</em>, 3<sup>e</sup> groupe, futur simple, 1<sup>re</sup> pers. du singulier.</li>
</ul>
<strong>2. Le présent et ses pièges.</strong> nous <strong>commençons</strong> (la cédille garde le son [s]) ; nous <strong>mangeons</strong> (le e garde le son [j]) ; tu <strong>prends</strong> (les verbes en -dre gardent le d : -ds) ; ils <strong>vont</strong> (aller est un verbe irrégulier du 3<sup>e</sup> groupe) ; vous <strong>êtes</strong> (forme irrégulière, sans -ez).<br><br>
<strong>3. Le futur simple.</strong> « Demain, <strong>nous reviendrons</strong> avec des graines. » / « Demain, <strong>elles reviendront</strong> avec des graines. »<br>
être → tu <strong>seras</strong> ; avoir → il <strong>aura</strong> ; faire → nous <strong>ferons</strong> ; aller → ils <strong>iront</strong>.<br>
Règle : pour les verbes du 1<sup>er</sup> groupe, le futur se forme sur l'<strong>infinitif entier</strong> + les terminaisons <strong>-ai, -as, -a, -ons, -ez, -ont</strong> (je chanter<em>ai</em>). Les verbes irréguliers (être, avoir, faire, aller, venir…) changent de radical (ser-, aur-, fer-, ir-, viendr-) mais gardent les mêmes terminaisons.<br><br>
<strong>4. Imparfait ou passé simple ?</strong> (3) « chantaient » est à l'imparfait car il décrit une action qui <strong>durait et se répétait</strong> dans le passé (le décor, l'arrière-plan : « L'an dernier… déjà »). (4) « aperçut » est au passé simple car il raconte une action <strong>brève et soudaine</strong> qui fait avancer le récit (« Un jour » introduit l'événement de premier plan).<br>
Complétion : « Tous les soirs, je ferm<strong>ais</strong> les volets » (habitude → imparfait, terminaison <strong>-ais</strong>) ; « Ce soir-là, je ferm<strong>ai</strong> les volets plus tôt que d'habitude » (action unique et datée du récit → passé simple, terminaison <strong>-ai</strong>). Astuce : à l'oreille on confond -ai et -ais ; on remplace par « nous » pour entendre la différence (nous fermions / nous fermâmes).<br><br>
<strong>5. Transpositions.</strong>
<ul>
<li>Imparfait : « Autrefois, Lina <strong>prenait</strong> le chemin de l'école et elle <strong>observait</strong> les oiseaux. »</li>
<li>Futur simple : « Demain, Lina <strong>prendra</strong> le chemin de l'école et elle <strong>observera</strong> les oiseaux. »</li>
</ul>
On remarque que les terminaisons de l'imparfait (-ait) sont les mêmes pour tous les verbes, et que le futur de <em>prendre</em> se forme sur l'infinitif sans le e final (prendr- + -a).<br><br>
<strong>6. Bilan sur être et avoir (1<sup>re</sup> personne du singulier).</strong>
<ul>
<li><em>être</em> : présent → je <strong>suis</strong> ; futur → je <strong>serai</strong> ; imparfait → j'<strong>étais</strong> ; passé simple → je <strong>fus</strong>.</li>
<li><em>avoir</em> : présent → j'<strong>ai</strong> ; futur → j'<strong>aurai</strong> ; imparfait → j'<strong>avais</strong> ; passé simple → j'<strong>eus</strong>.</li>
</ul>
Ces deux verbes sont à connaître par cœur : ce sont aussi les auxiliaires des temps composés.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'fr-6e-fonctions',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le coffret enterré : du sujet au groupe nominal',
            contenu: `<strong>Énoncé.</strong> Lis ce texte, puis réponds aux questions.<br><br>
<em>« Le chien de la voisine creuse un trou profond au fond du jardin. Les enfants curieux le regardent et ils parlent de sa découverte à leur grand-mère. Sous la terre brillait un coffret de métal. »</em><br><br>
<strong>1.</strong> Relève le <strong>sujet</strong> de chacun des verbes conjugués : <em>creuse, regardent, parlent, brillait</em>. Quelle est la particularité du sujet de « brillait » ? Quelle question poses-tu pour le retrouver ?<br>
<strong>2.</strong> Réécris la première phrase en remplaçant « Le chien » par « <strong>Les chiens</strong> ». Quels mots changent ? Énonce la règle d'accord qui l'explique.<br>
<strong>3.</strong> Donne la fonction de chacun des groupes suivants en justifiant par la question posée après le verbe : « un trou profond », « le » (dans « le regardent »), « de sa découverte », « à leur grand-mère ». Que peux-tu dire des groupes « au fond du jardin » et « Sous la terre » ?<br>
<strong>4.</strong> Autour du nom : relève deux adjectifs <strong>épithètes</strong> (avec le nom qu'ils précisent) et deux <strong>compléments du nom</strong> (avec le nom qu'ils complètent). Puis transforme « Les enfants curieux » en une phrase où « curieux » devient <strong>attribut du sujet</strong> : qu'est-ce qui a changé ?<br>
<strong>5.</strong> Remplace « un trou profond » par un pronom dans la première phrase. Que remarques-tu sur la <strong>place</strong> du pronom COD ?<br>
<strong>6.</strong> Écriture : rédige une phrase contenant un <strong>sujet au pluriel</strong>, un verbe correctement accordé, un <strong>COD</strong> enrichi d'une <strong>épithète</strong> et d'un <strong>complément du nom</strong>, et un <strong>CC de lieu</strong>. Analyse ensuite chaque groupe.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Les sujets.</strong>
<ul>
<li>creuse → <em>Le chien de la voisine</em> (tout le groupe nominal est sujet) ; regardent → <em>Les enfants curieux</em> ; parlent → <em>ils</em> (pronom qui remplace « les enfants curieux ») ; brillait → <em>un coffret de métal</em>.</li>
<li>Particularité : le sujet de « brillait » est <strong>inversé</strong>, placé après le verbe. On le retrouve avec la question « <strong>Qu'est-ce qui</strong> brillait sous la terre ? » → un coffret de métal.</li>
</ul>
<strong>2. L'accord sujet-verbe.</strong> « <strong>Les chiens</strong> de la voisine <strong>creusent</strong> un trou profond au fond du jardin. » Changent : le déterminant (Le → Les), le nom (chien → chiens) et le <strong>verbe</strong> (creuse → creus<em>ent</em>). Règle : le verbe s'accorde <strong>en personne et en nombre avec son sujet</strong>. Attention : « de la voisine » ne change pas — c'est un complément du nom, ce n'est pas lui qui commande l'accord, même s'il est placé juste avant le verbe.<br><br>
<strong>3. Les compléments du verbe.</strong>
<ul>
<li>« un trou profond » : creuse <em>quoi ?</em> → <strong>COD</strong> (construction directe).</li>
<li>« le » (dans « le regardent ») : regardent <em>qui ?</em> → <strong>COD</strong> ; c'est un pronom qui remplace « le chien de la voisine ».</li>
<li>« de sa découverte » : parlent <em>de quoi ?</em> → <strong>COI</strong> (préposition <em>de</em>).</li>
<li>« à leur grand-mère » : parlent <em>à qui ?</em> → <strong>COI</strong> (préposition <em>à</em>).</li>
<li>« au fond du jardin » et « Sous la terre » répondent à la question <em>où ?</em> : ce sont des <strong>compléments circonstanciels de lieu</strong>. On peut les déplacer ou les supprimer, la phrase reste correcte (« Le chien de la voisine creuse un trou profond ») — c'est ce qui les distingue des compléments du verbe.</li>
</ul>
<strong>4. Autour du nom.</strong>
<ul>
<li>Épithètes : « profond » précise le nom « trou » ; « curieux » précise le nom « enfants ». L'épithète est placée directement à côté du nom.</li>
<li>Compléments du nom : « de la voisine » complète le nom « chien » ; « de métal » complète le nom « coffret ». Le complément du nom est introduit par une préposition (ici <em>de</em>).</li>
<li>Transformation : « Les enfants <strong>semblent</strong> (ou <em>sont</em>) curieux. » L'adjectif n'est plus collé au nom : il est maintenant relié au sujet par un <strong>verbe d'état</strong> (sembler, être), donc sa fonction devient <strong>attribut du sujet</strong>. La classe du mot (adjectif) n'a pas changé, seule sa <strong>fonction</strong> a changé.</li>
</ul>
<strong>5. La pronominalisation.</strong> « Le chien de la voisine <strong>le</strong> creuse au fond du jardin. » Le pronom COD se place <strong>avant le verbe</strong>, alors que le groupe nominal COD se trouvait après. C'est un bon test pour reconnaître un COD : il se remplace par <em>le, la, l', les</em> devant le verbe.<br><br>
<strong>6. Écriture (exemple de réponse).</strong> « Dans le grenier, les jumelles découvrent une vieille malle de cuir. »<br>
Analyse : « Dans le grenier » → CC de <strong>lieu</strong> (déplaçable et supprimable) ; « les jumelles » → <strong>sujet</strong> au pluriel (qui est-ce qui découvre ?) ; « découvrent » → verbe accordé à la 3<sup>e</sup> personne du pluriel avec son sujet ; « une vieille malle de cuir » → <strong>COD</strong> (découvrent quoi ?), composé du nom « malle », de l'épithète « vieille » et du complément du nom « de cuir ».
</details>`
          }
        ]
      }
    ]
  }
]

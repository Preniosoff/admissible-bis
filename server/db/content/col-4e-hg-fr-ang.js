// Contenu cours — 4ème — Histoire-Géographie · Français · Anglais
// Format : DATA exporté, consommé par le seed

export const DATA = [

// ════════════════════════════════════════════════════════════════════════════
// HISTOIRE-GÉOGRAPHIE — 4ème
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'hg-4e-lumieres',
  filiere: '4eme',
  matiere: 'hg',
  titre: 'L\'Europe des Lumières au XVIIIe siècle',
  ordre: 1,
  enrich: false,
  sections: [
    {
      titre: 'Un mouvement intellectuel européen',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Les Lumières',
          contenu: `Les <strong>Lumières</strong> désignent un mouvement de pensée du <strong>XVIIIe siècle</strong> qui défend la <strong>raison</strong>, le <strong>savoir</strong> et le <strong>progrès</strong> contre l'ignorance, les préjugés et le fanatisme.<br>Les penseurs des Lumières sont appelés <strong>philosophes</strong> : Voltaire, Montesquieu, Rousseau, Diderot.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Philosophe',
          contenu: `Au XVIIIe siècle, un <strong>philosophe</strong> est un homme de lettres qui réfléchit sur la société, la politique, la religion et qui cherche à <strong>diffuser le savoir</strong> pour améliorer la condition humaine.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les idées nouvelles',
          contenu: `Les Lumières défendent :<br>— la <strong>liberté</strong> (de penser, de s'exprimer, de croire) ;<br>— l'<strong>égalité</strong> devant la loi ;<br>— la <strong>tolérance</strong> religieuse ;<br>— la <strong>séparation des pouvoirs</strong> (Montesquieu) ;<br>— la <strong>souveraineté du peuple</strong> (Rousseau).`
        }
      ]
    },
    {
      titre: 'La diffusion des idées',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'L\'Encyclopédie',
          contenu: `L'<strong>Encyclopédie</strong> (1751-1772), dirigée par <strong>Diderot</strong> et <strong>d'Alembert</strong>, est un ouvrage en 28 volumes qui rassemble l'ensemble des connaissances de l'époque. Elle vise à <strong>diffuser le savoir</strong> et l'esprit critique.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les lieux et moyens de diffusion',
          contenu: `Les idées circulent grâce :<br>— aux <strong>salons</strong> (réunions chez de riches particuliers) ;<br>— aux <strong>cafés</strong> et <strong>académies</strong> ;<br>— aux <strong>livres</strong> et <strong>journaux</strong>, malgré la <strong>censure</strong> royale.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Censure',
          contenu: `La <strong>censure</strong> est le contrôle exercé par le pouvoir (roi, Église) sur les écrits avant leur publication, pour interdire les idées jugées dangereuses. Les philosophes la contournent par des éditions clandestines à l'étranger.`
        }
      ]
    },
    {
      titre: 'Contester l\'absolutisme',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Monarchie absolue',
          contenu: `Sous la <strong>monarchie absolue</strong>, le roi détient <strong>tous les pouvoirs</strong> (législatif, exécutif, judiciaire) et tient son autorité de Dieu (droit divin). Les Lumières contestent ce système.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'La séparation des pouvoirs',
          contenu: `<strong>Montesquieu</strong>, dans <em>De l'esprit des lois</em> (1748), propose de séparer les trois pouvoirs :<br>— <strong>législatif</strong> (faire les lois) ;<br>— <strong>exécutif</strong> (appliquer les lois) ;<br>— <strong>judiciaire</strong> (juger).<br>Cette séparation empêche la tyrannie.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Voltaire et la tolérance',
          contenu: `Dans l'<strong>affaire Calas</strong> (1762), un protestant est exécuté à tort. <strong>Voltaire</strong> mène campagne et obtient sa réhabilitation. Il publie le <em>Traité sur la tolérance</em> (1763) : c'est un exemple de l'engagement des philosophes contre le fanatisme.`
        }
      ]
    },
    {
      titre: 'Sciences et nouvelle vision du monde',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'L\'esprit scientifique',
          contenu: `Le XVIIIe siècle prolonge la révolution scientifique : on privilégie l'<strong>observation</strong>, l'<strong>expérience</strong> et le <strong>doute méthodique</strong>. Le savoir se veut <strong>fondé sur la raison</strong> plutôt que sur la tradition ou la religion.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Diffusion au-delà de la France',
          contenu: `Les idées des Lumières gagnent toute l'Europe et inspirent les <strong>despotes éclairés</strong> (Frédéric II de Prusse, Catherine II de Russie), qui correspondent avec les philosophes et réforment partiellement leurs États, sans pour autant renoncer à leur pouvoir absolu.`
        }
      ]
    }
  ]
},

{
  id: 'hg-4e-revolution',
  filiere: '4eme',
  matiere: 'hg',
  titre: 'La Révolution française (1789-1799)',
  ordre: 2,
  enrich: false,
  sections: [
    {
      titre: 'Les causes et 1789',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Les causes de la Révolution',
          contenu: `Plusieurs facteurs en 1789 :<br>— une <strong>crise financière</strong> (dette de l'État) ;<br>— une <strong>crise sociale</strong> (inégalités de la société d'ordres) ;<br>— une <strong>crise économique</strong> (mauvaises récoltes, hausse du prix du pain) ;<br>— la diffusion des <strong>idées des Lumières</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Société d\'ordres',
          contenu: `Avant 1789, la société est divisée en <strong>trois ordres</strong> : le <strong>clergé</strong>, la <strong>noblesse</strong> (privilégiés, peu d'impôts) et le <strong>tiers état</strong> (98 % de la population, qui paie l'essentiel des impôts).`
        },
        {
          type: 'def', label: 'DEF', titre: 'États généraux',
          contenu: `Les <strong>États généraux</strong> sont une assemblée des représentants des trois ordres, convoquée par Louis XVI le <strong>5 mai 1789</strong> pour résoudre la crise financière. Le tiers état s'y proclame <strong>Assemblée nationale</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Cahiers de doléances',
          contenu: `Les <strong>cahiers de doléances</strong> sont des registres dans lesquels les Français notent, début 1789, leurs plaintes et leurs souhaits de réformes en vue des États généraux. Ils témoignent du mécontentement contre les privilèges et les impôts.`
        }
      ]
    },
    {
      titre: 'La fin de la monarchie absolue',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Les journées de l\'été 1789',
          contenu: `— <strong>20 juin 1789</strong> : serment du Jeu de paume (ne pas se séparer avant une Constitution).<br>— <strong>14 juillet 1789</strong> : prise de la <strong>Bastille</strong> à Paris.<br>— <strong>4 août 1789</strong> : abolition des <strong>privilèges</strong>.<br>— <strong>26 août 1789</strong> : Déclaration des droits de l'homme et du citoyen.`
        },
        {
          type: 'def', label: 'DEF', titre: 'DDHC',
          contenu: `La <strong>Déclaration des droits de l'homme et du citoyen</strong> (26 août 1789) proclame la <strong>liberté</strong>, l'<strong>égalité devant la loi</strong>, la <strong>souveraineté de la nation</strong> et la séparation des pouvoirs. C'est un texte fondateur encore en vigueur aujourd'hui.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Monarchie constitutionnelle',
          contenu: `La <strong>Constitution de 1791</strong> instaure une <strong>monarchie constitutionnelle</strong> : le roi conserve le pouvoir exécutif mais doit respecter la Constitution ; le pouvoir législatif appartient à une assemblée élue.`
        }
      ]
    },
    {
      titre: 'La République et la Terreur',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'La Ire République',
          contenu: `— <strong>10 août 1792</strong> : chute de la monarchie.<br>— <strong>21 septembre 1792</strong> : proclamation de la <strong>République</strong>.<br>— <strong>21 janvier 1793</strong> : exécution de <strong>Louis XVI</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'La Terreur',
          contenu: `La <strong>Terreur</strong> (1793-1794) est une période où le <strong>Comité de salut public</strong>, dirigé par <strong>Robespierre</strong>, gouverne par la violence pour sauver la République menacée (guerres, révoltes). Elle se termine avec la chute de Robespierre (juillet 1794).`
        },
        {
          type: 'ex', label: 'EX', titre: 'La République en danger',
          contenu: `En 1793, la République est menacée de l'intérieur (révolte de Vendée) et de l'extérieur (guerre contre l'Europe). Pour y faire face, la Convention décrète la <strong>levée en masse</strong> (mobilisation des citoyens) : c'est la naissance de l'idée de <strong>nation en armes</strong>.`
        }
      ]
    },
    {
      titre: 'L\'héritage de la Révolution',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Les symboles républicains',
          contenu: `La Révolution crée des symboles toujours présents :<br>— le <strong>drapeau tricolore</strong> ;<br>— la devise <strong>Liberté, Égalité, Fraternité</strong> ;<br>— <strong>La Marseillaise</strong> ;<br>— le <strong>14 juillet</strong>, fête nationale.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Citoyenneté et nation',
          contenu: `La Révolution fait du sujet du roi un <strong>citoyen</strong>, doté de droits et participant à la vie politique. Elle affirme la <strong>souveraineté de la nation</strong> : le pouvoir n'appartient plus au roi mais au peuple.`
        }
      ]
    }
  ]
},

{
  id: 'hg-4e-napoleon',
  filiere: '4eme',
  matiere: 'hg',
  titre: 'Napoléon et l\'Empire',
  ordre: 3,
  enrich: false,
  sections: [
    {
      titre: 'De la République à l\'Empire',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'La prise du pouvoir',
          contenu: `Général victorieux, <strong>Napoléon Bonaparte</strong> prend le pouvoir par le coup d'État du <strong>18 brumaire an VIII (9 novembre 1799)</strong>. Il devient <strong>Premier consul</strong>, puis se proclame <strong>empereur</strong> sous le nom de Napoléon Ier le <strong>2 décembre 1804</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Consulat / Empire',
          contenu: `Le <strong>Consulat</strong> (1799-1804) est le régime où Napoléon, comme Premier consul, concentre le pouvoir.<br>L'<strong>Empire</strong> (1804-1815) est le régime monarchique et autoritaire dirigé par l'empereur Napoléon Ier.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Plébiscite',
          contenu: `Le <strong>plébiscite</strong> est un vote par lequel le peuple répond par oui ou par non à une question posée par le pouvoir. Napoléon l'utilise pour <strong>légitimer</strong> son pouvoir tout en le contrôlant.`
        }
      ]
    },
    {
      titre: 'Réformer la France',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Les réformes durables',
          contenu: `Napoléon réorganise la France :<br>— le <strong>Code civil</strong> (1804) ;<br>— les <strong>préfets</strong> (administration départementale) ;<br>— le <strong>franc germinal</strong> et la <strong>Banque de France</strong> ;<br>— les <strong>lycées</strong> et le <strong>baccalauréat</strong> ;<br>— la <strong>Légion d'honneur</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Code civil',
          contenu: `Le <strong>Code civil</strong> (1804) rassemble et unifie les lois sur la famille, la propriété et les contrats. Il consacre certains acquis de la Révolution (égalité devant la loi) mais rétablit l'autorité du père et l'inégalité de la femme. Il est toujours en vigueur.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Un régime autoritaire',
          contenu: `Napoléon conserve certains acquis révolutionnaires (égalité civile, propriété) mais restreint les libertés : <strong>censure</strong> de la presse, <strong>police</strong> renforcée, pouvoir personnel sans réelle opposition.`
        }
      ]
    },
    {
      titre: 'Les guerres et la chute',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'L\'Empire en Europe',
          contenu: `Par ses victoires (Austerlitz, 1805), Napoléon domine une grande partie de l'Europe. Il diffuse certaines idées de la Révolution (Code civil, égalité civile) mais impose la domination française, ce qui suscite des <strong>sentiments nationaux</strong> contre lui.`
        },
        {
          type: 'ex', label: 'EX', titre: 'La chute de l\'Empire',
          contenu: `La <strong>campagne de Russie</strong> (1812) est un désastre. Battu, Napoléon abdique en 1814, revient brièvement (les Cent-Jours) puis est définitivement vaincu à <strong>Waterloo</strong> (18 juin 1815). Il est exilé à Sainte-Hélène où il meurt en 1821.`
        }
      ]
    },
    {
      titre: 'Le bilan napoléonien',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Un héritage ambigu',
          contenu: `Napoléon laisse un héritage <strong>contrasté</strong> :<br>— positif : institutions durables, modernisation de l'État, diffusion d'idées nouvelles en Europe ;<br>— négatif : guerres meurtrières, recul des libertés, rétablissement de l'esclavage dans les colonies (1802).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Congrès de Vienne',
          contenu: `Le <strong>Congrès de Vienne</strong> (1814-1815) réunit les vainqueurs de Napoléon pour <strong>réorganiser l'Europe</strong> et rétablir les anciennes monarchies. Il marque la fin de l'épopée napoléonienne et le retour de la France à ses frontières d'avant les conquêtes.`
        }
      ]
    }
  ]
},

{
  id: 'hg-4e-revolution-industrielle',
  filiere: '4eme',
  matiere: 'hg',
  titre: 'L\'âge industriel au XIXe siècle',
  ordre: 4,
  enrich: false,
  sections: [
    {
      titre: 'La révolution industrielle',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Révolution industrielle',
          contenu: `La <strong>révolution industrielle</strong> est l'ensemble des transformations économiques et techniques qui, à partir du XVIIIe-XIXe siècle, font passer d'une économie agricole et artisanale à une économie dominée par l'<strong>industrie</strong> et la <strong>machine</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les sources d\'énergie',
          contenu: `— Première phase (XIXe) : la <strong>machine à vapeur</strong> (James Watt) alimentée par le <strong>charbon</strong>.<br>— Seconde phase (fin XIXe) : l'<strong>électricité</strong> et le <strong>pétrole</strong> permettent de nouvelles industries (chimie, automobile).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Usine',
          contenu: `L'<strong>usine</strong> est le lieu de la production industrielle, où sont rassemblés machines, sources d'énergie et ouvriers. Elle remplace progressivement l'atelier artisanal et concentre la main-d'œuvre.`
        }
      ]
    },
    {
      titre: 'Capitalisme et transports',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Capitalisme',
          contenu: `Le <strong>capitalisme</strong> est un système économique fondé sur la propriété privée des moyens de production, la recherche du <strong>profit</strong> et l'investissement de <strong>capitaux</strong>. Les <strong>banques</strong> et la <strong>Bourse</strong> financent l'industrie.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'La révolution des transports',
          contenu: `Le <strong>chemin de fer</strong> et la <strong>machine à vapeur</strong> transforment les déplacements et le commerce. Bateaux à vapeur et réseaux ferrés relient régions et pays, accélérant les échanges et l'industrialisation.`
        }
      ]
    },
    {
      titre: 'Une société transformée',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Bourgeoisie et prolétariat',
          contenu: `— La <strong>bourgeoisie</strong> (patrons, banquiers, commerçants) détient les capitaux et domine la société.<br>— Le <strong>prolétariat</strong> (ouvriers) ne possède que sa force de travail et vit dans des conditions souvent misérables.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'La condition ouvrière',
          contenu: `Les ouvriers travaillent <strong>12 à 14 heures par jour</strong>, pour des salaires faibles, sans protection sociale. Le <strong>travail des enfants</strong> est répandu. L'<strong>exode rural</strong> peuple les villes industrielles, où s'entassent les quartiers ouvriers.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Les luttes ouvrières',
          contenu: `Face à ces conditions, les ouvriers s'organisent : <strong>grèves</strong>, création de <strong>syndicats</strong> (légalisés en France en 1884). Des doctrines naissent : le <strong>socialisme</strong> et le <strong>marxisme</strong> (Karl Marx) appellent à transformer la société.`
        }
      ]
    },
    {
      titre: 'Religions et idées nouvelles',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Religion et société industrielle',
          contenu: `L'industrialisation bouleverse les croyances : développement de la <strong>science</strong>, montée de l'<strong>athéisme</strong> et de l'anticléricalisme. L'Église réagit par la doctrine sociale (encyclique <em>Rerum novarum</em>, 1891) pour défendre les ouvriers.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Exode rural',
          contenu: `L'<strong>exode rural</strong> est le déplacement massif des populations des campagnes vers les villes, attirées par le travail dans les usines. Il provoque une forte <strong>urbanisation</strong> au XIXe siècle.`
        }
      ]
    }
  ]
},

{
  id: 'hg-4e-colonisation',
  filiere: '4eme',
  matiere: 'hg',
  titre: 'Conquêtes et sociétés coloniales',
  ordre: 5,
  enrich: false,
  sections: [
    {
      titre: 'La conquête coloniale',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Colonisation',
          contenu: `La <strong>colonisation</strong> est la conquête et la domination d'un territoire (la <strong>colonie</strong>) par un État étranger (la <strong>métropole</strong>). Au XIXe siècle, les puissances européennes constituent de vastes <strong>empires coloniaux</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les motivations',
          contenu: `Les Européens colonisent pour :<br>— des raisons <strong>économiques</strong> (matières premières, débouchés commerciaux) ;<br>— des raisons <strong>politiques</strong> (prestige, puissance) ;<br>— des raisons <strong>idéologiques</strong> (prétendue « mission civilisatrice », racisme).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Le partage de l\'Afrique',
          contenu: `À la <strong>conférence de Berlin</strong> (1884-1885), les puissances européennes se partagent l'<strong>Afrique</strong> sans tenir compte des peuples. En 1914, presque tout le continent est colonisé. La France et le Royaume-Uni possèdent les plus grands empires.`
        }
      ]
    },
    {
      titre: 'La société coloniale',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Code de l\'indigénat',
          contenu: `Le <strong>Code de l'indigénat</strong> est un ensemble de lois qui soumettent les colonisés (les « indigènes ») à un statut inférieur : ils n'ont pas les mêmes droits que les colons et subissent travail forcé, impôts et sanctions particulières.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Une société inégalitaire',
          contenu: `Dans les colonies, la société est divisée :<br>— les <strong>colons</strong> européens, dominants, qui détiennent terres et pouvoir ;<br>— les <strong>colonisés</strong>, exploités, privés de droits politiques.<br>Cette domination s'accompagne souvent de <strong>violences</strong> et de mépris des cultures locales.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Résistances et acculturation',
          contenu: `Les colonisés <strong>résistent</strong> (révoltes armées) mais subissent aussi une <strong>acculturation</strong> : imposition de la langue, de la religion et de la culture du colonisateur, au détriment de leurs traditions.`
        }
      ]
    },
    {
      titre: 'L\'exploitation économique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Économie de plantation',
          contenu: `L'<strong>économie de plantation</strong> repose sur la culture intensive de produits destinés à la métropole (café, coton, caoutchouc, canne à sucre). Elle exploite la main-d'œuvre locale et oriente toute l'économie de la colonie vers les besoins du colonisateur.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Une colonie au service de la métropole',
          contenu: `La colonie fournit à la métropole des <strong>matières premières</strong> à bas prix et constitue un <strong>marché</strong> pour ses produits industriels. Les infrastructures (ports, chemins de fer) sont construites pour servir cette exploitation.`
        }
      ]
    }
  ]
},

{
  id: 'hg-4e-urbanisation',
  filiere: '4eme',
  matiere: 'hg',
  titre: 'L\'urbanisation du monde',
  ordre: 6,
  enrich: false,
  sections: [
    {
      titre: 'Un monde de plus en plus urbain',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Urbanisation',
          contenu: `L'<strong>urbanisation</strong> est l'augmentation de la part de la population vivant dans les <strong>villes</strong> et l'extension des espaces urbains. Depuis 2007, plus de <strong>la moitié de l'humanité</strong> vit en ville.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Métropole et mégapole',
          contenu: `Une <strong>métropole</strong> est une grande ville qui concentre population, richesses et fonctions de commandement (politiques, économiques, culturelles).<br>Une <strong>mégapole</strong> est une agglomération de plus de <strong>10 millions d'habitants</strong> (ex. Tokyo, Delhi, New York).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Étalement urbain',
          contenu: `Les villes s'étendent par <strong>étalement urbain</strong> : les espaces bâtis grignotent les campagnes (<strong>périurbanisation</strong>). Une métropole structure son territoire : <strong>centre</strong>, <strong>banlieues</strong> et <strong>espaces périurbains</strong>.`
        }
      ]
    },
    {
      titre: 'Des villes inégales',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Des contrastes dans la ville',
          contenu: `Les villes présentent de fortes <strong>inégalités</strong> :<br>— quartiers d'affaires riches (CBD) ;<br>— quartiers résidentiels aisés ;<br>— quartiers pauvres et <strong>bidonvilles</strong> dans les pays en développement.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Bidonville',
          contenu: `Un <strong>bidonville</strong> est un quartier d'habitat précaire et insalubre, construit illégalement, sans accès suffisant à l'eau, à l'électricité ou aux services. Ils se développent rapidement dans les métropoles des pays du Sud.`
        },
        {
          type: 'def', label: 'DEF', titre: 'CBD',
          contenu: `Le <strong>CBD</strong> (Central Business District) est le quartier central des affaires d'une grande ville, marqué par les gratte-ciel, les sièges sociaux et les activités tertiaires de commandement (banques, bureaux).`
        }
      ]
    },
    {
      titre: 'Vers des villes durables',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Ville durable',
          contenu: `La <strong>ville durable</strong> cherche à concilier <strong>développement économique</strong>, <strong>justice sociale</strong> et <strong>respect de l'environnement</strong> : transports en commun, éco-quartiers, espaces verts, réduction de la pollution.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Les défis d\'une métropole',
          contenu: `Une métropole comme <strong>Mumbai</strong> (Inde) concentre richesse (quartiers d'affaires) et pauvreté (bidonville de Dharavi). Elle doit relever les défis du logement, des transports, de l'eau et de la pollution : c'est un exemple des enjeux de l'urbanisation rapide.`
        }
      ]
    }
  ]
},

{
  id: 'hg-4e-mondialisation',
  filiere: '4eme',
  matiere: 'hg',
  titre: 'Mondialisation, mobilités, mers et océans',
  ordre: 7,
  enrich: false,
  sections: [
    {
      titre: 'Un espace mondialisé',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Mondialisation',
          contenu: `La <strong>mondialisation</strong> est la mise en relation des différentes parties du monde par les <strong>échanges</strong> (marchandises, capitaux, informations, hommes). Elle est portée par les <strong>firmes transnationales (FTN)</strong> et facilitée par les transports et le numérique.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Firme transnationale (FTN)',
          contenu: `Une <strong>firme transnationale</strong> est une grande entreprise qui possède des filiales dans plusieurs pays. Elle organise sa production à l'échelle mondiale pour réduire ses coûts et accroître ses profits.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Des espaces inégalement intégrés',
          contenu: `La mondialisation crée des espaces inégaux :<br>— des <strong>pôles majeurs</strong> très connectés (Amérique du Nord, Europe, Asie de l'Est) ;<br>— des espaces en développement plus ou moins intégrés ;<br>— des espaces marginalisés, à l'écart des flux.`
        }
      ]
    },
    {
      titre: 'Les mobilités humaines',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Migration',
          contenu: `Une <strong>migration</strong> est un déplacement durable de population d'un lieu vers un autre. On distingue les <strong>migrants économiques</strong>, les <strong>réfugiés</strong> (fuyant guerres et persécutions) et les déplacés climatiques.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Tourisme international',
          contenu: `Le <strong>tourisme international</strong> est le déplacement temporaire de personnes hors de leur pays pour les loisirs. C'est la première forme de mobilité dans le monde, qui transforme certains espaces (littoraux, villes).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Migrations : départs et arrivées',
          contenu: `Les flux migratoires relient généralement les pays <strong>pauvres</strong> (départs) aux pays <strong>riches</strong> (arrivées). Ils s'accompagnent de débats sur l'accueil, les frontières et l'intégration.`
        }
      ]
    },
    {
      titre: 'Mers et océans, au cœur de la mondialisation',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Des espaces d\'échanges',
          contenu: `Les mers et océans concentrent l'essentiel du <strong>commerce mondial</strong> : environ <strong>80 % des marchandises</strong> sont transportées par voie maritime (<strong>conteneurs</strong>, pétroliers). Les grands <strong>ports</strong> et les <strong>détroits</strong> (Malacca, Gibraltar) sont stratégiques.`
        },
        {
          type: 'def', label: 'DEF', titre: 'ZEE',
          contenu: `La <strong>Zone Économique Exclusive (ZEE)</strong> s'étend sur <strong>200 milles marins</strong> à partir des côtes d'un État. Celui-ci y exerce des droits exclusifs d'exploitation des ressources (pêche, hydrocarbures). Les ZEE sont source de rivalités entre États.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Des espaces convoités et menacés',
          contenu: `Les océans sont riches en ressources (pêche, pétrole, minerais) mais aussi menacés : <strong>surpêche</strong>, <strong>pollution plastique</strong>, réchauffement. Ils sont enfin l'objet de <strong>tensions géopolitiques</strong> (mer de Chine méridionale, Arctique).`
        }
      ]
    },
    {
      titre: 'Les flux de la mondialisation',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Conteneurisation',
          contenu: `La <strong>conteneurisation</strong> est l'usage généralisé du <strong>conteneur</strong>, boîte métallique aux dimensions normalisées. Elle a fait baisser les coûts de transport et accéléré le commerce mondial en facilitant le chargement entre bateaux, trains et camions.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'La diversité des flux',
          contenu: `La mondialisation repose sur plusieurs flux :<br>— de <strong>marchandises</strong> (par mer surtout) ;<br>— de <strong>capitaux</strong> (investissements, Bourse) ;<br>— d'<strong>informations</strong> (Internet, câbles sous-marins) ;<br>— d'<strong>hommes</strong> (migrations, tourisme).`
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// FRANÇAIS — 4ème
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'fr-4e-discours-rapporte',
  filiere: '4eme',
  matiere: 'fr',
  titre: 'Le discours rapporté',
  ordre: 8,
  enrich: false,
  sections: [
    {
      titre: 'Les paroles directement rapportées',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Discours direct',
          contenu: `Le <strong>discours direct</strong> rapporte les paroles <strong>telles qu'elles ont été prononcées</strong>. Il est introduit par un <strong>verbe de parole</strong> et signalé par des marques typographiques : <strong>deux-points</strong>, <strong>guillemets</strong>, <strong>tirets</strong> de dialogue.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Exemple de discours direct',
          contenu: `Marie déclara : « Je viendrai demain. »<br>Le verbe de parole (<em>déclara</em>) introduit les paroles exactes, entre guillemets. Dans un dialogue, un <strong>tiret</strong> marque chaque changement d'interlocuteur.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'L\'incise',
          contenu: `L'<strong>incise</strong> (ou proposition incise) est une courte proposition insérée dans les paroles, qui indique qui parle. Le sujet et le verbe sont <strong>inversés</strong>.<br>Ex. : « Je viendrai, <strong>dit-elle</strong>, dès demain. »`
        }
      ]
    },
    {
      titre: 'Les paroles intégrées au récit',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Discours indirect',
          contenu: `Le <strong>discours indirect</strong> rapporte les paroles intégrées au récit, dans une <strong>proposition subordonnée</strong> introduite par <em>que</em>, <em>si</em>, <em>ce que</em>... Il n'y a ni guillemets ni tirets.<br>Ex. : Marie déclara <strong>qu'elle viendrait le lendemain</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les changements au discours indirect',
          contenu: `Passer du direct à l'indirect entraîne des modifications :<br>— les <strong>pronoms</strong> (je → il/elle) ;<br>— les <strong>temps</strong> si le verbe introducteur est au passé (présent → imparfait, futur → conditionnel) ;<br>— les <strong>indicateurs de temps</strong> (demain → le lendemain, hier → la veille).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Discours indirect libre',
          contenu: `Le <strong>discours indirect libre</strong> rapporte les paroles ou pensées <strong>sans verbe introducteur ni subordination</strong>, en les fondant dans le récit. Il conserve les temps et pronoms de l'indirect.<br>Ex. : Elle hésitait. Viendrait-elle vraiment le lendemain ?`
        }
      ]
    },
    {
      titre: 'Les verbes introducteurs',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Varier les verbes de parole',
          contenu: `Au lieu de répéter <em>dire</em>, on emploie des verbes plus précis qui indiquent le <strong>ton</strong> : <em>affirmer, répliquer, murmurer, s'écrier, demander, ordonner, supplier</em>. Ils enrichissent le dialogue et précisent l'intention du locuteur.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Effet du verbe introducteur',
          contenu: `« Sors d'ici ! » <strong>hurla</strong>-t-il. → colère.<br>« Reste avec moi… », <strong>murmura</strong>-t-elle. → tendresse.<br>Le choix du verbe introducteur change le sens et l'émotion de la réplique.`
        }
      ]
    },
    {
      titre: 'Transposer le discours',
      cartes: [
        {
          type: 'meth', label: 'METH', titre: 'Transformer le direct en indirect',
          contenu: `<strong>1.</strong> Choisir un verbe introducteur (dit, demande, répond...).<br><strong>2.</strong> Supprimer guillemets et ponctuation du dialogue.<br><strong>3.</strong> Introduire une subordonnée (<em>que</em>, <em>si</em>, <em>de</em> + infinitif pour l'ordre).<br><strong>4.</strong> Adapter pronoms, temps et indicateurs.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Transposition complète',
          contenu: `Direct : Il me demanda : « Viendras-tu demain ? »<br>Indirect : Il me demanda <strong>si je viendrais le lendemain</strong>.<br>→ <em>viendras</em> (futur) devient <em>viendrais</em> (conditionnel) ; <em>tu</em> → <em>je</em> ; <em>demain</em> → <em>le lendemain</em> ; la question devient une subordonnée en <em>si</em>.`
        }
      ]
    }
  ]
},

{
  id: 'fr-4e-voix-active-passive',
  filiere: '4eme',
  matiere: 'fr',
  titre: 'Voix active et voix passive',
  ordre: 9,
  enrich: false,
  sections: [
    {
      titre: 'Distinguer les deux voix',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Voix active',
          contenu: `À la <strong>voix active</strong>, le <strong>sujet fait l'action</strong> exprimée par le verbe.<br>Ex. : <strong>Le chat</strong> attrape la souris. (le sujet « le chat » réalise l'action).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Voix passive',
          contenu: `À la <strong>voix passive</strong>, le <strong>sujet subit l'action</strong>. Le verbe se conjugue avec l'<strong>auxiliaire être</strong> + participe passé.<br>Ex. : La souris <strong>est attrapée</strong> par le chat.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Complément d\'agent',
          contenu: `Le <strong>complément d'agent</strong> indique qui fait réellement l'action dans une phrase passive. Il est introduit par <strong>par</strong> (ou parfois <em>de</em>).<br>Ex. : La souris est attrapée <strong>par le chat</strong>.`
        }
      ]
    },
    {
      titre: 'Transformer la voix',
      cartes: [
        {
          type: 'meth', label: 'METH', titre: 'Passer de l\'actif au passif',
          contenu: `<strong>1.</strong> Le <strong>COD</strong> de la phrase active devient le <strong>sujet</strong> de la passive.<br><strong>2.</strong> Le verbe se met avec <strong>être</strong> (au même temps) + participe passé accordé.<br><strong>3.</strong> Le sujet de l'active devient <strong>complément d'agent</strong> (par...).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Transformation active → passive',
          contenu: `Active : Les élèves <strong>liront</strong> ce roman.<br>Passive : Ce roman <strong>sera lu</strong> par les élèves.<br>→ COD « ce roman » devient sujet ; le futur <em>liront</em> devient <em>sera lu</em> (être au futur + participe) ; « les élèves » devient complément d'agent.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Accord du participe passé',
          contenu: `À la voix passive, le <strong>participe passé s'accorde toujours avec le sujet</strong> (car l'auxiliaire est <em>être</em>).<br>Ex. : Les fleurs <strong>sont arrosées</strong> par le jardinier (accord féminin pluriel).`
        }
      ]
    },
    {
      titre: 'Pourquoi choisir le passif ?',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'L\'intérêt de la voix passive',
          contenu: `On emploie le passif pour :<br>— mettre en valeur ce qui <strong>subit</strong> l'action ;<br>— <strong>ne pas préciser l'auteur</strong> de l'action (« Le vase a été cassé. ») ;<br>— donner un ton plus <strong>impersonnel</strong> ou formel.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Effacer l\'agent',
          contenu: `« Le règlement <strong>a été modifié</strong>. »<br>Ici, le complément d'agent est volontairement supprimé : on ne sait pas (ou on ne dit pas) qui a modifié le règlement. C'est un emploi fréquent du passif.`
        }
      ]
    }
  ]
},

{
  id: 'fr-4e-figures-style',
  filiere: '4eme',
  matiere: 'fr',
  titre: 'Les figures de style',
  ordre: 10,
  enrich: false,
  sections: [
    {
      titre: 'Les figures d\'analogie',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Comparaison',
          contenu: `La <strong>comparaison</strong> rapproche deux éléments à l'aide d'un <strong>outil de comparaison</strong> (comme, tel, ressembler à, pareil à...).<br>Ex. : Il est rusé <strong>comme</strong> un renard.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Métaphore',
          contenu: `La <strong>métaphore</strong> rapproche deux éléments <strong>sans outil de comparaison</strong>.<br>Ex. : Cet homme est un renard. (on identifie directement l'homme et le renard).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Personnification',
          contenu: `La <strong>personnification</strong> attribue des comportements ou des sentiments <strong>humains</strong> à un objet, un animal ou une idée.<br>Ex. : Le vent <strong>hurlait</strong> dans la nuit.`
        }
      ]
    },
    {
      titre: 'Les figures d\'insistance et d\'opposition',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Hyperbole',
          contenu: `L'<strong>hyperbole</strong> est une <strong>exagération</strong> destinée à frapper l'esprit.<br>Ex. : Je meurs de faim. / Un bruit à réveiller un mort.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Antithèse et oxymore',
          contenu: `L'<strong>antithèse</strong> rapproche deux termes ou idées <strong>opposés</strong> (Ex. : « Je vis, je meurs »).<br>L'<strong>oxymore</strong> réunit dans une même expression deux mots de sens contraires (Ex. : « une obscure clarté »).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Gradation et anaphore',
          contenu: `La <strong>gradation</strong> énumère des termes d'intensité croissante (ou décroissante) : « Va, cours, vole ».<br>L'<strong>anaphore</strong> répète un même mot en début de phrases ou de vers successifs.`
        }
      ]
    },
    {
      titre: 'Les figures de substitution',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Métonymie',
          contenu: `La <strong>métonymie</strong> désigne une chose par un terme qui lui est lié (le contenant pour le contenu, l'auteur pour l'œuvre).<br>Ex. : « Boire un <strong>verre</strong> » (= le contenu) ; « lire un <strong>Zola</strong> » (= un livre de Zola).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Euphémisme et litote',
          contenu: `L'<strong>euphémisme</strong> atténue une réalité désagréable (« il nous a quittés » pour « il est mort »).<br>La <strong>litote</strong> dit moins pour suggérer plus (« Va, je ne te hais point » = je t'aime).`
        }
      ]
    },
    {
      titre: 'Identifier les figures',
      cartes: [
        {
          type: 'meth', label: 'METH', titre: 'Repérer une figure de style',
          contenu: `<strong>1.</strong> Cherche un <strong>écart</strong> par rapport au langage ordinaire (image, exagération, opposition).<br><strong>2.</strong> Regarde s'il y a un <strong>outil de comparaison</strong> (→ comparaison) ou non (→ métaphore).<br><strong>3.</strong> Nomme la figure et explique son <strong>effet</strong> (rendre concret, intensifier, surprendre...).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Analyse d\'un vers',
          contenu: `« La rivière <strong>chantait</strong>, <strong>tel un</strong> miroir d'argent. »<br>— <strong>Personnification</strong> : la rivière « chante ».<br>— <strong>Comparaison</strong> : « tel un miroir d'argent » (outil <em>tel</em>).<br>Effet : embellir et animer le paysage.`
        }
      ]
    }
  ]
},

{
  id: 'fr-4e-conjugaison',
  filiere: '4eme',
  matiere: 'fr',
  titre: 'Conjugaison : les temps et les modes',
  ordre: 11,
  enrich: false,
  sections: [
    {
      titre: 'Les temps du récit',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Passé simple / imparfait',
          contenu: `Dans un récit au passé :<br>— le <strong>passé simple</strong> exprime les actions de <strong>premier plan</strong>, brèves et achevées (« il <strong>entra</strong> ») ;<br>— l'<strong>imparfait</strong> exprime l'<strong>arrière-plan</strong> : description, habitude, action en cours (« il <strong>pleuvait</strong> »).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Plus-que-parfait',
          contenu: `Le <strong>plus-que-parfait</strong> (auxiliaire à l'imparfait + participe passé) exprime une action <strong>antérieure</strong> à une autre action passée.<br>Ex. : Quand il arriva, le train <strong>était déjà parti</strong>.`
        }
      ]
    },
    {
      titre: 'Le conditionnel et le subjonctif',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Conditionnel',
          contenu: `Le <strong>conditionnel</strong> exprime une action <strong>soumise à une condition</strong>, un souhait, ou le <strong>futur dans le passé</strong>.<br>Ex. : S'il faisait beau, je <strong>sortirais</strong>. / Il a dit qu'il <strong>viendrait</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Subjonctif',
          contenu: `Le <strong>subjonctif</strong> exprime une action envisagée (souhait, doute, nécessité, volonté). On le trouve souvent après <em>que</em>.<br>Ex. : Il faut que tu <strong>viennes</strong>. / Je doute qu'il <strong>réussisse</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Conditionnel : formation',
          contenu: `Le conditionnel présent se forme sur le <strong>radical du futur</strong> + les <strong>terminaisons de l'imparfait</strong> (-ais, -ais, -ait, -ions, -iez, -aient).<br>Ex. : <em>je chanter-ais</em>, <em>nous finir-ions</em>.`
        }
      ]
    },
    {
      titre: 'Les valeurs des temps',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Le présent et ses valeurs',
          contenu: `Le <strong>présent</strong> peut exprimer :<br>— le moment où l'on parle (<em>présent d'énonciation</em>) ;<br>— une vérité générale (<em>L'eau bout à 100 °C</em>) ;<br>— une habitude (<em>Je cours chaque matin</em>) ;<br>— un fait passé rendu vivant (<em>présent de narration</em>).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Le futur antérieur',
          contenu: `Le <strong>futur antérieur</strong> (auxiliaire au futur + participe passé) exprime une action <strong>future achevée avant une autre action future</strong>.<br>Ex. : Quand tu <strong>auras fini</strong> tes devoirs, tu sortiras.`
        }
      ]
    },
    {
      titre: 'Maîtriser les conjugaisons',
      cartes: [
        {
          type: 'meth', label: 'METH', titre: 'Ne pas confondre futur et conditionnel',
          contenu: `À la 1re personne du singulier :<br>— <strong>futur</strong> : <em>je chanter<strong>ai</strong></em> (certitude) ;<br>— <strong>conditionnel</strong> : <em>je chanter<strong>ais</strong></em> (hypothèse).<br>Astuce : remplace « je » par « nous » → futur <em>chanterons</em>, conditionnel <em>chanterions</em>.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Choisir le bon mode',
          contenu: `« Je souhaite qu'il (réussir) son examen. »<br>Après <em>souhaiter que</em> (volonté/souhait), on emploie le <strong>subjonctif</strong> : « Je souhaite qu'il <strong>réussisse</strong>. »`
        }
      ]
    }
  ]
},

{
  id: 'fr-4e-realisme-fantastique',
  filiere: '4eme',
  matiere: 'fr',
  titre: 'La littérature du XIXe : réalisme et fantastique',
  ordre: 12,
  enrich: false,
  sections: [
    {
      titre: 'Le réalisme',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Réalisme',
          contenu: `Le <strong>réalisme</strong> est un mouvement littéraire du XIXe siècle qui cherche à <strong>représenter la réalité telle qu'elle est</strong>, sans l'embellir. Il décrit la société, le travail, les milieux populaires.<br>Auteurs : <strong>Balzac, Flaubert, Maupassant, Zola</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les procédés du réalisme',
          contenu: `Le récit réaliste utilise :<br>— des <strong>descriptions précises</strong> (lieux, vêtements, objets) ;<br>— des <strong>détails vrais</strong> et un vocabulaire concret ;<br>— l'<strong>ancrage</strong> dans des lieux et époques réels ;<br>— l'observation des <strong>milieux sociaux</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Naturalisme',
          contenu: `Le <strong>naturalisme</strong>, mené par <strong>Émile Zola</strong>, prolonge le réalisme : il applique une démarche <strong>scientifique</strong> au roman, étudiant l'influence du <strong>milieu</strong> et de l'<strong>hérédité</strong> sur les personnages.`
        }
      ]
    },
    {
      titre: 'Le fantastique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Récit fantastique',
          contenu: `Le <strong>fantastique</strong> fait surgir un événement <strong>surnaturel</strong> dans un cadre <strong>réaliste</strong>. Il provoque le <strong>doute</strong> : le lecteur (et le personnage) hésite entre une explication rationnelle et une explication surnaturelle.<br>Auteurs : <strong>Maupassant, Gautier, Poe</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les marques du fantastique',
          contenu: `Le récit fantastique se reconnaît à :<br>— un <strong>cadre réaliste</strong> qui bascule ;<br>— l'expression du <strong>doute</strong> et de la <strong>peur</strong> ;<br>— le <strong>lexique de l'incertitude</strong> (peut-être, sembler, il me parut...) ;<br>— une <strong>fin ouverte</strong>, sans explication définitive.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Reconnaître le fantastique',
          contenu: `Dans <em>Le Horla</em> de Maupassant, le narrateur croit qu'un être invisible le hante. Le récit reste ambigu : folie ou créature réelle ? Le <strong>doute</strong> persistant et le cadre quotidien sont caractéristiques du <strong>fantastique</strong>.`
        }
      ]
    },
    {
      titre: 'Le récit et son narrateur',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Les points de vue (focalisations)',
          contenu: `— <strong>Focalisation interne</strong> : on voit à travers les yeux d'un personnage.<br>— <strong>Focalisation externe</strong> : le narrateur décrit de l'extérieur, comme une caméra.<br>— <strong>Focalisation zéro</strong> : le narrateur sait tout (<em>omniscient</em>).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Le narrateur dans le fantastique',
          contenu: `Le fantastique privilégie souvent un récit à la <strong>première personne</strong> (« je »), parfois sous forme de <strong>journal intime</strong>. Ce point de vue <strong>interne</strong> renforce le doute, car on ne connaît que la version subjective du narrateur.`
        }
      ]
    }
  ]
},

{
  id: 'fr-4e-lettre-theatre',
  filiere: '4eme',
  matiere: 'fr',
  titre: 'La lettre et le théâtre',
  ordre: 13,
  enrich: false,
  sections: [
    {
      titre: 'Écrire une lettre',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'La lettre',
          contenu: `La <strong>lettre</strong> est un texte adressé par un <strong>émetteur</strong> à un <strong>destinataire</strong> absent. Le <strong>roman épistolaire</strong> est un roman entièrement composé de lettres (ex. <em>Les Liaisons dangereuses</em>).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les codes de la lettre',
          contenu: `Une lettre comporte :<br>— une <strong>formule d'appel</strong> (« Cher ami, » « Madame, ») ;<br>— le <strong>corps</strong> du message, marqué par les pronoms <em>je</em> / <em>vous</em> ;<br>— une <strong>formule de politesse</strong> finale ;<br>— une <strong>signature</strong>.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Marques de l\'énonciation',
          contenu: `Dans une lettre, on repère les <strong>indices d'énonciation</strong> : « <strong>Je</strong> t'écris de Rome où <strong>je</strong> suis arrivé <strong>hier</strong>. » Les pronoms (je, tu), les temps (présent) et les repères (hier, ici) ancrent le texte dans la situation de communication.`
        }
      ]
    },
    {
      titre: 'Le texte théâtral',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Réplique et tirade',
          contenu: `La <strong>réplique</strong> est ce que dit un personnage quand vient son tour de parole.<br>La <strong>tirade</strong> est une longue réplique ininterrompue.<br>La <strong>stichomythie</strong> est un échange de répliques très courtes et vives.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Monologue et aparté',
          contenu: `Le <strong>monologue</strong> est une scène où un personnage seul se parle à lui-même.<br>L'<strong>aparté</strong> est une parole qu'un personnage dit « à part », entendue du spectateur mais censée échapper aux autres personnages.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Didascalie',
          contenu: `Les <strong>didascalies</strong> sont les indications scéniques de l'auteur (décor, gestes, ton, entrées et sorties), écrites en général en <em>italique</em>. Elles ne sont pas prononcées par les acteurs.`
        }
      ]
    },
    {
      titre: 'La structure de la pièce',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Acte et scène',
          contenu: `Une pièce de théâtre se divise en <strong>actes</strong> (grandes parties, souvent marquées par un changement de décor) eux-mêmes divisés en <strong>scènes</strong>. Un changement de scène correspond généralement à l'entrée ou la sortie d'un personnage.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Double énonciation',
          contenu: `Au théâtre, il y a <strong>double énonciation</strong> : un personnage parle à un autre personnage, mais aussi, en réalité, au <strong>spectateur</strong>. C'est ce qui rend possible l'aparté et le comique de connivence.`
        }
      ]
    },
    {
      titre: 'Comédie et registres',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Les ressorts du comique',
          contenu: `Au théâtre, le comique naît :<br>— de <strong>mots</strong> (jeux de mots, répétitions) ;<br>— de <strong>gestes</strong> (chutes, coups) ;<br>— de <strong>situation</strong> (quiproquos, malentendus) ;<br>— de <strong>caractère</strong> (l'avare, le menteur).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Le quiproquo',
          contenu: `Un <strong>quiproquo</strong> est un malentendu où un personnage prend une personne ou une chose pour une autre. Chez Molière, il provoque le rire en révélant les défauts des personnages : c'est un ressort essentiel de la <strong>comédie</strong>.`
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// ANGLAIS — 4ème
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'ang-4e-preterit-present-perfect',
  filiere: '4eme',
  matiere: 'ang',
  titre: 'Preterit et Present Perfect',
  ordre: 14,
  enrich: false,
  sections: [
    {
      titre: 'Le prétérit (simple past)',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Emploi du prétérit',
          contenu: `Le <strong>prétérit</strong> (simple past) exprime une action <strong>terminée</strong> à un moment <strong>précis et révolu</strong> du passé. Il est souvent accompagné d'un repère de temps : <em>yesterday, last week, in 2010, two days ago</em>.<br>Ex. : I <strong>watched</strong> a film <em>yesterday</em>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Formation du prétérit',
          contenu: `— Verbes <strong>réguliers</strong> : base verbale + <strong>-ed</strong> (work → work<strong>ed</strong>).<br>— Verbes <strong>irréguliers</strong> : 2e colonne à mémoriser (go → <strong>went</strong>, see → <strong>saw</strong>).<br>— Forme négative : <strong>didn't</strong> + base verbale.<br>— Question : <strong>did</strong> + sujet + base verbale ?`
        },
        {
          type: 'ex', label: 'EX', titre: 'Phrases au prétérit',
          contenu: `Affirmatif : She <strong>visited</strong> London last summer.<br>Négatif : She <strong>didn't visit</strong> Paris.<br>Interrogatif : <strong>Did</strong> she <strong>visit</strong> London? — Yes, she did.`
        }
      ]
    },
    {
      titre: 'Le present perfect',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Emploi du present perfect',
          contenu: `Le <strong>present perfect</strong> relie le <strong>passé au présent</strong> : action passée dont le <strong>moment n'est pas précisé</strong>, ou qui a un <strong>résultat dans le présent</strong>, ou qui <strong>continue</strong> jusqu'à maintenant.<br>Ex. : I <strong>have visited</strong> London. (expérience, on ne dit pas quand)`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Formation du present perfect',
          contenu: `<strong>have / has</strong> + <strong>participe passé</strong> (3e colonne pour les irréguliers, base + -ed pour les réguliers).<br>Ex. : I <strong>have finished</strong>. / She <strong>has gone</strong>.<br>Mots fréquents : <em>already, just, never, ever, yet, since, for</em>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Since et for',
          contenu: `Avec le present perfect :<br>— <strong>since</strong> + point de départ : <em>since 2020, since Monday</em> ;<br>— <strong>for</strong> + durée : <em>for two years, for a long time</em>.<br>Ex. : I have lived here <strong>for</strong> ten years / <strong>since</strong> 2014.`
        }
      ]
    },
    {
      titre: 'Les verbes irréguliers',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Trois formes à connaître',
          contenu: `Un verbe irrégulier a trois colonnes :<br>— <strong>base verbale</strong> (go) ;<br>— <strong>prétérit</strong> (went) ;<br>— <strong>participe passé</strong> (gone).<br>Ex. : be / was-were / been · do / did / done · take / took / taken · write / wrote / written.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Mémoriser efficacement',
          contenu: `Apprends les irréguliers par <strong>familles de formes</strong> :<br>— inchangés : cut/cut/cut ;<br>— prétérit = participe : buy/bought/bought ;<br>— trois formes différentes : drink/drank/drunk.<br>Réviser régulièrement par petits groupes est plus efficace.`
        }
      ]
    },
    {
      titre: 'Choisir entre les deux temps',
      cartes: [
        {
          type: 'meth', label: 'METH', titre: 'Prétérit ou present perfect ?',
          contenu: `<strong>Prétérit</strong> si le moment est <strong>précisé</strong> ou s'il s'agit d'un récit terminé (<em>yesterday, in 2010, ago</em>).<br><strong>Present perfect</strong> si le moment n'est <strong>pas précisé</strong>, si l'action a un lien avec le présent ou n'est pas finie (<em>ever, never, already, since, for</em>).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Comparaison directe',
          contenu: `I <strong>have lost</strong> my keys. → je ne les ai pas, résultat présent (present perfect).<br>I <strong>lost</strong> my keys <em>yesterday</em>. → moment précis dans le passé (prétérit).<br>La présence de <em>yesterday</em> impose le prétérit.`
        }
      ]
    }
  ]
},

{
  id: 'ang-4e-futur',
  filiere: '4eme',
  matiere: 'ang',
  titre: 'Exprimer le futur : will / be going to',
  ordre: 15,
  enrich: false,
  sections: [
    {
      titre: 'Will',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Emploi de will',
          contenu: `<strong>Will</strong> exprime :<br>— une <strong>prédiction</strong> ou une opinion sur le futur (I think it <strong>will</strong> rain) ;<br>— une <strong>décision spontanée</strong> au moment où on parle (I'<strong>ll</strong> help you!) ;<br>— une <strong>promesse</strong> (I <strong>will</strong> always love you).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Formation de will',
          contenu: `<strong>will</strong> + <strong>base verbale</strong> (invariable).<br>— Affirmatif : I <strong>will</strong> (I'll) go.<br>— Négatif : I <strong>won't</strong> go.<br>— Question : <strong>Will</strong> you go?`
        }
      ]
    },
    {
      titre: 'Be going to',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Emploi de be going to',
          contenu: `<strong>Be going to</strong> exprime :<br>— une <strong>intention</strong>, un projet déjà décidé (I'<strong>m going to</strong> visit my aunt) ;<br>— une <strong>prédiction fondée sur des indices présents</strong> (Look at the clouds, it'<strong>s going to</strong> rain).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Formation de be going to',
          contenu: `<strong>be (am/is/are)</strong> + <strong>going to</strong> + <strong>base verbale</strong>.<br>— Affirmatif : She <strong>is going to</strong> travel.<br>— Négatif : She <strong>isn't going to</strong> travel.<br>— Question : <strong>Is</strong> she <strong>going to</strong> travel?`
        }
      ]
    },
    {
      titre: 'Le présent pour le futur',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Present continuous et present simple',
          contenu: `— Le <strong>present continuous</strong> exprime un projet <strong>fixé</strong> avec un moment précis : <em>I'm meeting Tom tomorrow.</em><br>— Le <strong>present simple</strong> sert pour les <strong>horaires</strong> (programmes officiels) : <em>The train leaves at 6.</em>`
        },
        {
          type: 'ex', label: 'EX', titre: 'Un rendez-vous prévu',
          contenu: `"We <strong>are playing</strong> football on Saturday." → le rendez-vous est organisé, avec une date.<br>On emploie ici le present continuous pour un futur planifié, et non <em>will</em>.`
        }
      ]
    },
    {
      titre: 'Choisir la bonne forme',
      cartes: [
        {
          type: 'meth', label: 'METH', titre: 'Will ou be going to ?',
          contenu: `— <strong>will</strong> : décision <strong>spontanée</strong>, prédiction sans preuve, promesse.<br>— <strong>be going to</strong> : <strong>intention déjà prévue</strong>, prédiction <strong>avec indices visibles</strong>.<br>Astuce : si la décision est prise <em>avant</em> de parler → going to ; si elle est prise <em>en parlant</em> → will.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Comparaison',
          contenu: `Plan décidé : "We <strong>are going to</strong> move to London next year."<br>Décision immédiate : (The phone rings) "I'<strong>ll</strong> answer it!"<br>Indices visibles : "Be careful, you'<strong>re going to</strong> fall!"`
        }
      ]
    }
  ]
},

{
  id: 'ang-4e-relatives',
  filiere: '4eme',
  matiere: 'ang',
  titre: 'Les propositions relatives',
  ordre: 16,
  enrich: false,
  sections: [
    {
      titre: 'Les pronoms relatifs',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Proposition relative',
          contenu: `Une <strong>proposition relative</strong> complète un nom (l'<strong>antécédent</strong>). Elle est introduite par un <strong>pronom relatif</strong> : <em>who, which, that, whose, where</em>.<br>Ex. : The man <strong>who</strong> lives here is my uncle.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Who / which / that',
          contenu: `— <strong>who</strong> : pour les <strong>personnes</strong> (the girl <strong>who</strong> sings).<br>— <strong>which</strong> : pour les <strong>choses/animaux</strong> (the book <strong>which</strong> I read).<br>— <strong>that</strong> : pour les <strong>personnes et les choses</strong>, dans les relatives essentielles.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Whose et where',
          contenu: `— <strong>whose</strong> exprime la <strong>possession</strong> (= dont le/la) : the boy <strong>whose</strong> father is a doctor.<br>— <strong>where</strong> renvoie à un <strong>lieu</strong> (= où) : the town <strong>where</strong> I was born.`
        }
      ]
    },
    {
      titre: 'Construire une relative',
      cartes: [
        {
          type: 'meth', label: 'METH', titre: 'Relier deux phrases',
          contenu: `Pour relier deux phrases qui partagent un même élément :<br><strong>1.</strong> Repère l'élément commun (l'antécédent).<br><strong>2.</strong> Remplace-le par le bon pronom relatif (who pour une personne, which pour une chose).<br><strong>3.</strong> Place la relative juste après l'antécédent.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Combinaison de phrases',
          contenu: `I have a friend. He speaks Chinese.<br>→ I have a friend <strong>who</strong> speaks Chinese.<br><br>This is the film. I watched it yesterday.<br>→ This is the film <strong>(which/that)</strong> I watched yesterday.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Le relatif sous-entendu',
          contenu: `Quand le pronom relatif est <strong>complément d'objet</strong> (pas sujet), on peut le <strong>supprimer</strong> dans les relatives essentielles.<br>Ex. : The book <strong>(that)</strong> I bought is great. → « The book I bought is great. »`
        }
      ]
    },
    {
      titre: 'Deux types de relatives',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Relative déterminative',
          contenu: `La <strong>relative déterminative</strong> (essentielle) donne une information <strong>indispensable</strong> pour identifier l'antécédent. Elle ne se sépare pas par une virgule.<br>Ex. : The students <strong>who failed</strong> must retake the test. (seulement ceux qui ont échoué)`
        },
        {
          type: 'def', label: 'DEF', titre: 'Relative explicative',
          contenu: `La <strong>relative explicative</strong> ajoute une information <strong>secondaire</strong>, encadrée de <strong>virgules</strong>. On n'y emploie pas <em>that</em>.<br>Ex. : My brother, <strong>who lives in Spain</strong>, is a teacher.`
        }
      ]
    }
  ]
},

{
  id: 'ang-4e-modaux',
  filiere: '4eme',
  matiere: 'ang',
  titre: 'Les modaux',
  ordre: 17,
  enrich: false,
  sections: [
    {
      titre: 'Qu\'est-ce qu\'un modal ?',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Définition du modal',
          contenu: `Un <strong>modal</strong> (can, must, may, should...) est un auxiliaire qui exprime une attitude du locuteur (capacité, obligation, conseil...). Il est <strong>suivi de la base verbale</strong> (sans <em>to</em>) et reste <strong>invariable</strong> (pas de -s à la 3e personne).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Forme négative et interrogative',
          contenu: `Les modaux forment seuls la négation et la question :<br>— Négatif : You <strong>can't</strong> / <strong>mustn't</strong> / <strong>shouldn't</strong>...<br>— Question : <strong>Can</strong> you swim? <strong>Should</strong> I go?<br>Pas besoin de <em>do/does/did</em>.`
        }
      ]
    },
    {
      titre: 'Capacité, permission, possibilité',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Can, could, may',
          contenu: `— <strong>can</strong> : capacité / permission (I <strong>can</strong> swim).<br>— <strong>could</strong> : capacité passée ou demande polie (I <strong>could</strong> swim at 5 / <strong>Could</strong> you help me?).<br>— <strong>may / might</strong> : permission / possibilité (It <strong>may</strong> rain).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Demander la permission',
          contenu: `"<strong>Can</strong> I open the window?" (familier)<br>"<strong>May</strong> I open the window?" (plus formel)<br>Les deux demandent la permission, mais <em>may</em> est plus poli.`
        }
      ]
    },
    {
      titre: 'Conseil et obligation',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Must, should, have to',
          contenu: `— <strong>must</strong> : obligation forte / quasi-certitude (You <strong>must</strong> stop).<br>— <strong>should</strong> : <strong>conseil</strong> (= devrais) : You <strong>should</strong> rest.<br>— <strong>have to</strong> : obligation venant de l'<strong>extérieur</strong> (règle) : I <strong>have to</strong> wear a uniform.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Mustn\'t vs don\'t have to',
          contenu: `You <strong>mustn't</strong> smoke here. → c'est <strong>interdit</strong>.<br>You <strong>don't have to</strong> come. → tu <strong>n'es pas obligé</strong> (mais tu peux).<br>Attention à ne pas confondre ces deux sens opposés.`
        }
      ]
    }
  ]
},

{
  id: 'ang-4e-vocabulaire',
  filiere: '4eme',
  matiere: 'ang',
  titre: 'Vocabulaire : Travel and Media',
  ordre: 18,
  enrich: false,
  sections: [
    {
      titre: 'Travel',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Travel — vocabulaire clé',
          contenu: `— <strong>a trip</strong> : un voyage / <strong>a journey</strong> : un trajet<br>— <strong>luggage</strong> : les bagages / <strong>a suitcase</strong> : une valise<br>— <strong>abroad</strong> : à l'étranger / <strong>a flight</strong> : un vol<br>— <strong>to book</strong> : réserver / <strong>a ticket</strong> : un billet`
        },
        {
          type: 'prop', label: 'PROP', titre: 'À l\'aéroport et à l\'hôtel',
          contenu: `— <strong>a boarding pass</strong> : carte d'embarquement<br>— <strong>to check in</strong> : enregistrer (se présenter)<br>— <strong>departure / arrival</strong> : départ / arrivée<br>— <strong>to land</strong> : atterrir / <strong>to take off</strong> : décoller`
        }
      ]
    },
    {
      titre: 'Media',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Media — vocabulaire clé',
          contenu: `— <strong>the news</strong> : les informations (singulier)<br>— <strong>a newspaper</strong> : un journal / <strong>a headline</strong> : un titre<br>— <strong>broadcast</strong> : émission, diffusion<br>— <strong>an advert / ad</strong> : une publicité`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Internet et réseaux sociaux',
          contenu: `— <strong>social media</strong> : les réseaux sociaux<br>— <strong>to post / to share</strong> : publier / partager<br>— <strong>a screen</strong> : un écran / <strong>to download</strong> : télécharger<br>— <strong>fake news</strong> : fausses informations`
        }
      ]
    },
    {
      titre: 'Mots de liaison et mise en contexte',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Linking words utiles',
          contenu: `Pour structurer un texte :<br>— <strong>first, then, finally</strong> : d'abord, ensuite, enfin<br>— <strong>because / so</strong> : parce que / donc<br>— <strong>however</strong> : cependant<br>— <strong>moreover</strong> : de plus`
        },
        {
          type: 'ex', label: 'EX', titre: 'Mettre en contexte',
          contenu: `« I <strong>booked</strong> a <strong>flight abroad</strong> and read the <strong>news</strong> on my phone during the <strong>journey</strong>. »<br>Ce type de phrase combine le vocabulaire <em>travel</em> et <em>media</em> dans une situation réelle.`
        }
      ]
    }
  ]
}

]

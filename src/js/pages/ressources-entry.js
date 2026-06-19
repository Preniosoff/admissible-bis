import '../main.js';
import { initResourceGateway } from '../components/resource-gateway.js';
import { getUser } from '../auth.js';

document.addEventListener('DOMContentLoaded', async () => {
  await initResourceGateway({
    root: '#exercices-gateway',
    resourceLabel: 'Exercices',
    resourceName: 'les exercices',
    intro: 'Commencez par votre niveau, puis votre filière, puis la matière pour obtenir des exercices adaptés.',
    preferredFiliereId: getUser()?.filiere_id || '',
    onComplete: ({ filiere, matiere }) => {
      const url = new URL('cours.html', window.location.href);
      url.searchParams.set('filiere', filiere.id);
      url.searchParams.set('matiere', matiere.id);
      url.searchParams.set('view', 'exercises');
      window.location.href = url.toString();
    },
  });
});

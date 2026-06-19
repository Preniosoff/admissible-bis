import { api } from '../api.js';
import { getUser } from '../auth.js';
import { emptyState, ICONS, notLoggedIn } from '../empty-state.js';
import { toast } from '../toast.js';

let todos = [];

export async function initTodosPage() {
  const container = document.getElementById('todos-content');
  if (!container) return;
  if (!getUser()) { container.innerHTML = notLoggedIn("liste d'actions"); return; }
  await loadAndRender(container);
}

async function loadAndRender(container) {
  todos = await api.getTodos();
  render(container);
}

function render(container) {
  const pending = todos.filter(t => !t.done);
  const done = todos.filter(t => t.done);
  const priorityOrder = { high: 0, normal: 1, low: 2 };
  pending.sort((a, b) => (priorityOrder[a.priority] || 1) - (priorityOrder[b.priority] || 1));

  container.innerHTML = `
    <div style="max-width:640px;margin:0 auto">
      <!-- Add form -->
      <div id="add-form" style="display:flex;gap:8px;margin-bottom:var(--s-5)">
        <input id="todo-input" type="text" placeholder="Nouvelle tâche..." style="flex:1;padding:0.6rem 0.85rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-card);color:var(--text-0);font-family:inherit;font-size:0.88rem">
        <select id="todo-priority" style="padding:0.6rem 0.7rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-card);color:var(--text-0);font-family:inherit;font-size:0.82rem">
          <option value="normal">Normal</option>
          <option value="high">Urgent</option>
          <option value="low">Bas</option>
        </select>
        <button id="todo-add" style="padding:0.6rem 1.2rem;background:var(--accent);color:var(--text-inv);border:none;border-radius:var(--r-sm);font-size:0.82rem;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap">Ajouter</button>
      </div>

      <!-- Stats -->
      <div style="display:flex;gap:var(--s-4);margin-bottom:var(--s-5)">
        <div style="flex:1;text-align:center;padding:var(--s-3);border:1px solid var(--border-1);border-radius:var(--r-md)">
          <div style="font-size:1.5rem;font-weight:700">${pending.length}</div>
          <div style="font-size:0.65rem;font-weight:500;color:var(--text-3);text-transform:uppercase;letter-spacing:0.05em">À faire</div>
        </div>
        <div style="flex:1;text-align:center;padding:var(--s-3);border:1px solid var(--border-1);border-radius:var(--r-md)">
          <div style="font-size:1.5rem;font-weight:700;color:var(--positive)">${done.length}</div>
          <div style="font-size:0.65rem;font-weight:500;color:var(--text-3);text-transform:uppercase;letter-spacing:0.05em">Terminées</div>
        </div>
        <div style="flex:1;text-align:center;padding:var(--s-3);border:1px solid var(--border-1);border-radius:var(--r-md)">
          <div style="font-size:1.5rem;font-weight:700;color:var(--caution)">${pending.filter(t => t.priority === 'high').length}</div>
          <div style="font-size:0.65rem;font-weight:500;color:var(--text-3);text-transform:uppercase;letter-spacing:0.05em">Urgentes</div>
        </div>
      </div>

      <!-- Pending -->
      ${pending.length ? `<div style="margin-bottom:var(--s-5)">
        ${pending.map(t => todoItem(t)).join('')}
      </div>` : todos.length === 0
        ? emptyState({
            icon: ICONS.checklist,
            title: 'Liste vide',
            subtitle: 'Ajouter un DS à préparer, un exercice à reprendre ou une fiche à rédiger.',
            cta: `<button onclick="document.getElementById('todo-input')?.focus()"
              style="padding:0.5rem 1.4rem;border-radius:var(--r-full);background:var(--accent);color:var(--text-inv);border:none;font-size:0.82rem;font-weight:600;cursor:pointer;font-family:inherit">
              Ajouter une tâche
            </button>`,
          })
        : emptyState({
            icon: ICONS.allDone,
            title: 'Tout est fait !',
            subtitle: 'Toutes les tâches sont terminées. De nouvelles actions peuvent être ajoutées si besoin.',
          })
      }

      <!-- Done -->
      ${done.length ? `
        <div style="margin-top:var(--s-4)">
          <div style="font-size:0.65rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-3);margin-bottom:8px">Terminées (${done.length})</div>
          ${done.slice(0, 10).map(t => todoItem(t)).join('')}
          ${done.length > 10 ? `<p style="font-size:0.78rem;color:var(--text-3);text-align:center;margin-top:8px">et ${done.length - 10} autres...</p>` : ''}
        </div>` : ''}
    </div>`;

  // Events
  container.querySelector('#todo-add').addEventListener('click', () => addTodo(container));
  container.querySelector('#todo-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') addTodo(container); });

  container.querySelectorAll('.todo-check').forEach(el => {
    el.addEventListener('click', async () => {
      const id = Number(el.dataset.id);
      const todo = todos.find(t => t.id === id);
      try {
        await api.updateTodo(id, { done: !todo.done });
        await loadAndRender(container);
      } catch { toast('Erreur lors de la mise à jour', 'error'); }
    });
  });

  container.querySelectorAll('.todo-del').forEach(el => {
    el.addEventListener('click', async () => {
      try {
        await api.deleteTodo(el.dataset.id);
        await loadAndRender(container);
        toast('Tâche supprimée', 'ok');
      } catch { toast('Erreur lors de la suppression', 'error'); }
    });
  });
}

function todoItem(t) {
  const priorityDot = t.priority === 'high' ? 'var(--negative)' : t.priority === 'low' ? 'var(--text-3)' : 'var(--accent)';
  return `<div style="display:flex;align-items:center;gap:10px;padding:0.6rem 0.85rem;border:1px solid var(--border-1);border-radius:var(--r-md);margin-bottom:4px;transition:all 0.15s;${t.done ? 'opacity:0.5' : ''}">
    <button class="todo-check" data-id="${t.id}" style="width:20px;height:20px;border-radius:50%;border:2px solid ${t.done ? 'var(--positive)' : 'var(--border-0)'};background:${t.done ? 'var(--positive)' : 'transparent'};cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.65rem;font-weight:700">${t.done ? '+' : ''}</button>
    <div style="width:6px;height:6px;border-radius:50%;background:${priorityDot};flex-shrink:0"></div>
    <span style="flex:1;font-size:0.88rem;${t.done ? 'text-decoration:line-through;color:var(--text-3)' : 'color:var(--text-0)'}">${t.text}</span>
    ${t.due_date ? `<span style="font-size:0.68rem;color:var(--text-3)">${t.due_date}</span>` : ''}
    <button class="todo-del" data-id="${t.id}" style="background:none;border:none;color:var(--text-3);cursor:pointer;font-size:0.75rem;padding:2px 4px;font-family:inherit">x</button>
  </div>`;
}

async function addTodo(container) {
  const input = container.querySelector('#todo-input');
  const priority = container.querySelector('#todo-priority').value;
  const text = input.value.trim();
  if (!text) return;
  try {
    await api.createTodo({ text, priority });
    input.value = '';
    await loadAndRender(container);
    toast('Tâche ajoutée', 'ok');
  } catch (err) { toast(err.message || 'Erreur', 'error'); }
}

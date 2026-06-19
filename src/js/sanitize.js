// ── Sanitisation HTML légère ──────────────────────────────────────────────────
// Évite les injections XSS dans les innerHTML avec contenu utilisateur.
// Conserve les tags courants (b, i, strong, em, code, p, br) mais bloque tout
// attribut de type event handler (onclick, onerror…) et les balises dangereuses.

const ALLOWED_TAGS = new Set(['b','i','strong','em','code','pre','p','br','ul','ol','li','span']);
const ALLOWED_ATTRS = new Set(['class', 'style']);

export function sanitizeHtml(html) {
  if (!html) return '';
  // Utilise un DOMParser pour parser sans exécuter
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return sanitizeNode(doc.body);
}

function sanitizeNode(node) {
  let out = '';
  for (const child of node.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      out += escapeText(child.textContent);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      const tag = child.tagName.toLowerCase();
      if (!ALLOWED_TAGS.has(tag)) {
        // Tag non autorisé → on garde le contenu texte des enfants
        out += sanitizeNode(child);
        continue;
      }
      let attrs = '';
      for (const attr of child.attributes) {
        if (!ALLOWED_ATTRS.has(attr.name)) continue;
        // Bloquer les valeurs dangereuses dans style/class
        if (attr.name === 'style' && /javascript|expression/i.test(attr.value)) continue;
        attrs += ` ${attr.name}="${escapeAttr(attr.value)}"`;
      }
      out += `<${tag}${attrs}>${sanitizeNode(child)}</${tag}>`;
    }
  }
  return out;
}

export function escapeText(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

import '../main.js';
import { initCoursPage } from './cours.js';
import { initFocusSuggestion } from '../focus-suggestion.js';

document.addEventListener('DOMContentLoaded', () => {
  initCoursPage();
  initFocusSuggestion();
});

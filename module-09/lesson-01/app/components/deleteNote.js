import { renderNotes } from '../renders/render.js';
import { saveLS } from '../utils/localStorage.js'
import { store } from '../utils/store.js';
import { STORAGE_KEY } from '../utils/variables.js';

export function onDeleteNote(event) {
  const currEl = event.target;
  if (!currEl.classList.contains("js-delete-btn")) {
    return;
  }
  const currElId = currEl.dataset.noteid;

  const filteredNotes = store.notes.filter(({ id }) => id !== currElId);
  store.notes = [...filteredNotes];
  saveLS(STORAGE_KEY.notes, store.notes);
  renderNotes(store.notes);
}
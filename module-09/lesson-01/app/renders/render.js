import refs from "../utils/refs.js";
import { createNote } from "../components/createNote.js";


export function renderNotes(notes = []) {
  if (notes === undefined) {
    return;
  }
  if (notes.length === 0) {
    refs.notesList.innerHTML = "";
    return;
  }
  const markup = notes.map(createNote).join("");
  refs.notesList.innerHTML = markup;
}





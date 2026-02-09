import { saveLS } from "../utils/localStorage.js";
import refs from "../utils/refs.js";
import { store } from "../utils/store.js";
import { genId, STORAGE_KEY } from "../utils/variables.js";
import { createNote } from "./createNote.js";

export function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const noteData = {
    id: genId.generate(10),
    ...Object.fromEntries(new FormData(form)),
  };

  const checkEmptyFields = Object.values(noteData).some(
    note => note.trim() === ""
  );

  if (checkEmptyFields) {
    alert("Please fill in all fields");
    return;
  }

  // Add new items in store
  store.notes = [...store.notes, noteData];

  // Save to local storage
  saveLS(STORAGE_KEY.notes, store.notes);

  // Insert markup to list
  refs.notesList.insertAdjacentHTML("beforeend", createNote(noteData));

  // Reset form
  form.reset();
}

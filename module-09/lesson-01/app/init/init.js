import { renderNotes } from "../renders/render.js";
import { loadLS } from "../utils/localStorage.js";
import { STORAGE_KEY } from '../utils/variables.js';
import { store } from "../utils/store.js";
import refs from "../utils/refs.js";
import { setTheme } from "../settings/theme-settings.js";
import { onFormSubmit } from "../components/submitForm.js";
import { onDeleteNote } from "../components/deleteNote.js";
import { onThemeToggle } from "../settings/theme-settings.js";

export default function init() {
    setTheme(loadLS(STORAGE_KEY.appTheme));

    // Listeners
    refs.form.addEventListener("submit", onFormSubmit);
    refs.notesList.addEventListener("click", onDeleteNote);
    refs.themeToggle.addEventListener("click", onThemeToggle);

    const notesData = loadLS(STORAGE_KEY.notes);

    if (notesData !== undefined) {
    store.notes = [...notesData];
    renderNotes(notesData);
    }

}
// App store
const store = {
  notes: [
    // { id: 1, name: "Mango", body: "Mango is cute" },
    // { id: 2, name: "Ajax", body: "Ajax is awesome" },
    // { id: 3, name: "Poly", body: "Poly is nice" },
  ],
  appTheme: "light",
};

// Generate id instance
const g = new GenerateId();

const STORAGE_KEY = { notes: "notes", appTheme: "appTheme" };

// Elements
const notesList = document.querySelector(".js-notes-list");
const card = document.querySelector(".js-card");
const form = document.querySelector(".js-form");
const btnDelete = document.querySelector(".js-delete-btn");
const themeToggle = document.querySelector(".js-theme-toggle");

// Call setAttribute theme page
setTheme(loadLS(STORAGE_KEY.appTheme));

// Listeners
form.addEventListener("submit", onFormSubmit);
notesList.addEventListener("click", onDeleteNote);
themeToggle.addEventListener("click", onThemeToggle);

// Load notes from local storage
const notesData = loadLS(STORAGE_KEY.notes);

if (notesData !== undefined) {
  store.notes = [...notesData];
  renderNotes(notesData);
}

// Functions
function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const noteData = {
    id: g.generate(10),
    ...Object.fromEntries(new FormData(form)),
  };
  //   console.log(notesData);

  // Add new items in store
  store.notes = [...store.notes, noteData];

  // Save to local storage
  saveLS(STORAGE_KEY.notes, store.notes);

  // Insert markup to list
  notesList.insertAdjacentHTML("beforeend", createNote(noteData));

  // Reset form
  form.reset();
}

function renderNotes(notes = []) {
  if (notes === undefined) {
    return;
  }
  if (notes.length === 0) {
    notesList.innerHTML = "";
    return;
  }
  const markup = notes.map(createNote).join("");
  notesList.innerHTML = markup;
}

function createNote({ id, name, body }) {
  return `
      <li class="card js-card">
        <h5 class="card-header">${name}</h5>
        <div class="card-body">
            <p class="card-text">${body}</p>
            <button
                class="btn btn-primary js-delete-btn"
                type="button"
                data-noteid="${id}"
            >Delete</button>
        </div>
      </li>
      `;
}

// Theme toggle
function setTheme(theme) {
  const currentTheme = theme ?? "light";

  themeToggle.value = currentTheme;

  currentTheme === "light"
    ? themeToggle
    : themeToggle.setAttribute("checked", "");

  document.documentElement.setAttribute("data-bs-theme", currentTheme);

  store.appTheme = currentTheme;
}

function onThemeToggle(event) {
  const currentTheme = store.appTheme === "light" ? "dark" : "light";

  setTheme(currentTheme);

  saveLS(STORAGE_KEY.appTheme, currentTheme);

  store.appTheme = currentTheme;
}

// Local storage service
function saveLS(key, value) {
  try {
    const serialisedState = JSON.stringify(value);
    localStorage.setItem(key, serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}

function loadLS(key) {
  try {
    const serialisedState = localStorage.getItem(key);
    return serialisedState === null ? undefined : JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}

// Delete btn
function onDeleteNote(event) {
  //   console.dir(event.target.tagName === "BUTTON");
  const currEl = event.target;
  if (!currEl.classList.contains("js-delete-btn")) {
    return;
  }
  const currElId = currEl.dataset.noteid;

  filteredNotes = store.notes.filter(({ id }) => id !== currElId);
  store.notes = [...filteredNotes];
  saveLS(STORAGE_KEY.notes, store.notes);
  renderNotes(store.notes);
}

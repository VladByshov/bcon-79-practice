// App store
const store = {
  notes: [
    { id: 1, name: "Mango", body: "Mango is cute" },
    { id: 2, name: "Ajax", body: "Ajax is awesome" },
    { id: 3, name: "Poly", body: "Poly is nice" },
  ],
  appTheme: "light",
};

// Generate id instance
const g = new GenerateId();

// Elements
const notesList = document.querySelector(".js-notes-list");
const card = document.querySelector(".js-card");
const form = document.querySelector(".js-form");
const btnDelete = document.querySelector(".js-delete-btn");

// Listeners
form.addEventListener("submit", onFormSubmit);

renderNotes(store.notes);

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

  // Insert markup to list
  notesList.insertAdjacentHTML("beforeend", createNote(noteData));

  // Reset form
  form.reset();
}

function renderNotes(notes = []) {
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

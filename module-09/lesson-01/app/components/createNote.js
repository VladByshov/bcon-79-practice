export function createNote({ id, name, body }) {
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
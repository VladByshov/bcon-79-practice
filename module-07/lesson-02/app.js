const form = document.querySelector(".header-form");
const tasksList = document.querySelector(".tasks-list");
const themeToggle = document.querySelector("#themeToggle");

const store = {
  tasks: [
    {
      id: 1,
      taskName: "task1",
      taskDescr: "finish task 1",
    },
    {
      id: 2,
      taskName: "task2",
      taskDescr: "finish task 2",
    },
  ],
};

init();

form.addEventListener("submit", onFormSubmit);
tasksList.addEventListener("click", onTasksClick);
themeToggle.addEventListener("click", onToggleTheme);

function onFormSubmit(event) {
  event.preventDefault();
  const taskName = event.target.elements.taskName.value.trim();
  const taskDescr = event.target.elements.taskDescription.value.trim();
  if (!taskName || !taskDescr) {
    return alert("Всі поля мають бути заповнені!!!");
  }
  const task = {
    id: Date.now(),
    taskName,
    taskDescr,
  };
  store.tasks = [...store.tasks, task];
  tasksList.insertAdjacentHTML("beforeend", createTaskMarkup(task));
  event.target.reset();
}

function onTasksClick(event) {
  const currEl = event.target;
  if (currEl.nodeName !== "BUTTON") {
    return;
  }
  const taskId = +currEl.dataset.id;
  const filterredTasks = store.tasks.filter(task => taskId !== task.id);
  tasksList.innerHTML = filterredTasks.map(createTaskMarkup).join("");
  store.tasks = filterredTasks;
}

function onToggleTheme(event) {
  const bodyEl = event.target.closest("body");
  const isLightTheme = bodyEl.classList.contains("theme-light");
  if (isLightTheme) {
    bodyEl.classList.replace("theme-light", "theme-dark");
    return;
  }
  bodyEl.classList.replace("theme-dark", "theme-light");
}

function createTaskMarkup(task) {
  return `
        <li class="task-list-item">
            <button class="task-list-item-btn" data-id="${task.id}">Delete</button>
            <h3>${task.taskName}</h3>
            <p>${task.taskDescr}</p>
        </li>
    `;
}

function init() {
  if (store.tasks.length === 0) {
    return;
  }
  tasksList.innerHTML = store.tasks.map(createTaskMarkup).join("");
}

class Task {
  constructor(content, date) {
    this.content = content;
    this.date = date;
    this.isfinished = false;
  }
  finishTask() {
    this.isfinished = True;
  }
}

var tasks = JSON.parse(localStorage.getItem("task_list")) || [];

function addTask() {
  let task = document.querySelector("#nome_tarefa");
  let content = task.split("em");
  let newTask = new Tarefa(content[0], content[1]);
  localStorage.setItem(newTask.content, newTask.date);
}

function removeTask(task) {
  localStorage.removeItem(task.conteudo);
}

function getTasks() {
  return localStorage;
}

// SALVANDO NO STORAGE
function saveToStorage() {
  localStorage.setItem("task_list", JSON.stringify(tasks));
}

function renderTaskList() {
  let;
}

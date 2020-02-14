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

function addTask(task) {
  let content = task.split("em");
  let newTask = new Tarefa(contet[0], content[1]);
  localStorage.setItem(newTask.content, newTask.date);
}

function removeTask(task) {
  localStorage.removeItem(task.conteudo);
}

function getTasks() {
  return localStorage;
}

//const novaTarefa = new Tarefa("Fazer tarefa de LPWEB");

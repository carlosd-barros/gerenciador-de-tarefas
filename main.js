class Tarefa {
  constructor(conteudo) {
    let data = new Date();
    this.conteudo = conteudo;
    this.data = ` em ${data.getDate()}/${data.getMonth() +
      1}/${data.getFullYear()}`;
    this.concluido = false;
  }
}

var tasks = JSON.parse(
    localStorage.getItem('task_list')
) || [];

function addTask(task){
    localStorage.setItem(task.conteudo, task.data);
}

function removeTask(task){
    localStorage.removeItem(task.conteudo);
}

function getTasks(){
  return localStorage;
}



// SALVANDO NO STORAGE
function saveToStorage() {
    localStorage.setItem(
        'task_list', JSON.stringify(tasks)
    );
}
class Tarefa {
  constructor(conteudo) {
    let data = new Date();
    this.conteudo = conteudo;
    this.data = ` em ${data.getDate()}/${data.getMonth() +
      1}/${data.getFullYear()}`;
    this.concluido = false;
  }
}

function addTask(task){
  localStorage.setItem(task.conteudo, task.data);
}

function removeTask(task){
  localStorage.removeItem(task.conteudo);
}

function getTasks(){
  return localStorage;
}

//const novaTarefa = new Tarefa("Fazer tarefa de LPWEB");

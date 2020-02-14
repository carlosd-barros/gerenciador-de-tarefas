class Tarefa {
  constructor(conteudo) {
    let data = new Date();
    this.conteudo = conteudo;
    this.data = ` em ${data.getDate()}/${data.getMonth() +
      1}/${data.getFullYear()}`;
    this.concluido = false;
  }
}

//const novaTarefa = new Tarefa("Fazer tarefa de LPWEB");

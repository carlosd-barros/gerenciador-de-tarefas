class Task {
    constructor(name, date) {
        this.name = name;
        this.date = date;
        this.isFinished = false;
        // this.id = create_UUID();
    }

    finishTask() {
        this.isFinished = True;
    }
}


// get task_list from storage
const tasks = JSON.parse(
    localStorage.getItem("task_list")
) || [];

// save task_list on storage
function saveToStorage() {
    localStorage.setItem(
        "task_list", JSON.stringify(tasks)
    );
}

// Criar o obj Task, add obj Task na tasks list,
// chama a func de rederizar e salva novos dados no storage
document.getElementById('btn_salvar').onclick = function() {
    let task_input = document.getElementById('task_name');
    let input_value = task_input.value;

    if(input_value.length !== 0) {
        let [name, date] = input_value.split("em");
        let newTask = new Task(name, date);

        tasks.push(newTask);
        saveToStorage();
        task_input.value = '';
        renderTaskList();
    }

}

// function addTask(task) {
//   let name = task.split("em");
//   let newTask = new Tarefa(contet[0], name[1]);
//   localStorage.setItem(newTask.name, newTask.date);
// }

function renderTaskList() {
    let tbody_element = document.querySelector("#tabela_tarefa tbody");
    let tr_element = document.createElement('tr');
    tbody_element.innerHTML = '';

    if (tasks.length < 1) {
        console.log('nenhuma task encontrada');

        let td_empty = document.createElement('td');
        td_empty.setAttribute('colspan', 3);
        td_empty.appendChild(
            document.createTextNode('Nenhuma tarefa pendente encontrada.')
        );
        tr_element.appendChild(td_empty);
        tbody_element.appendChild(tr_element);

        return;
    }

    console.log('iniciando processo de renderização');

    for ( let i=0; i < tasks.length; i++) {
        tr_element = document.createElement('tr');

        let [td_entrega, td_name, td_actions] = createTdElements(tasks[i], i);

        tr_element.appendChild(td_entrega);
        tr_element.appendChild(td_name);
        tr_element.appendChild(td_actions);

        tbody_element.appendChild(tr_element);
    }
    console.log('fim da renderização de elementos');
}

renderTaskList();

function removeTask(task_id) {
    console.log(`remove task: ${tasks[task_id].name}`);
    tasks.splice(task_id, 1);
    renderTaskList();
    saveToStorage();
}

function concludeTask(task_id) {
    let task = tasks[task_id];
    console.log(`conclude task: ${tasks[task_id].name}`);

    if (task) task.isFinished = true;
    console.log(task.isFinished);
    renderTaskList();
    saveToStorage();
}

function getTasks() {
  return localStorage;
}


// trabalho de lpweb em 20/02/2020
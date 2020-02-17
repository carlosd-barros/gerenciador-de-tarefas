class Task {
    constructor(name, date) {
        this.name = name;
        this.date = date;
        this.isFinished = false;
        // this.id = create_UUID();
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
    let [args, is_valid] = formatTextInput(task_input.value);
    console.log(args, is_valid);

    if(is_valid) {
        let [name, date] = args;
        let newTask = new Task(name, date);

        tasks.push(newTask);
        saveToStorage();
        task_input.value = '';
        renderTaskList();
    }
}

function formatTextInput(text) {
    // default values
    let is_valid = true;
    let args = new Array;

    if (text.length <= 0) return [args, false];

    // separando os dados
    let date_format = ['DD/MM/YYYY', 'DD-MM-YYYY'];
    let pos_em_text = text.lastIndexOf('em');
    let name_text = text.slice(0, pos_em_text);
    let date_text = text.slice(pos_em_text, text.length);
    let date = moment(date_text.split('em')[1], date_format);

    console.log(name_text, date_text, date, date.isValid());

    // get current year
    moment.locale('pt-br');
    let current_yaer = moment().format('YYYY');

    if (!date_text.endsWith(current_yaer) || !date.isValid()) {
        alert('data invalida!');
        return [args, false]
    };

    args.push(name_text, date.format(date_format[0]));

    return [args, is_valid];
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

    tasks.map(function(item, pos) {
        tr_element = document.createElement('tr');
        tr_element.id = `task_${pos}`;
        let td_list = createTdElements(item, pos);

        if (td_list.length > 0) {
            td_list.map(function(item) {
                tr_element.appendChild(item)
            });

            tbody_element.appendChild(tr_element);

            return;
        }

        console.log('td_list vazio');
    });

    console.log('fim da renderização de elementos');
    console.log('----------------------------');
}

renderTaskList();

function removeTask(task_id) {
    let task = tasks[task_id];

    if (task) {
        $(`#task_${task_id}`).fadeOut(1000);
        console.log(`remove task: ${task.name}`);
        tasks.splice(task_id, 1);
        saveToStorage();
        // setTimeout(renderTaskList, 1200);
    };
}

function concludeTask(task_id) {
    let task = tasks[task_id];

    if (task) {
        console.log(`conclude task: ${task.name}`);
        task.isFinished = true
        saveToStorage();
        renderTaskList();
    };
}

function getTasks() {
  return localStorage;
}

// trabalho de lpweb em 20/02/2020
// Trabalho em de lpweb em 20/02/2020
// UTILS

function createTdElements({name=null, date=null, isFinished=null}, task_id) {
    const td_list = new Array;
    let valid = isFinished === true || isFinished === false;

    if (name && date && valid) {
        td_list.push(
            createTdEntrega(date, isFinished),
            createTdNome(name, isFinished),
            createTdActions(task_id, isFinished)
        );
    }

    return td_list;
}

function createTdEntrega(date, finished) {
    if (!date) return null;

    let [day, month] = date.split('/');

    let td_entrega = document.createElement('td');
    td_entrega.classList.add('text-left');
    let text_entrega = document.createTextNode(`${day}/${month}`);

    if (finished) {
        console.log('tarefa finalizada. tachando data de entrega.');
        let del_element = document.createElement('del');
        del_element.appendChild(text_entrega);
        td_entrega.appendChild(del_element);
        return td_entrega;
    }

    td_entrega.appendChild(text_entrega);

    return td_entrega;
}

function createTdNome(name, finished) {
    if (!name) return;

    let td_name = document.createElement('td');
    td_name.classList.add('text-center');
    let text_name = document.createTextNode(name);

    if (finished) {
        console.log('tarefa finalizada. tachando nome.');
        let del_element = document.createElement('del');
        del_element.appendChild(text_name);
        td_name.appendChild(del_element);
        return td_name;
    }

    td_name.appendChild(text_name);

    return td_name;
}

function createTdActions(task_id, finished) {
    let td_actions = document.createElement('td');
    td_actions.classList.add('text-center');

    const btn_div = document.createElement("div");
    btn_div.classList.add("text-center", "align-middle", "btn-group");

    // create btn save
    let btn_conclude = document.createElement("button");
    btn_conclude.title = "Concluir";
    btn_conclude.classList.add("btn", "btn-sm", "btn-outline-success");
    btn_conclude.setAttribute("onclick", `concludeTask(${task_id})`);

    let li_save = document.createElement("li");
    li_save.classList.add("fas", "fa-check");

    btn_conclude.appendChild(li_save);

    // create btn delete
    let btn_delete = document.createElement("button");
    btn_delete.title = "Excluir";
    btn_delete.classList.add("btn", "btn-sm", "btn-outline-danger");
    btn_delete.setAttribute("onclick", `removeTask(${task_id})`);

    let li_delete = document.createElement("li");
    li_delete.classList.add("fas", "fa-trash-alt");
    btn_delete.appendChild(li_delete);

    // disable btns for isFinished == true
    if (finished) {
        console.log('tarefa concluida. desabilitando botões de ação.');
        btn_conclude.setAttribute('disabled', 'true');
        btn_delete.setAttribute('disabled', 'true');
    }

    // add btns on btn_div
    btn_div.appendChild(btn_conclude);
    btn_div.appendChild(btn_delete);

    // add btn_div on td_actions
    td_actions.appendChild(btn_div);

    return td_actions;
}

function createSpinnerElement() {
    let span_element = document.createElement("span");
    span_element.classList.add("sr-only");
    span_element.appendChild(document.createTextNode("Carregando..."));

    const div_element = document.createElement("div");
    div_element.classList.add("spinner-border");
    div_element.appendChild(span_element);

    return div_element;
}

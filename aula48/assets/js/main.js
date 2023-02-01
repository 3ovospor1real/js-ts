function myScope() {
    //seleciona os elementos da página
    const inputTask = document.querySelector('input.task-name');
    const buttonTask = document.querySelector('.add-task');
    const list = document.querySelector('ul.list');

    // Adiciona a tarefa quando a tecla ENTER for pressionada
    inputTask.addEventListener('keypress', (e) => {
        if(e.keyCode === 13){
            if(!inputTask.value) return;
            addTask(inputTask.value)
        }
    });

    // Adicona a tarefa quando clicar no botão ADICIONAR TAREFA
    buttonTask.addEventListener('click', (e) => {
        addTask(inputTask.value);
    });

    // função para adicionar a tarefa
    function addTask (inputText) {
        const task = document.createElement('li');
        task.innerHTML = inputText
        list.appendChild(task);
        cleanInput();
        createButtonRemove(task);
        saveTask();
    };

    // função para limpar o input
    function cleanInput () {
        inputTask.value = '';
        inputTask.focus();
    };
    
    // função para criar o botão de remover tarefa
    function createButtonRemove (li) {
        li.innerHTML += ' ';
        const removeButton = document.createElement('button');
        removeButton.innerHTML = 'Apagar';
        removeButton.setAttribute('class', 'apagar');
        removeButton.setAttribute('title', 'Apagar esta tarefa');
        li.appendChild(removeButton);
    };

    // Salva a tarefa
    function saveTask() {
        const liTask = document.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTask) {
            let taskText = tarefa.innerText;
            taskText = taskText.replace('Apagar', '').trim();
            listaDeTarefas.push(taskText);
        }

        const taskJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tasks', taskJSON);
    }

    //Recarrega as tarefas salvas
    function addSaveTasks () {
        const tasks = localStorage.getItem('tasks');
        const tasksList = JSON.parse(tasks);
        
        for(let tarefa of tasksList) {
            addTask(tarefa);
        }
    }   
    addSaveTasks()

    // Remove a tarefa
    document.addEventListener('click', (e) => {
        const el = e.target;
        if (el.classList.contains('apagar')) {
            el.parentElement.remove();
            saveTask();
        }
    });
}
myScope()

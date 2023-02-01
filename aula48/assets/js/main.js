function myScope() {
    //seleciona os elementos da página
    const inputTask = document.querySelector('input.task-name');
    const buttonTask = document.querySelector('.add-task');
    const list = document.querySelector('ul.list');

    // função para limpar o input
    function cleanInput () {
        inputTask.value = '';
        inputTask.focus();
    };

    // função para adicionar a tarefa
    function addTask () {
        
        if(!inputTask.value) return;

        let item = createTask(inputTask.value);
        list.appendChild(item);
        cleanInput();
        saveTask();
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

    // função que cria a tarefa
    function createTask (taskName) {
        const task = document.createElement('li');
        task.innerHTML = taskName
        createButtonRemove(task);
        return task
    };
    
    // Adiciona a tarefa quando a tecla ENTER for pressionada
    inputTask.addEventListener('keypress', (e) => {
        if(e.keyCode === 13){
            addTask()
        }
    });

    // Adicona a tarefa quando clicar no botão ADICIONAR TAREFA
    buttonTask.addEventListener('click', (e) => {
        addTask();
    });

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
            const task = createTask(tarefa);
            addTask(task);
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

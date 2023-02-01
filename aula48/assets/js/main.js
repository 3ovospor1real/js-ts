function myScope() {
    const inputTask = document.querySelector('input.task-name');
    const buttonTask = document.querySelector('.add-task');
    
    const list = document.querySelector('ul.list');
    
    function addTask () {
        let taskName = inputTask.value;
        
        if(!taskName) return

        let item = createTask(taskName);
        list.appendChild(item);
    }
    
    function createTask (taskName) {
        let task = document.createElement('li');
        task.innerHTML = taskName + ' '+ '<button class="remove">Remover tarefa</button>'
        return task
    }

    buttonTask.addEventListener('click', addTask);
}
myScope()

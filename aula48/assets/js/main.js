function myScope() {
    const inputTask = document.querySelector('input.task-name');
    const buttonTask = document.querySelector('.add-task');
    
    const list = document.querySelector('ul.list');
    
    function addTask () {
        let taskName = inputTask.value;
        
        if(!taskName) return
        
        
        
    }
    
    function createTask (taskName) {
        let task = document.createElement('li');
        task.innerHTML = taskName + '<button>Remover tarefa</button>'
        return task
    }

    buttonTask.addEventListener('click', addTask);
}
myScope()

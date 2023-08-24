//pageLoad.js


function createAndAppendElements(){
    // Declaring main content
    const contentDiv = document.getElementById('content');
    // Header Code
    const midbar = document.createElement('div');
    midbar.classList.add('midbar');
    const heading = document.createElement('h1');
    heading.textContent = 'To-Do List :D';

    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Modern yet simplistic to-do list application.';
    


    midbar.appendChild(heading);
    midbar.appendChild(paragraph);

    contentDiv.appendChild(midbar);


    // Adding to do list tags
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');

    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('id', 'task');
    taskInput.setAttribute('placeholder', 'Add a new task');

    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('id', 'priority');

    const priorities = ['Low', 'Medium', 'High'];
    for (const priority of priorities) {
        const option = document.createElement('option');
        option.setAttribute('value', priority.toLowerCase());
        option.textContent = priority;
        prioritySelect.appendChild(option);
    }

    const addButton = document.createElement('button');
    addButton.setAttribute('id', 'add-btn');
    addButton.textContent = 'Add';

    const todoList = document.createElement('ul');
    todoList.setAttribute('id', 'todo-list');

    todoContainer.appendChild(taskInput);
    todoContainer.appendChild(prioritySelect);
    todoContainer.appendChild(addButton);
    todoContainer.appendChild(todoList);

    contentDiv.appendChild(todoContainer);
    
    // To Do List Logic
    
    
     return contentDiv;
}


export default createAndAppendElements;

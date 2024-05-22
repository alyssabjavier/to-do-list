import { ToDo, completeTask, removeToDo, saveProjectsToLocalStorage } from "./create-tasks-and-projects";

const content = document.querySelector('.content');

function createTaskCard(task) {
    const card = document.createElement('div');
    card.classList.add('task');

    if (task.status === 'complete') {
         card.classList.add('complete');
     }

    const cardMain = document.createElement('div');
    cardMain.classList.add('card-main');
    const title = document.createElement('h3');
    title.textContent = task.title;
    title.addEventListener('click', () => {
        card.classList.toggle('expanded');
    })
    cardMain.appendChild(title);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', (event) => {
        removeToDo(task);
        card.remove();
    })
    cardMain.appendChild(deleteBtn);

    const dueDate = document.createElement('div');
    dueDate.textContent = `due date: ${task.dueDate}`;

    const priorityLevel = document.createElement('div');
    priorityLevel.textContent = `priority level: ${task.priorityLevel}`;
    priorityLevel.classList.add('hidden');
    card.classList.add(`${task.priorityLevel}`);

    const notes = document.createElement('div');
    notes.textContent = `notes: ${task.notes}`;
    notes.classList.add('hidden');

    const statusBtn = document.createElement('div');
    const toggleBtn = document.createElement("input");
    toggleBtn.setAttribute("type", "checkbox");
    statusBtn.appendChild(toggleBtn);
    // event listener to mark task complete
    toggleBtn.addEventListener('click', () => {
        completeTask(task);
        card.classList.add('complete');
        saveProjectsToLocalStorage();
    })

    if (task.status === 'complete') {
        card.classList.add('complete');
        toggleBtn.checked = true;
    }

    const btnLabel = document.createElement('label');
    btnLabel.textContent = 'completed';
    statusBtn.appendChild(btnLabel);


    card.appendChild(cardMain);
    card.appendChild(dueDate);
    card.appendChild(priorityLevel);
    card.appendChild(notes);
    card.appendChild(statusBtn);

    content.appendChild(card);

    return card;
}

export { createTaskCard }
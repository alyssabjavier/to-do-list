

const content = document.querySelector('.content');

// show add project dialog
const projectDialog = document.querySelector('#project-dialog');
const addProjectButton = document.querySelector('#add-project');
addProjectButton.addEventListener('click', () => {
    projectDialog.showModal();
})

// add project dialog submit button
const projectSubmitBtn = document.querySelector('#project-submit-btn');
projectSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const formProjectName = document.querySelector('#project-name').value; // get name entered in form
    const newProject = createProject(formProjectName); // create new project with given name and push into projects object
    console.log(newProject);
    console.log(projects);
    makeProjectButton(formProjectName);
    addProjectOption(formProjectName);
    projectDialog.close();
})

function makeProjectButton(project) {
    const sidebar = document.querySelector('.sidebar');
    const newButton = document.createElement('button');
    newButton.classList.add('project-btn');
    newButton.textContent = `${project}`;
    sidebar.appendChild(newButton);

    newButton.addEventListener('click', () => {
        project = projects[newButton.textContent];
        displayArray(project);
    })
}

function addProjectOption(project) {
    const projectDropdown = document.querySelector('#project-dropdown');
    const projectOption = document.createElement('option');
    projectOption.textContent = `${project}`;
    projectDropdown.appendChild(projectOption); 
}

const itemDialog = document.querySelector('#item-dialog');
const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {
    itemDialog.showModal();
});

const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const formTask = document.querySelector('#task').value;
    const formDueDate = document.querySelector('#due-date').value;
    const formLevel = document.querySelector('#level').value;
    const formNotes = document.querySelector('#notes').value;
    const formProject = document.querySelector('#project-dropdown').value;
    const project = projects[formProject];
    if (project) {
        const newFormToDo = createToDo(formTask, formDueDate, formLevel, formNotes, formProject);
        displayArray(project);
    }
    itemDialog.close();
});


function createTaskCard(task) {
    const card = document.createElement('div');
    card.classList.add('task');

    // task.dataset.index = index;
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
        task.completeTask();
        card.classList.add('complete');
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

function displayArray(project) {
    content.innerHTML='';
    console.log(project);

    project.tasks.forEach((task) => {
        createTaskCard(task)
    });
}

function displayAll(projects) {
    content.innerHTML = '';

    for (const projectName in projects) {
        const project = projects[projectName];
        project.tasks.forEach((task) => {
            createTaskCard(task)
        });
    }
}

class ToDo {
    constructor(title, dueDate, priorityLevel, notes, project) {
        this.title = title;
        this.dueDate = dueDate;
        this.priorityLevel = priorityLevel;
        this.notes = notes;
        this.project = project;
        this.status = '';
    };

    completeTask() {
        this.status = 'complete';
        const projectOfTask = projects[this.project];
        const index = projectOfTask.tasks.indexOf(this);
        const completedTask = projectOfTask.tasks.splice(index, 1)[0];
        projectOfTask.tasks.push(completedTask);
        console.log(projectOfTask);
    };
};

function createToDo(title, dueDate, priorityLevel, notes, projectName) {
    const newToDo = new ToDo(title, dueDate, priorityLevel, notes, projectName);
    const project = projects[projectName];
    if (project) {
        project.tasks.push(newToDo);
    }
    return newToDo;
};

function removeToDo(task) {
    const projectOfTask = projects[task.project];
    const index = projectOfTask.tasks.indexOf(task);
    projectOfTask.tasks.splice(index, 1);
    console.log(projectOfTask);
}

const projects = {};

function createProject(projectName) {
    const newProject = {
        name: projectName,
        tasks: []
    };
    projects[projectName] = newProject; // push new project into projects object
    return newProject;
}

const homeBtn = document.querySelector('#home-btn');
homeBtn.addEventListener('click', () => {
    displayAll(projects);
})

// initializing
createProject('latte');
makeProjectButton('latte');
addProjectOption('latte');

const task1 = createToDo('make matcha', '2024-03-25', 'high', 'please use a proper matcha whisk :)', 'latte');
const task2 = createToDo('add strawberries', '2024-03-25', 'urgent', 'muddle them', 'latte');
const task3 = createToDo('with oat milk please', '2024-03-25', 'normal', 'that will be an extra $0.75', 'latte');
const task4 = createToDo('add BOBA', '2024-03-25', 'high', 'complete another task to add more boba', 'latte');
task4.completeTask();
const task5 = createToDo('enjoy your latte :)', '2024-03-25', 'high', 'thanks!', 'latte');

createProject('this.app');
makeProjectButton('this.app');
addProjectOption('this.app');

const task6 = createToDo('throw cup away', 'soon', 'high', '(add remove task functionality)', 'this.app');
const task7 = createToDo('write down the recipe', 'eventually', 'normal', '(incorporate local storage)', 'this.app');

const defaultProject = createProject('defaultProject');

displayAll(projects);
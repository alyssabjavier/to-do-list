import { createProject } from "./create-tasks-and-projects";
import { projects, createToDo } from "./create-tasks-and-projects";
import { displayArray, displayAll } from "./display-projects";

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

const homeBtn = document.querySelector('#home-btn');
homeBtn.addEventListener('click', () => {
    displayAll(projects);
})

export { projectDialog, addProjectButton, projectSubmitBtn, makeProjectButton, addProjectOption, itemDialog, addBtn, submitBtn, homeBtn }
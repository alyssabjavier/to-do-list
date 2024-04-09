import { createTaskCard } from "./task-card";
import { projects } from "./create-tasks-and-projects";

const content = document.querySelector('.content');

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

export { displayArray, displayAll };
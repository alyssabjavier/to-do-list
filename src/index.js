import './style.css';
import { projectDialog, addProjectButton, projectSubmitBtn, makeProjectButton, addProjectOption, itemDialog, addBtn, submitBtn, homeBtn } from './dialogs-and-buttons';
import { createTaskCard } from './task-card';
import { displayArray, displayAll } from './display-projects';
import { ToDo, completeTask, createToDo, removeToDo, projects, createProject, saveProjectsToLocalStorage, loadProjectsFromLocalStorage } from './create-tasks-and-projects'

loadProjectsFromLocalStorage();

const content = document.querySelector('.content');

// initializing
function initializeApp() {
    if (!localStorage.getItem('projects')) {
        createProject('latte');
        createProject('this.app');

        
        const task1 = createToDo('make matcha', '2024-03-25', 'high', 'please use a proper matcha whisk :)', 'latte');
        const task2 = createToDo('add strawberries', '2024-03-25', 'urgent', 'muddle them', 'latte');
        const task3 = createToDo('with oat milk please', '2024-03-25', 'normal', 'that will be an extra $0.75', 'latte');
        const task4 = createToDo('add BOBA', '2024-03-25', 'high', 'complete another task to add more boba', 'latte');
        completeTask(task4);
        const task5 = createToDo('enjoy your latte :)', '2024-03-25', 'high', 'thanks!', 'latte');
        

        
        const task6 = createToDo('throw cup away', 'soon', 'high', '(add remove task functionality)', 'this.app');
        completeTask(task6);
        const task7 = createToDo('write down the recipe', 'eventually', 'normal', '(incorporate local storage)', 'this.app');
        completeTask(task7);
        
        const defaultProject = createProject('defaultProject');
    } else {
        loadProjectsFromLocalStorage();
    }
    displayAll(projects);
    intializeProjectNames(projects);
    console.log(projects);
}

function intializeProjectNames(projects) {
    for (const projectName in projects) {
        const project = projects[projectName];
        if (project.name != 'defaultProject') {
            makeProjectButton(project.name);
            addProjectOption(project.name);
        }
    }
}

initializeApp();
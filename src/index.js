import './style.css';
import { projectDialog, addProjectButton, projectSubmitBtn, makeProjectButton, addProjectOption, itemDialog, addBtn, submitBtn, homeBtn } from './dialogs-and-buttons';
import { createTaskCard } from './task-card';
import { displayArray, displayAll } from './display-projects';
import { ToDo, createToDo, removeToDo, projects, createProject } from './create-tasks-and-projects'

const content = document.querySelector('.content');

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
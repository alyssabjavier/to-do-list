import {ToDo, createToDo, createProject} from './to-do-module';
import {createTaskCard, displayArray} from './DOM-module';

const content = document.querySelector('.content');

//testing
const defaultProject = createProject();
console.log(defaultProject);

const task1 = createToDo('to-do list project', 'today', 'this weekend', 'medium', 'might be hard', defaultProject);
console.log(task1.title);

task1.complete();
console.log(task1);

const task2 = createToDo('make Dom forms etc.', 'today', 'today hopefully', 'high', 'ugh', defaultProject);

console.log(defaultProject);
displayArray(defaultProject);
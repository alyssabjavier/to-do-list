import './style.css';
import {ToDo, createToDo, createProject} from './to-do-module';
import {createTaskCard, displayArray} from './webpage-module';

const content = document.querySelector('.content');

const dialog = document.querySelector('dialog');

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {
    dialog.showModal();
});


const defaultProject = createProject();

const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const formTask = document.querySelector('#task').value;
    const formAddDate = document.querySelector('#add-date').value;
    const formDueDate = document.querySelector('#due-date').value;
    const formLevel = document.querySelector('#level').value;
    const formNotes = document.querySelector('#notes').value;
    const formProject = document.querySelector('#project').value;
    const newFormToDo = createToDo(formTask, formAddDate, formDueDate, formLevel, formNotes, defaultProject);
    displayArray(defaultProject);
    dialog.close();
});

//testing
const task1 = createToDo('to-do list project', 'today', 'this weekend', 'medium', 'might be hard', defaultProject);
console.log(task1.title);

task1.complete();
console.log(task1);

const task2 = createToDo('make Dom forms etc.', 'today', 'today hopefully', 'high', 'ugh', defaultProject);

console.log(defaultProject);
displayArray(defaultProject);


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

export { ToDo, createToDo, removeToDo, projects, createProject }
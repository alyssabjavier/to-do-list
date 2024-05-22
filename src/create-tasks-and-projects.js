class ToDo {
    constructor(title, dueDate, priorityLevel, notes, project, status) {
        this.title = title;
        this.dueDate = dueDate;
        this.priorityLevel = priorityLevel;
        this.notes = notes;
        this.project = project;
        this.status = status;
    };

    toPlainObject() {
        return {
            title: this.title,
            dueDate: this.dueDate,
            priorityLevel: this.priorityLevel,
            notes: this.notes,
            project: this.project,
            status: this.status
        };
    }

    static fromPlainObject(obj) {
        return new ToDo(
            obj.title,
            obj.dueDate,
            obj.priorityLevel,
            obj.notes,
            obj.project,
            obj.status
        );
    }
};

function completeTask(task) {
    task.status = 'complete';
        // const projectOfTask = projects[this.project];
        // const index = projectOfTask.tasks.indexOf(this);
        // const completedTask = projectOfTask.tasks.splice(index, 1)[0];
        // projectOfTask.tasks.push(completedTask);
    saveProjectsToLocalStorage();
}

function createToDo(title, dueDate, priorityLevel, notes, projectName) {
    const newToDo = new ToDo(title, dueDate, priorityLevel, notes, projectName);
    const project = projects[projectName];
    if (project) {
        project.tasks.push(newToDo);
    }
    saveProjectsToLocalStorage();
    return newToDo;
};

function removeToDo(task) {
    const projectOfTask = projects[task.project];
    const index = projectOfTask.tasks.indexOf(task);
    projectOfTask.tasks.splice(index, 1);
    saveProjectsToLocalStorage();
}

const projects = {};

function createProject(projectName) {
    const newProject = {
        name: projectName,
        tasks: []
    };
    projects[projectName] = newProject; // push new project into projects object
    saveProjectsToLocalStorage();
    return newProject;
}

function saveProjectsToLocalStorage() {
    const projectsPlainObj = {};
    for (const projectName in projects) {
        projectsPlainObj[projectName] = {
            name: projects[projectName].name,
            tasks: projects[projectName].tasks.map(task => task.toPlainObject())
        }
    };
    console.log("Saving to localStorage:", projectsPlainObj);
    localStorage.setItem('projects', JSON.stringify(projectsPlainObj));
    // console.log(localStorage);
    // console.log(projects);
}

function loadProjectsFromLocalStorage() {
    const projectsJSON = localStorage.getItem('projects');
    if (!projectsJSON) return;

    const projectsPlainObj = JSON.parse(projectsJSON);
    for (const projectName in projectsPlainObj) {
        const project = projectsPlainObj[projectName];
        projects[projectName] = {
            name: project.name,
            tasks: project.tasks.map(task => ToDo.fromPlainObject(task))
        };
    }
    // console.log(projects);
}


export { ToDo, completeTask, createToDo, removeToDo, projects, createProject, saveProjectsToLocalStorage, loadProjectsFromLocalStorage }
class ToDo {
    constructor(title, addDate, dueDate, priorityLevel, notes, project) {
        this.title = title;
        this.addDate = addDate;
        this.dueDate = dueDate;
        this.priorityLevel = priorityLevel;
        this.notes = notes;
        this.project = project;
        this.status;
    };

    complete() {
        this.status = 'complete';
    };
};

function createToDo(title, addDate, dueDate, priorityLevel, notes, project) {
    const newToDo = new ToDo(title, addDate, dueDate, priorityLevel, notes, project);
    project.push(newToDo);
    return newToDo;
};

function createProject() {
    return new Array;
}

export {
    ToDo,
    createToDo,
    createProject
  };
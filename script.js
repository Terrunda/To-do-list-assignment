function TaskConstructor() {
    this.TaskName = TaskName;
    this.DueDate = Date.now()
    this.TaskComplete = false;
    this.TaskNote = TaskNote;
    this.EarlyReminder = null;
} 


function ListConstructor() {
    this.ListName = ListName;
    this.TasksInList = [];
}

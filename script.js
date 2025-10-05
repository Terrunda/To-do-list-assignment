function TaskConstructor() {
    this.TaskID = Date.now();
    this.TaskName = TaskName;
    this.DueDate =DueDate;
    this.TaskComplete = false;
    this.TaskNote = TaskNote;
    this.EarlyReminder = null;

TaskConstructor.prototype.ToggleComplete = function() {
    this.TaskComplete = true;
};
} 


function ListConstructor() {
    this.ListName = ListName;
    this.TasksInList = [];

ListConstructor.prototype.FindTask = function(TaskName) {
}

ListConstructor.prototype.DeleteTask = function() {

}

ListConstructor.prototype.addTask = function(taskInstance) {
    this.TasksInList.push(taskInstance)
}
}


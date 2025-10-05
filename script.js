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

TaskConstructor.apply.prototype.AddReminder = function(remainderTime) {
    this.EarlyReminder = reminderTime;
};

TaskConstructor.prototype.UpdateNote = function (newNote) {
  this.TaskNote = newNote;
};

} 


function ListConstructor() {
    this.ListName = ListName;
    this.TasksInList = [];

ListConstructor.prototype.FindTask = function (taskName) {
  return this.TasksInList.find(task => task.TaskName === taskName);
};

ListConstructor.prototype.DeleteTask = function (taskName) {
  this.TasksInList = this.TasksInList.filter(task => task.TaskName !== taskName);
};

ListConstructor.prototype.ListAllTasks = function () {
  return this.TasksInList.map(task => `${task.TaskName} (${task.DueDate})`);
};

ListConstructor.prototype.addTask = function(taskInstance) {
    this.TasksInList.push(taskInstance)
};


}

const sidebar = document.getElementById("list-sidebar");
const listForm = document.getElementById("new-list-form");

const listContainer = document.getElementById("list-container");
const listTitle = document.getElementById("current-list-title");
const taskForm = document.getElementById("task-form");
const taskGrid = document.getElementById("task-grid");
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


const listSidebar = document.getElementById("list-sidebar");
const newlistForm = document.getElementById("new-list-form");
const newListInput = document.getElementById("new-list-input");

const listContainer = document.getElementById("list-container");
const currentlistTitle = document.getElementById("current-list-title");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskGrid = document.getElementById("task-grid");

function selectList(ListName) {

}

function addList(name) {

}

function addTask(taskName) {

}


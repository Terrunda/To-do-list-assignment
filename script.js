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

let allLists = [];
let currentList = null;

function addList(name) {
  const newList = new ListConstructor(name);
  allLists.push(newList);
  currentList = newList;
  displayLists();
  displayCurrentList();
}

function addTask(taskName) {
  if (!currentList) return alert("Please select a list first!");
  const newTask = new TaskConstructor(taskName);
  currentList.addTask(newTask);
  displayTasks();
}

function selectList(listName) {
  currentList = allLists.find(list => list.ListName === listName);
  displayCurrentList();
  displayTasks();
}


newListForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = newListInput.value.trim();
  if (!name) return;
  addList(name);
  newListInput.value = "";
});

taskForm.addEventListener("submit", e => {
  e.preventDefault();
  const taskName = taskInput.value.trim();
  if (!taskName) return;
  addTask(taskName);
  taskInput.value = "";
});
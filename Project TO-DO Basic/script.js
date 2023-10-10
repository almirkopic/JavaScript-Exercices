const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Load tasks from local storage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="checkbox" id="task${index}" ${task.completed ? "checked" : ""}>
      <label for="task${index}">${task.text}</label>
      <button class="edit-button" data-index="${index}">Edit</button>
      <button class="delete-button" data-index="${index}">Delete</button>
    `;
    taskList.appendChild(listItem);

    // Add event listeners for edit and delete buttons
    const editButton = listItem.querySelector(".edit-button");
    const deleteButton = listItem.querySelector(".delete-button");
    editButton.addEventListener("click", editTask);
    deleteButton.addEventListener("click", deleteTask);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;
  const newTask = { text, completed: false };
  tasks.push(newTask);
  taskInput.value = "";
  saveTasks();
  renderTasks();
}

function editTask(event) {
  const index = event.target.getAttribute("data-index");
  const newText = prompt("Edit task:", tasks[index].text);
  if (newText !== null) {
    tasks[index].text = newText.trim();
    saveTasks();
    renderTasks();
  }
}

function deleteTask(event) {
  const index = event.target.getAttribute("data-index");
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add event listeners
addTaskButton.addEventListener("click", addTask);

// Initial rendering
renderTasks();

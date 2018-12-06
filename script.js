// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the DOM elements
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // Function to create a new task item
  function createTask(taskText) {
    // Create a new list item element
    const li = document.createElement("li");
    li.className = "task-item";

    // Create a span to hold the task text
    const span = document.createElement("span");
    span.textContent = taskText;
    
    // Toggle the 'completed' class when the task text is clicked
    span.addEventListener("click", function() {
      span.classList.toggle("completed");
    });

    // Create a delete button for removing the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    // Remove the task item when the delete button is clicked
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(li);
    });

    // Append the task text and delete button to the list item
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(li);
  }

  // Event listener for the Add Task button
  addTaskButton.addEventListener("click", function() {
    // Retrieve and trim the task input value
    const taskText = taskInput.value.trim();
    // Add the task only if the input is not empty
    if (taskText !== "") {
      createTask(taskText);
      // Clear the input field after adding the task
      taskInput.value = "";
    }
  });

  // Allow adding a task by pressing the Enter key in the input field
  taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      addTaskButton.click();
    }
  });
});

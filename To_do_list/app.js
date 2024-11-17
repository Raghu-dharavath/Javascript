// Select elements
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

// Function to add a new task
function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${taskText}
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(listItem);
    // Clear the input
    newTaskInput.value = '';

    // Attach delete event
    const deleteBtn = listItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      listItem.remove();
    });
  } else {
    alert('Please enter a task');
  }
}

// Add event listener to the button
addTaskBtn.addEventListener('click', addTask);

// Allow adding tasks by pressing Enter
newTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

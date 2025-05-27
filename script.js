const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task on button click
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');

    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="remove-btn">Remove</button>
    `;

    // Toggle completed
    li.querySelector('.task-text').addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Remove task
    li.querySelector('.remove-btn').addEventListener('click', () => {
      taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = '';
  }
});

const tasks = [];

function addTask() {
  const titleInput = document.getElementById("task-title");
  const descriptionInput = document.getElementById("task-description");

  const title = titleInput.value;
  const description = descriptionInput.value;

  if (title === "") {
    alert("O título da tarefa não pode estar vazio.");
    return;
  }

  const task = {
    title,
    description,
    status: "A fazer"
  };

  tasks.push(task);

  titleInput.value = "";
  descriptionInput.value = "";

  updateTaskList();
}

function updateTaskList() {
  const taskList = document.getElementById("tasks");
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement("li");
    li.innerHTML = `<strong>${task.title}</strong> - ${task.description} (${task.status}) `;
    li.innerHTML += `<button onclick="updateTaskStatus(${i})">Atualizar Status</button>`;
    li.innerHTML += `<button onclick="deleteTask(${i})">Excluir Tarefa</button>`;
    taskList.appendChild(li);
  }
}

function updateTaskStatus(index) {
  const newStatus = prompt("Novo status da tarefa (A fazer, Em andamento, Concluída):");
  if (newStatus) {
    tasks[index].status = newStatus;
    updateTaskList();
  }
}

function deleteTask(index) {
  const confirmDelete = confirm("Tem certeza de que deseja excluir esta tarefa?");
  if (confirmDelete) {
    tasks.splice(index, 1);
    updateTaskList();
  }
}

updateTaskList();

module.exports = {addTask, updateTaskList, updateTaskStatus, deleteTask, tasks}; 

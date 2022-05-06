// funcao que adiciona tarefa
function addTask() {
  
  // titulo da tarefa
  const taskTitle = document.querySelector('#task-title').value;
  
  if(taskTitle) {
    
    // clona template
    const template = document.querySelector(".template")

    const newTask = template.cloneNode(true);

    // adiciona titulo
    newTask.querySelector(".task-title").textContent = taskTitle;

    // remover as classes desnecessarias
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    // adicionar tarefa na lista
    const list = document.querySelector("#task-list");

    list.appendChild(newTask);

    // adicinar o evento de remover
    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
      removeTask(this);
    });

    // adicionar o evento de completar tarefa
    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
      completeTask(this);
    });


    // limpar texto
    document.querySelector("#task-title").value = "";

  }

}

// funcao de remover tarefa
function removeTask(task) {

  task.parentNode.remove(true)

}

// funcao de completar a tarefa
function completeTask(task) {
  
  const taskToComplet = task.parentNode;

  taskToComplet.classList.toggle("done")

}


// evento de adicionar tarefa
const addbtn = document.querySelector("#add-btn");

addbtn.addEventListener("click", function(e) {

  e.preventDefault();

  addTask();

})
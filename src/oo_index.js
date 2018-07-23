
document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const htmlTaskList = document.querySelector("#list #tasks");

  //event we listen for, the function to handle that event
  newTaskForm.addEventListener("submit", createTask)

  function createTask(e) {
    e.preventDefault();
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.addEventListener("click", deleteTask)

    btn.innerText = "X"
    li.innerText = `${newTaskDescription.value} `

    htmlTaskList.append(li);
    li.append(btn);

    function deleteTask(e){
      li.remove()
    }
    e.target.reset();
  }

  // function deleteTask(e){
  //   console.log(e)
  //   e.path[1].remove()
  // }

});

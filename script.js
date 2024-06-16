const taskForm = document.querySelector("#taskForm");
taskForm?.addEventListener("submit", onTaskFormSubmit);

function onTaskFormSubmit(event) {
    event.preventDefault();

    const taskList = document.querySelector(".tasks");
    const taskInput = taskForm?.querySelector("input");

    if (!taskInput?.value) {
        alert("Completează denumirea");
        return;
    }

    const newItem = document.createElement("li");
    newItem.innerText = taskInput.value;
    newItem.classList.add("task");
    taskList?.append(newItem);

    newItem.addEventListener("click", ()=> {
        newItem.remove();
    });
   
   
   
   
    taskInput.value = '';
}

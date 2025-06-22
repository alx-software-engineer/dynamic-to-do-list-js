document.addEventListener("DOMContentLoaded", function (event) {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) {
            alert("enter a task")
        } else {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");
            removeBtn.onclick = function () {
                
            }

            listItem.appendChild(removeBtn);
            taskList.appendChild(listItem);

        }
    }
})
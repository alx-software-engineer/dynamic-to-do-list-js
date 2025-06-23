document.addEventListener("DOMContentLoaded", function () {
    
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    let currentTask = JSON.parse(localStorage.getItem('tasks') || '[]');
    
    
    
    function renderTasks() {
        taskList.innerHTML = "";
        currentTask.forEach((element, index) => {
            const list = document.createElement("li");
            list.textContent = element.task;
            taskList.appendChild(list);
            deleteTask(list, index)
        });
    }

    renderTasks();

    // Add Task
    function addTask() {
        const taskValue = taskInput.value.trim();

        // Check user input.
        if (taskValue === "") {
            alert("Enter a task")
            return
        } else {
            //Update current task with new task object
            currentTask.push({task : taskValue});
            renderTasks()
            localStorage.setItem("tasks", JSON.stringify(currentTask));
            taskInput.value = "";
        }
    }

    // Delete an item.
    function deleteTask(myList, taskIndex) {
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.classList.add("remove-btn");
        myList.appendChild(deleteBtn);
        
        // Delete event
        deleteBtn.onclick = function () {
            currentTask.splice(taskIndex, 1);
            localStorage.setItem("tasks", JSON.stringify(currentTask));
            renderTasks()
        }
    }
        

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    })
})
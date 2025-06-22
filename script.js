document.addEventListener("DOMContentLoaded", function () {

    // Load stored task.
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        if (storedTasks) {
            storedTasks.forEach(element => {
                const list = document.createElement("li");
                list.textContent = element.task;
                taskList.appendChild(list);
            });
        }
    }

    loadTasks()

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const currentTask = [];

    // Add Task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check user input.
        if (!taskText) {
            alert("Enter a task")
        } else {
            const newTask = {task : taskText}
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");

            // Delete Button
            removeBtn.onclick = function (event) {
                const buttonClicked = event.target;
                const item = buttonClicked.closest("li");
                item.remove();

            // Update local storage after deleting an item.
            const tasks = JSON.stringify(currentTask)
            localStorage.setItem(tasks);

            }

            listItem.appendChild(removeBtn);
            taskList.appendChild(listItem);

            //Update current task
            currentTask.push(newTask);
            taskInput.value = "";

            // Convert to JSON, and save to local storage.
            const tasks = JSON.stringify(currentTask)
            localStorage.setItem(tasks);



        }
    }

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        const keypressed = event.key;
        if (keypressed === "Enter") {
            addTask();
        }
    })

    // This ensures your data fetching logic runs once the HTML document has fully loaded.
    document.addEventListener("DOMContentLoaded", addTask);
})
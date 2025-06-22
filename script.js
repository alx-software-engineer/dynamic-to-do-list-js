document.addEventListener("DOMContentLoaded", function () {

    // Load stored task.
    const previous_tasks = localStorage.getItem('tasks');
    if (previous_tasks) {
        const storedList = JSON.parse(previous_tasks);
        storedList.forEach(element => {
             const list = document.createElement("li");
             list.textContent = element.task;
             taskList.appendChild(list);
        });
    }

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const tasks = [];

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
            }

            listItem.appendChild(removeBtn);
            taskList.appendChild(listItem);
            tasks.push(newTask)


            taskInput.value = "";

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
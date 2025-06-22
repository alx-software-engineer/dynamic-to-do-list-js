document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Add Task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check user input.
        if (!taskText) {
            alert("Enter a task")
        } else {
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
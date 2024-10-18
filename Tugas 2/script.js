let taskList = [];//Empty array to hold the tasklist

/*
Get task from input with id new-task.
Append the task to taskList array using .push.
Check if the new-task is empty or not.
*/
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        taskList.push(taskText);
        taskInput.value = '';
        renderTaskList();
    } else {
        alert("Please enter a task.");
    }
}


/*
Edit the existing task, select the task using the array index.
*/
function editTask(index) {
    const newTask = prompt("Edit Task:", taskList[index]);

    if (newTask !== null && newTask.trim() !== "") {
        taskList[index] = newTask.trim();
        renderTaskList();
    }
}
/*
Delete task using .splice.
Delete using the array index
*/
function deleteTask(index) {
    taskList.splice(index, 1);
    renderTaskList();
}

/*
Render the task list. Called every time there is any change on the task list
*/
function renderTaskList() {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${task}
            <span class="edit-btn" onclick="editTask(${index})">Edit</span>
            <span class="delete-btn" onclick="deleteTask(${index})">Delete</span>
        `;
        taskListElement.appendChild(taskItem);
    });
}

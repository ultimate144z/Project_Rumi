document.addEventListener('DOMContentLoaded', function() {
    function addTask() {
        const newTaskInput = document.getElementById('new-task');
        const tasksList = document.getElementById('task-list');
        const task = newTaskInput.value.trim();

        if (task) {
            const li = document.createElement('li');
            li.textContent = task;
            tasksList.appendChild(li);
            newTaskInput.value = '';
        }
    }

    window.addTask = addTask; // Make addTask accessible globally for the onclick attribute
});

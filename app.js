function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim(); // Eliminamos espacios innecesarios

    if (taskText === "") {
        alert("La tarea no puede estar vacía.");
        input.focus();
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    input.focus(); // Mantiene el foco en el input
}

function showTasks() {
    const list = document.getElementById("taskList");
    const items = list.getElementsByTagName("li");

    if (items.length === 0) {
        alert("No hay tareas registradas.");
        return;
    }

    let message = "Tareas registradas:\n";
    for (let i = 0; i < items.length; i++) {
        message += "- " + items[i].textContent + "\n";
    }

    alert(message);
}

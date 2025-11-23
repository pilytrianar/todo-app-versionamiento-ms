function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim(); // quitamos espacios al inicio y al final

    // No permitir agregar tareas vacías
    if (taskText === "") {
        alert("Por favor escribe una tarea antes de agregar.");
        input.focus();
        return;
    }

    // Crear un nuevo elemento de lista
    const li = document.createElement("li");
    li.textContent = taskText;

    // Agregar el elemento a la lista de tareas
    document.getElementById("taskList").appendChild(li);

    // Limpiar el campo de texto y devolver el foco
    input.value = "";
    input.focus();
}

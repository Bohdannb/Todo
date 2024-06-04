const button = document.querySelector (".container-input button");
const list = document.querySelector (".todo-list");
const input = document.querySelector (".container-input input");

button.addEventListener("click", () => {
    const li = document.createElement("li");
    list.appendChild(li);
    li.innerText = input.value;
    li.className = "todo-list-item";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    li.appendChild(deleteBtn);
    input.value = "";

    deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
    });

});


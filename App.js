const text = document.querySelector("#txt");
const textBox = document.querySelector(".list");

text.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        listTodo(this.value);
        this.value = "";
    }
})

const listTodo = (c) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${c} <i class="fa-solid fa-xmark"></i>`;
    listItem.querySelector("i").addEventListener("click", () => {
        listItem.remove();
    })
    textBox.appendChild(listItem);
}


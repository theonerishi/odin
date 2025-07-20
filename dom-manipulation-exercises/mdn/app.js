const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.focus();
})
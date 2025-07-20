let question = document.createElement("p");
document.body.appendChild(question);
question.innerText = "How many squares would you like?";
let input = document.createElement("input");
document.body.appendChild(input);
let button = document.createElement("button");
document.body.appendChild(button);
button.innerText = "Submit";
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        button.click();
    }
})
button.addEventListener('click', () => {
    let width = Number(Math.floor(Math.sqrt(input.value)));
    for (let i = 0; i < width; i++) {
    let div = document.createElement("div");
    for (let j = 0; j < width; j++) {
        let div2 = document.createElement("div");
        div.appendChild(div2);
        div2.style.width = "50px";
        div2.style.height = "50px";            
        let counter = 0;
        div2.style.backgroundColor = "white";
        div2.addEventListener('mouseover', () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            div2.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
        div2.addEventListener('mouseout', () => {
            counter += 1;
            div2.style.backgroundColor = `rgb(${counter * 10}, ${counter * 10}, ${counter * 10})`;
        })
    }
    document.body.appendChild(div);
    div.style.display = "flex";
    }
})


let question = document.createElement("p");
document.body.appendChild(question);
question.innerText = "How many squares would you like?"; // question
let input = document.createElement("input");
document.body.appendChild(input); // input field
let button = document.createElement("button");
document.body.appendChild(button);
button.innerText = "Submit"; /// submit button
input.addEventListener('keydown', (event) => { // if enter pressed then make the button click
    if (event.key === 'Enter') {
        button.click();
    }
})
button.addEventListener('click', () => {
    let width = Number(Math.floor(Math.sqrt(input.value))); // finds width of canvas
    for (let i = 0; i < width; i++) {
    let div = document.createElement("div");
    for (let j = 0; j < width; j++) {
        let div2 = document.createElement("div");
        div.appendChild(div2);
        div2.style.width = "50px";
        div2.style.height = "50px"; // uses two loops to generate a square
        let counter = 0;
        div2.style.backgroundColor = "white";
        div2.addEventListener('mouseover', () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            div2.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // random color on mouseover
        })
        div2.addEventListener('mouseout', () => {
            counter += 1;
            let rgbvalue = 255 - counter * 10
            div2.style.backgroundColor = `rgb(${rgbvalue}, ${rgbvalue}, ${rgbvalue})`; // progressive darkening on mouseout
        })
    }
    document.body.appendChild(div);
    div.style.display = "flex"; // display: flex to make sure all the divs are on one line
    }
})


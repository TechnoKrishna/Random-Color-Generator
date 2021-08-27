let letters = "0123456789ABCDEF";
const body = document.querySelector("body");
const colorelement = document.querySelector("#color");

// setInterval(() => {
//     getColor();
// }, 1000);

function getColor(){
    let color = '#';
    for(let i = 0 ; i < 6 ; i++)
    {
        color += letters[Math.floor(Math.random() * letters.length)];
        console.log(color);
    }
    body.style.backgroundColor = color;
    colorelement.innerHTML = color;
}
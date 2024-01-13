document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("input");
    let buttons = document.querySelectorAll("button");
    let string = "";
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.innerHTML;
            if (buttonText === "=") {
            string = eval(string);
            } else if (buttonText === "AC") {
            string = "";
            } else if (buttonText === "DEL") {
            string = string.slice(0, -1);
            } else {
            string += buttonText;
            }
            input.value = string;
        });
    });
});
/*let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener("click", (e) =>{
        if (e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == "AC"){
        string = "";
        input.value = string;
        }
        else if (e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})*/
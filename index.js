"use strict";
let str = "";
let buttons = document.querySelectorAll(".btn");
const inputElement = document.querySelector("input");
Array.from(buttons).forEach((btns) => {
    btns.addEventListener("click", (e) => {
        const target = e.target;
        try {
            if (target.innerHTML === "=") {
                str = eval(str);
                inputElement.value = str;
            }
            else if (target.innerHTML === "C") {
                str = "";
                inputElement.value = str;
            }
            else if (target.innerHTML === "del") {
                str = str.slice(0, -1);
                inputElement.value = str;
            }
            else if (target.innerHTML === "√") {
                str = Math.sqrt(parseFloat(inputElement.value) || 0).toString();
                inputElement.value = str;
            }
            else {
                console.log(target);
                str = str + target.innerHTML;
                inputElement.value = str;
            }
        }
        catch (error) {
            console.error(error.message);
            inputElement.value = "Error";
        }
    });
});

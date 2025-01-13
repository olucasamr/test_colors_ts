import ChangeBackgroungColor from "./components_ts/AlterColor.js";
let inputValue = '';
const inputElement = document.querySelector(".Input-Color");
const submitButton = document.querySelector(".Button-submit");
const backgroundForColor = document.querySelector(".Back-ground");
submitButton.addEventListener("click", () => {
    if (inputElement !== null) {
        inputValue = inputElement.value;
        ChangeBackgroungColor(inputValue, backgroundForColor);
    }
    else {
        console.log(`O valor, ${inputValue}, está errado`);
    }
});

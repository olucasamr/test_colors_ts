
import ChangeBackgroungColor from "./components_ts/AlterColor.js";

let inputValue: string = '';
const inputElement: HTMLInputElement | null = document.querySelector(".Input-Color");

const submitButton = document.querySelector(".Button-submit") as HTMLElement;
const backgroundForColor = document.querySelector(".Back-ground") as HTMLElement;

submitButton.addEventListener("click", () => {

    if(inputElement !== null) {
        inputValue = inputElement.value;
        ChangeBackgroungColor(inputValue, backgroundForColor);
    }
    else {
        console.log(`O valor, ${inputValue}, está errado`);
    }

});
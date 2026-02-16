import "./menu.css";
import {generateHome} from "../home/home.js";

function generateMenu(){

    const content = document.querySelector("#content");
    content.replaceChildren();

    const menuCard = document.createElement('div');
    menuCard.classList.add("menu");

    const item1 = document.createElement('div');
    item1.classList.add("item");

    content.append(menuCard);

}
document.querySelector("#home").addEventListener('click', generateHome);
export { generateMenu };
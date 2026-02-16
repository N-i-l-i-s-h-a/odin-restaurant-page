import "./menu.css";
import padthai from "../assets/images/menu1.png";
import pancakes from "../assets/images/menu2.png";
import beverage from "../assets/images/icon.png";
import {generateHome} from "../home/home.js";

function generateMenu(){

    const content = document.querySelector("#content");
    content.replaceChildren();

    const innerContent = document.createElement('div');
    innerContent.setAttribute('id', "inner-content");
    content.append(innerContent);

    const menuCard = document.createElement('div');
    menuCard.classList.add("menu");

    const item1 = document.createElement('div');
    const img1 = document.createElement('img');
    img1.src = padthai;
    item1.classList.add("item");
    item1.append(img1);

    const item2 = document.createElement('div');
    const img2 = document.createElement('img');
    img2.src = pancakes;
    item2.classList.add("item");
    item2.append(img2);

    const item3 = document.createElement('div');
    const img3 = document.createElement('img');
    img3.src = beverage;
    item3.classList.add("item");
    item3.append(img3);

    menuCard.append(item1);
    menuCard.append(item2);
    menuCard.append(item3);

    innerContent.append(menuCard);

}
document.querySelector("#home").addEventListener('click', generateHome);
export { generateMenu };
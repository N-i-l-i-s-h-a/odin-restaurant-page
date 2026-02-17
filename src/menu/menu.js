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

    const img1 = document.createElement('img');
    img1.src = padthai;
    menuCard.append(img1);

    const food1 = document.createElement('p');
    food1.textContent = `Lorem ipsum`;
    const price1 = document.createElement('p');
    price1.textContent = `₹1000`;

    const item1 = document.createElement('div');
    item1.classList.add("menu-item");
    item1.append(food1);
    item1.append(price1);

    menuCard.append(item1);

    const img2 = document.createElement('img');
    img2.src = pancakes;
    menuCard.append(img2);

    const food2 = document.createElement('p');
    food2.textContent = `Lorem ipsum`;
    const price2 = document.createElement('p');
    price2.textContent = `₹1000`;

    const item2 = document.createElement('div');
    item2.classList.add("menu-item");
    item2.append(food2);
    item2.append(price2);

    menuCard.append(item2);

    const img3 = document.createElement('img');
    img3.src = beverage;
    menuCard.append(img3);

    const food3 = document.createElement('p');
    food3.textContent = `Lorem ipsum`;
    const price3 = document.createElement('p');
    price3.textContent = `₹1000`;

    const item3 = document.createElement('div');
    item3.classList.add("menu-item");
    item3.append(food3);
    item3.append(price3);

    menuCard.append(item3);

    innerContent.append(menuCard);

}
document.querySelector("#home").addEventListener('click', generateHome);
export { generateMenu };
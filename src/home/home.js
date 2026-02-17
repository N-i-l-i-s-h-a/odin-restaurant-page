import "./home.css";
import {generateMenu} from "../menu/menu.js";
import {generateAbout} from "../about/about.js";

import bgImg from "../assets/images/bg.png";

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("about");

function generateHome(){

    content.replaceChildren();

    const homeContent = document.createElement('div');
    homeContent.classList.add("home-content");

    const heading = document.createElement('h1');
    heading.textContent = "Good Food Only";

    const description = document.createElement('div');
    description.classList.add("lorem");
    description.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Voluptatibus sed vero qui sapiente iste quae, maxime ipsa sint ullam! 
    Recusandae, iusto harum? Reiciendis obcaecati voluptas corrupti eum amet nemo deleniti.`

    homeContent.append(heading);
    homeContent.append(description);

    const bgimgContainer = document.createElement('div');
    bgimgContainer.classList.add("bg-img");

    const bgimg = document.createElement('img');
    bgimg.src = bgImg;
    bgimg.classList.add("bg");

    bgimgContainer.append(bgimg);

    content.append(homeContent);
    content.append(bgimgContainer);
};

menu.addEventListener('click', generateMenu);

export {generateHome};
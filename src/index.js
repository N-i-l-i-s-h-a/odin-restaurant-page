import "./styles.css";
import {generateHome} from "./home/home.js";
import {generateMenu} from "./menu/menu.js";
import {generateAbout} from "./about/about.js";

generateHome();
menu.addEventListener('click', generateMenu);
about.addEventListener('click', generateAbout);
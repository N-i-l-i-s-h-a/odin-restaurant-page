import "./about.css";
import bg from "../assets/images/aboutbg.png";

function generateAbout(){
    const content = document.querySelector("#content");
    content.replaceChildren();

    const abBg = document.createElement('img');
    abBg.src = bg;
    abBg.classList.add("bg-about");

    const abDiv = document.createElement('div');
    abDiv.append(abBg);

    content.append(abDiv);
}

export{generateAbout};
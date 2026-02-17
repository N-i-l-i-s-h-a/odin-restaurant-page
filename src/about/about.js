import "./about.css";
import bg from "../assets/images/aboutbg.png";

function generateAbout(){
    const content = document.querySelector("#content");
    content.replaceChildren();

    const abBg = document.createElement('img');
    abBg.src = bg;
    abBg.classList.add("bg-about");

    const para = document.createElement('div');
    para.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Voluptatibus sed vero qui sapiente iste quae, maxime ipsa sint ullam! 
    Recusandae, iusto harum? Reiciendis obcaecati voluptas corrupti eum amet nemo deleniti.
    Lorem ipsum dolor sit amet consectetur adipisicing elit.1`;
    para.classList.add("text");

    const abDiv = document.createElement('div');
    abDiv.classList.add("about");
    abDiv.append(abBg);
    abDiv.append(para);

    content.append(abDiv);
}

export{generateAbout};
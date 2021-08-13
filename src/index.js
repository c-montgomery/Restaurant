import { makeHeader } from "./makeHeading";
import "./style.css";
import pic from './chef.jpeg'

//Constructs landing page on initial visit
function makeLanding() {
    const element = document.createElement('div');
    const leftSide = document.createElement('div');
    const heading = document.getElementById('content');


    element.classList.add('hello');
    element.style.display = 'flex';
    element.style.flexDirection = 'row';

    leftSide.style.backgroundColor = 'black';
    leftSide.style.color = 'darkgrey';
    leftSide.textContent = 'It\'ll leave you saying, \"Badabucci\!\"'
    leftSide.style.textAlign = 'center'
    leftSide.style.width = '70%';
    leftSide.classList.add('leftSide');

    const myPic = new Image();
    myPic.src = pic;
    myPic.style.height = '100%'
    myPic.textContent = 'BADABUCCI!'

    console.log(element)
    console.log(heading)

    element.appendChild(leftSide)
    element.appendChild(myPic);
    heading.appendChild(element)

    return element;
  }
 

makeHeader();
makeLanding();
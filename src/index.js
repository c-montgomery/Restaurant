import { makeHeader } from "./makeHeading";
import "./style.css";
import pic from './chef.jpeg'

function component() {
    const element = document.createElement('div');
    const leftSide = document.createElement('div')

    // Lodash, now imported by this script
    element.classList.add('hello');
    element.style.display = 'flex';
    element.style.flexDirection = 'row';

    leftSide.style.backgroundColor = 'black';
    leftSide.style.color = 'darkgrey';
    leftSide.textContent = 'It\'ll leave you saying, \"Badabucci\!\"'
    leftSide.style.textAlign = 'center'
    leftSide.style.padding = '10px';
    leftSide.style.width = '70%';
    leftSide.style.lineHeight = '30';
    leftSide.classList.add('leftSide');
    const myPic = new Image();
    myPic.src = pic;
    myPic.textContent = 'BADABUCCI!'
    element.appendChild(leftSide)
    element.appendChild(myPic);


    return element;
  }
 
document.body.appendChild(component());


makeHeader()
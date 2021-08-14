import { makeHeader } from "./makeHeading";
import "./style.css";
import pic from './chef.jpeg'
import picTwoCooks from './cooks.jpg'

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
    leftSide.classList.add('leftSide');

    const twoCooks = new Image();
    twoCooks.src =picTwoCooks;
    twoCooks.classList = 'twoCooks'
    const myPic = new Image();
    myPic.src = pic;
    myPic.style.height = '100%'
    myPic.textContent = 'BADABUCCI!'


    element.appendChild(leftSide);
    leftSide.appendChild(twoCooks);
    element.appendChild(myPic);
    heading.appendChild(element)

    return element;
  }
 

makeHeader();
makeLanding();
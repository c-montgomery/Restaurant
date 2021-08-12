import pic1 from './kiwi.jpg'
import pic2 from './fries.jpg'

//removes current page elements and replaces with menu elements
function gotoMenu(){
    let content = document.querySelector('.hello');
    content.remove();
    let heading = document.getElementById('content');
    let menu = document.createElement('div');
    menu.style.display = 'grid';
    menu.style.gridTemplateColumns = '1fr 1fr';

    let picture1 = document.createElement('div');
    let picture2 = document.createElement('div');
    
    
    let text1 = document.createElement('div');
    text1.textContent = 'food one here'
    let text2 = document.createElement('div')
    text2.textContent = 'food2'
    const myPic = new Image();
    const myPic2 = new Image();
    myPic.src = pic1;
    myPic2.src = pic2;
    menu.appendChild(myPic);
    menu.appendChild(myPic2);
    menu.appendChild(text1);
    menu.appendChild(text2)



    heading.appendChild(menu);
}
export {gotoMenu}
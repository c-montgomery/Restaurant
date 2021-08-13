
import {clearChildren} from "./clearChildren"
import pic from "./geno.jpg"

function gotoAbout() {
    
    clearChildren();
    
    let body = document.querySelector('body');
    let chefPic = new Image();
    chefPic.src = pic
    chefPic.classList = 'chefPic';
    let heading = document.getElementById('content');
    let about = document.createElement('p')
    about.classList = 'paragraph'
    about.textContent = 'Badabucci\'s was created in 2005 when Geno Badabucci decided to '+
    'share his family\'s cooking traditions with the world.  ' +
    'Geno\'s cooking passion is now available to enjoy '+
    '7 days a week. Stop in, say, \'hi\'';
    
    body.appendChild(heading);
    heading.appendChild(chefPic);
    heading.appendChild(about);

}

export {gotoAbout}
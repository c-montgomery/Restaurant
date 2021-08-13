
import {clearChildren} from "./clearChildren"


function gotoAbout() {
    
    clearChildren();
    let body = document.querySelector('body');
    
    let heading = document.getElementById('content');
    let about = document.createElement('p')
    about.classList = 'paragraph'
    about.textContent = 'Badabucci\'s was created in 2005 when Geno Badabucci decided to '+
    'start a restaurant to share his family\'s cooking traditions with the world.  ' +
    'Badabucci\'s hopes to share the spirit and love of Badabucci family with'+
    'anyone that stops in.'
    body.appendChild(heading)
    heading.appendChild(about)

}

export {gotoAbout}
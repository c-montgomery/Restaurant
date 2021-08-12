function gotoMenu(){
    let content = document.querySelector('.hello');
    console.log('this is content variable: ' + content)
    content.remove();
    let heading = document.getElementById('content');
    console.log('this is heading variable: ' + heading)
    let menu = document.createElement('p');

    console.log('this is menu variable: ' + menu)
    menu.textContent = 'SHTISDFKJASDKFJ'
    heading.appendChild(menu);
}
export {gotoMenu}
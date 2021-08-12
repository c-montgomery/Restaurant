// Makes header to be constructed on every page
const makeHeader = () => {
    let content = document.getElementById('content')
    let heading = document.createElement('heading')
    let nav = document.createElement('nav')
    let menu = document.createElement('div')
    let contact = document.createElement('div')
    let about = document.createElement('div')

    content.style.textAlign = 'center';
    content.style.backgroundColor = 'lightgrey'
    content.style.fontFamily = ''

    heading.style.fontSize = '40px'

    nav.style.justifyContent = 'space-around';
    nav.style.display = 'flex'
    nav.style.flexDirection = 'row'
    nav.style.fontSize = '20px'


    heading.textContent = 'Badabucci\'s'
    menu.textContent = 'Menu'
    contact.textContent = 'Contact'
    about.textContent = 'About'

    content.appendChild(heading)
    heading.appendChild(nav)
    nav.appendChild(contact)
    nav.appendChild(menu)
    nav.appendChild(about)
}

export {makeHeader}
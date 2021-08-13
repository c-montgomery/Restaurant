import {clearChildren} from './clearChildren'

function gotoContact(){
    clearChildren()
    let body = document.querySelector('body');

    let heading = document.getElementById('content')
    let address = document.createElement('address');
    address.classList = 'address';

    let street = document.createElement('p')
    street.textContent = '2349 Marnee Ave'
    let city = document.createElement('p')
    city.textContent = 'Phoenix, AZ 85009'
    body.appendChild(heading);
    heading.appendChild(address);
    address.appendChild(street)
    address.appendChild(city)

}

export { gotoContact }
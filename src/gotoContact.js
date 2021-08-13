import {clearChildren} from './clearChildren';


function gotoContact(){
    clearChildren()
    let body = document.querySelector('body');
    let heading = document.getElementById('content')
    let address = document.createElement('address');
    address.style.backgroundColor = 'black';
    address.classList = 'address';
    address.style.display = 'flex';

    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.831394459144!2d-112.03241824967806!3d33.505763553683465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0d6e312dc4d7%3A0xf13538f7bf1e1db5!2sHampton%20Inn%20Phoenix-Biltmore!5e0!3m2!1sen!2sus!4v1628866852303!5m2!1sen!2sus")
    iframe.style.marginTop = '20px';
    iframe.style.height = '500px';
    iframe.style.width = '500px';
    iframe.style.border = 'none';
    iframe.style.margin = '10px';

    let flexAddress = document.createElement('div');
    flexAddress.style.display = 'flex';
    flexAddress.style.flexDirection = 'column';
    flexAddress.style.alignItems = 'center';
    flexAddress.style.justifyContent = 'center';
    flexAddress.style.flex = '1';

    let name = document.createElement('p');
    name.textContent = 'Badabucci\'s';
    name.style.color = 'white';
    name.style.fontSize = '1.5rem';

    let street = document.createElement('p');
    street.textContent = '2310 E Highland Ave';
    street.style.color = 'white';

    let city = document.createElement('p');
    city.textContent = 'Phoenix, AZ 85016';
    city.style.color = 'white';

    let subheading = document.createElement('h3');
    subheading.textContent = 'Contact us!';
    subheading.style.color = 'white';
    subheading.style.marginTop = '10px';

    let email = document.createElement('a');
    email.setAttribute('href', 'mailto:fakeperson@fakeaddress.com');
    email.textContent = 'email';
    email.style.color = 'white';

    let phone = document.createElement('a');
    phone.setAttribute('href', 'tel:123-456-7890');
    phone.textContent = '123-456-7890';
    phone.style.color = 'white';
    phone.style.marginBottom = '5px';


    body.appendChild(heading);
    heading.appendChild(address);
    address.appendChild(iframe);
    address.appendChild(flexAddress);
    flexAddress.appendChild(name);
    flexAddress.appendChild(street);
    flexAddress.appendChild(city);
    flexAddress.appendChild(subheading);
    flexAddress.appendChild(phone);
    flexAddress.appendChild(email);

}

export { gotoContact }
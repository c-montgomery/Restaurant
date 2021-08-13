function clearChildren(){
    let deleted = document.getElementsByClassName('hello');
    let menu = document.getElementsByClassName('menu');
    let para = document.getElementsByClassName('paragraph');
    let address = document.getElementsByClassName('address');
    if (typeof deleted[0] !== 'undefined'){
        deleted[0].remove();
    }
    if (typeof menu[0] !== 'undefined'){
        menu[0].remove();
    }
    if (typeof para[0] !== 'undefined'){
        para[0].remove();
    }
    if (typeof address[0] !== 'undefined'){
        address[0].remove();
    }
}

export {clearChildren}
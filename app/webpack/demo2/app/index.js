// const moment = require('moment');

import './style.css'
import './style2.css'

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'Hello webpack'
    return element;
}

// console.log(moment().format());

document.body.appendChild(component());
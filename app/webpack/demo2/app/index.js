const moment = require('moment');

import './style.css'
import './style2.css'

require('./a');
require.ensure([], function (require) {
    require('./b');
});
//webpack splits code using require.ensure()

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'Hello webpack3'
    return element;
}

console.log(moment().format());

document.body.appendChild(component());
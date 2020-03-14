const {add,mul} = require('./js/mathUtils.js');
require('./css/normal.css');
require('./css/special.less')
console.log(add(3,4))
console.log(mul(3,4))

import {name,age,height} from './js/info.js';
console.log(name,age,height)

document.writeln('<h3>您好，有什么能帮到您</h3>')
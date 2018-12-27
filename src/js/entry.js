import hello from './hello';
import world from './world';
import * as circle from './circle';

document.getElementById('demo').innerHTML = `${hello}, ${world}!`;

console.log(circle.area(4));
console.log(circle.circumference(4));


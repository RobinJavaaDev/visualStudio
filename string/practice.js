// string/practice.js

let str1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, animi ducimus aspernatur praesentium voluptate alias quae. Quasi itaque harum iure earum voluptates, consectetur similique illum modi. Iste at necessitatibus eius.';
// 단어의 길이가 10개 이상인 값을 골라내서
// xxxxxxx, xxxxxxxxx,
console.log('hello'.length);

result = str1.split(' ').filter(val=>val.length >= 10).join(',');
console.log(result);
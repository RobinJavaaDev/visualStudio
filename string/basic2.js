// string/basic2.js

// indexOf(), lastIndexOf() : 찾을 문자열의 위치 인덱스 반환. 없으면 -1 반환
let result = '안녕하세요 엄준식입니다, 동탄의 엄준식입니다.'.indexOf('엄준식');
result = '안녕하세요 엄준식입니다, 동탄의 엄준식입니다.'.lastIndexOf('엄준식');

result = '안녕하세요 엄준식입니다,대구의 엄준식,붓산의 엄준식, 동탄의 엄준식입니다.'.indexOf('엄준식', 15);
let str1 = '안녕하세요 엄준식입니다,대구의 엄준식,붓산의 엄준식, 동탄의 엄준식입니다.'
let position = str1.indexOf('붓산');
result = str1.indexOf('엄준식', position);
console.log(result);

// charAt(인덱스) : 인덱스 위치의 문자 반환.
let str2 = str1.charAt(result);

console.log(str2);

// toLoewrCase(), toUpperCase() : 문자변경
let str3 = 'Lorem ipsum Dolor sit amet consectetur dolor';
console.log(str3.toUpperCase().toLowerCase());
// includes('찾을 문자열') : true / false
result = str3.includes('dolors');
console.log(result);

// search('찾을 문자열') 추가기능 : search(정규표현식); 찾을 문자열의 인덱스 반환.
// 정규표현식 오브젝트 / / (new (RepExp())),배열 [](new Array(1,2)),
result = str3.search('dolor');
result - str3.search(/dolor/i);
console.log(result);

// match('찾을 문자열') : 문자열 or null 반환.
let str4 ='bad MORNING, goodmorning, GOOD AFTERNOON, good evening, and good night';
result = str4.match('good');
result = str4.match(/good\s\w+/gi); // s : 공백. w : 문자하나. + :1개 이상 있으면 다 가져옴
console.log(result);

//replace('찾을 문자열', 바꿀 문자열);
result = str4.replace('good', 'better');
result = str4.replace(/good/gi, 'better');
result = str4.replace(/\W/ig, '-'); // W : 문자 이외. d : 숫자. D: 숫자 이외
result = 'morning1 morning2 morning123'.replace(/\D/g, '');

let sso=['970101-1234657', '970101 1234657','9701011234657','970101/1234657'];
sso.forEach(num =>console.log(num.replace(/\D/g, '')));
console.log(result);

// 문자열 합치기: + , concat()
console.log('hello' + 'world');
console.log('hello'.concat  ('world'));
console.log('hello'.concat  ('world', '!!', 'welcome'));


// array/basic.js

// 배열선언 :[], new Array();

let arr = [1,2];
let newAry = [3,4,5,6];

// 추가: push: 마지막 위치에 추가, unshift: 첫번째 위치에 추가

arr.push(3);
arr.unshift(0);


//제거 : pop(): , shift

arr.pop();
arr.shift();

// 새로운 배열 forEach
newAry.forEach(function (elem){
 // arr.push(elem); // 1 2 3 4 5 6
  arr.unshift(elem); //6 5 4 3 2 1
});
arr.pop(); // 6 5 4 3 2
arr.pop(); // 6 5 4 3
arr.shift(); // 5 4 3

// splice():추가 ,수정, 삭제
arr.splice(1,2);
  newAry.forEach(function(elem){
  arr.splice(1,1, elem); // // 5 6 5 4 3 4
                        // 5 ,6 ,3
  });

  let names = [];
  let anonym = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit consequuntur neque, iure deserunt velit libero facere cum quo eaque ducimus beatae distinctio veniam omnis obcaecati possimus pariatur dolorum sed!'
  anonym.split(' ').forEach(function (elem){
    names.push(elem);
  });
    
console.log(names.toString());


// forEach () : 반환 x
// map (): 각요소 -> mapping 작업
// filter(): return 조건을 만족하는 값만 변환.
let result = names.map(function(elem){
  return elem.toUpperCase();
});


result= result.filter(function(elem){
  return elem.length >= 10;
})
result = names//
.map(elem => elem.toUpperCase())//
.filter(elem => elem.length >= 10); // chain rules
console.log(result);



//dom/pratice2.js

document.addEventListener('DOMContentLoaded', function(){

  
  let div1 = document.createElement('div')
  let span1 = document.createElement('span')
  span1.setAttribute('id', 'name');
  //span1.innerHTML = '홍길동'; = <span>홍길동</span>
  let name = document.createTextNode('홍길동');
  span1.appendChild(name); //<span>홍길동</span>

  let span2 = document.createElement('span')
  span2.setAttribute('class','age'); // attribute 노드 추가
  //span2.innerHTML = '20살' = <span>20살</span>
  let age = document.createTextNode('20살');
  span2.appendChild(age); // <span>20살</span>

  let hypen = document.createTextNode(' - '); 
  div1.appendChild(span1);
  div1.appendChild(hypen);
  div1.appendChild(span2);

  let divShow = document.getElementById('show').appendChild(div1);
  
})
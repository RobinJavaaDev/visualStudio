//dom/pratice3.js

let data = [{
  id: 101,
  name: '홍길동',
  age: 20
}, {
  id: 102,
  name: '엄준식',
  age: 22
}, {
  id: 103,
  name: '엄준삭',
  age: 26
}];

document.addEventListener('DOMContentLoaded', callbackFnc);

function callbackFnc() {
  console.log(window);

  //변수 선언
  let table, thead, tbody, th, tr, td, text;
  // 테이블 생성
  table = document.createElement('table');
  table.setAttribute('border', 1);


  // thead 하위요소 작성 후 table의 하위요소로 추가
  thead = makeHead();
  table.appendChild(thead);
  tbody = makeBody(data); //[{},{},{},{}....]
  table.appendChild(tbody);

  //show 요소의 하위 table
  document.getElementById('show').appendChild(table);

  // 추가 버튼 이벤트.
  let btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    let obj = {}
    let userName = document.getElementById('userName').value;
    obj.name = userName;
    let userAge = document.getElementById('userAge').value;
    obj.age = userAge;
    obj.id = 110;

    document.querySelector('table>tbody').appendChild(makeTr(obj));
  })
  // 샘플 정보.... {김민수,25,}
  //let newObj = {id: 105, name: '김민수', age: 25}
  //document.querySelector('table>tbody').appendChild(makeTr(newObj));

}

function makeHead() {
  // 헤드생성
  let thead = document.createElement('thead');

  let tr = document.createElement('tr');
  let th = document.createElement('th');
  let text = document.createTextNode('이름')
  tr.appendChild(th)
  th.appendChild(text)


  th = document.createElement('th');
  text = document.createTextNode('나이');
  tr.appendChild(th)
  th.appendChild(text)

  th = document.createElement('th');
  text = document.createTextNode('기능');
  tr.appendChild(th)
  th.appendChild(text)

  thead.appendChild(tr);
  return thead;
}

function makeTr(obj) {

  let fields = ['name', 'age'];

  //첫번째라인
  let tr = document.createElement('tr');
  //id 추가
  tr.setAttribute('id', obj.id);
  //name, age 필드 갯수만큼 td 생성하기
  fields.forEach(function (field) {
    let td = document.createElement('td');
    let text = document.createTextNode(obj[field] + `${field=="age"?"살":""}`);
    td.appendChild(text);
    tr.appendChild(td);
  });
  let btn = document.createElement('button'); //<button>삭제</button>
  btn.innerHTML = '삭제';
  btn.addEventListener('click',deleteCallBack);
  let td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}

function deleteCallBack() {
//evnt.target.parentElement.parentElement.remove();
console.log(this);
this.parentElement.parentElement.remove();
}

function makeBody(objAry) {
  // [{name,age},{},{},{},{}......]
  // 바디생성

  let tbody = document.createElement('tbody')

  objAry.forEach(function (obj) {
    //obj => {name: '', age: }
    tbody.appendChild(makeTr(obj));

  });

  return tbody;
}
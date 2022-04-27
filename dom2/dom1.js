//dom1.js

let data = [{studNo: 101, studName: '이재빈', engScore: 90, korScore: 80},
            {studNo: 102, studName: '김주환', engScore: 88, korScore: 91},
            {studNo: 103, studName: '김형민', engScore: 92, korScore: 89},
            {studNo: 104, studName: '전민욱', engScore: 92, korScore: 83}
          ];

//초기화        
let list = document.getElementById('list');

data.forEach(function(elem, idx, ary) {
  list.appendChild(makeTr(elem));
});

//변경버튼이벤트
let changeBtn = document.querySelector('input[type="button"]');

changeBtn.addEventListener('click', function(e){

//대상찾기
let targetTr= document.querySelectorAll('#list>tr');
console.log(targetTr);
let sno = document.getElementById('sno').value;
let eng = document.getElementById('eng').value;
targetTr.forEach(function(tr){
  if(tr.children[0].innerHTML == sno ){
    tr.children[2].innerHTML == eng;
  }
});
});


//changeBtn.addEventListener('click', changeCallBack1);


function changeCallBack1(e){
  
  e.preventDefault(); // 기본기능차단
  console.log('hhh');
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let eng =document.getElementById('eng').value;
  let kor =document.getElementById('kor').value;
  if(!(sno && sname && eng && kor)){
    alert('필수값을 입력하세요>>>');
    return;
  };

  // if(!sno){
  //   alert('변경할 아이디를 입력 >>>');
  //   return;
  // } else if(!sname){
  //   alert('변경할 이름을 입력 >>>');
  //   return;
  // }else if(!eng){
  //   alert('변경할 영어점수를 입력 >>>');
  //   return;
  // }else if(!kor){
  //   alert('변경할 국어점수를 입력 >>>');
  //   return;
  // }

  let searchTr = document.getElementById(`sno_${sno}`);
  searchTr.children[1].innerHTML =sname
  searchTr.children[2].innerHTML = eng
  searchTr.children[3].innerHTML = kor

  ;
};


//student 한건 -> <tr><td>학번<tr><td>
function makeTr(student){
  let tr = document.createElement('tr');
  tr.setAttribute('id', 'sno_' + student.studNo);
  tr.addEventListener('click', function(e){
    //e.stopPropagation();//이벤트 전파 차단
    console.log(this.children[0].innerHTML);
    document.getElementById('sno').value = this.children[0].innerHTML;
    document.getElementById('sname').value= this.children[1].innerHTML;
    document.getElementById('eng').value= this.children[2].innerHTML;
    document.getElementById('kor').value= this.children[3].innerHTML;

  }, false); // true:상위 -> 하위. false: 하위->상위
  for(let field in student){ //student['studNo']
    let td = document.createElement('td');
    td.innerHTML = student[field];
    tr.appendChild(td);
  }
  // 버튼:삭제
let btn = document.createElement('button');
btn.innerHTML = '삭제';
btn.addEventListener('click', function(e){
  e.stopPropagation(); //이벤트 전파 차단
  console.log(this);
  //e.target.parentElement.parentElement.remove();
}, false);
  let td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}

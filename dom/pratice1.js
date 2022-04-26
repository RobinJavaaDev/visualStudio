// dom/pratice1.js

document.addEventListener('DOMContentLoaded',function(){
  let menus = ['아이스아메리카노','카페라떼','레몬에이드']
  let ulTag = document.createElement('ul'); // element node
  
  menus.forEach((exe,idx)=>{
    let liTag = document.createElement('li');
    liTag.innerHTML = menus[idx];
    // 하위요소 추가
    ulTag.appendChild(liTag)

  })

    /// or...

  // for(let i = 0; i<menus.length; i++){
  //   // 1:아메리카노.....
  //   let liTag = document.createElement('li');
  //   liTag.innerHTML = menus[i];
  //   // 하위요소 추가
  //   ulTag.appendChild(liTag)
  // }
   let divshow = document.getElementById('show');
   divshow.appendChild(ulTag);
});
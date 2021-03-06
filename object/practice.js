// object/practice.js
const jsonObj =
  `[{"id":1,"first_name":"Stoddard","last_name":"Dutnall","email":"sdutnall0@delicious.com","gender":"Female","ip_address":"229.143.8.72"},
{"id":2,"first_name":"Harry","last_name":"Wadhams","email":"hwadhams1@patch.com","gender":"Male","ip_address":"164.111.86.114"},
{"id":3,"first_name":"Celestyna","last_name":"McNaught","email":"cmcnaught2@ftc.gov","gender":"Female","ip_address":"6.24.242.237"},
{"id":4,"first_name":"Jerome","last_name":"Worrill","email":"jworrill3@cbsnews.com","gender":"Polygender","ip_address":"212.251.108.193"},
{"id":5,"first_name":"Dyana","last_name":"Cansdill","email":"dcansdill4@stumbleupon.com","gender":"Female","ip_address":"231.148.126.140"},
{"id":6,"first_name":"Court","last_name":"Gomersal","email":"cgomersal5@yahoo.com","gender":"Bigender","ip_address":"151.140.128.45"},
{"id":7,"first_name":"Heinrik","last_name":"Quade","email":"hquade6@ycombinator.com","gender":"Male","ip_address":"6.236.28.108"},
{"id":8,"first_name":"Oneida","last_name":"Bouzan","email":"obouzan7@google.com.br","gender":"Female","ip_address":"231.143.62.190"},
{"id":9,"first_name":"Dulcine","last_name":"Boardman","email":"dboardman8@twitter.com","gender":"Female","ip_address":"69.70.115.8"},
{"id":10,"first_name":"Ellyn","last_name":"Wordesworth","email":"ewordesworth9@twitpic.com","gender":"Female","ip_address":"86.179.24.18"},
{"id":11,"first_name":"Alphard","last_name":"Gerbel","email":"agerbela@hao123.com","gender":"Male","ip_address":"92.178.54.166"},
{"id":12,"first_name":"Bertina","last_name":"Curror","email":"bcurrorb@alibaba.com","gender":"Female","ip_address":"12.227.185.45"},
{"id":13,"first_name":"Ramona","last_name":"Fassam","email":"rfassamc@addtoany.com","gender":"Female","ip_address":"157.113.62.232"},
{"id":14,"first_name":"Ozzie","last_name":"Gronav","email":"ogronavd@wikipedia.org","gender":"Male","ip_address":"30.231.60.162"},
{"id":15,"first_name":"Terencio","last_name":"Phizaclea","email":"tphizacleae@weather.com","gender":"Non-binary","ip_address":"252.173.73.238"}]`;
//'{"id":15, "first_name":Terencio, ....}';
// json ????????? => javjscripe
const objAry = JSON.parse(jsonObj);
console.log(objAry);
let fields = ['id', 'first_name', 'last_name', 'email'];

function showTable(Ary) {
  let tableTag = "";
  // <table>
  // <thead><tr><th></th>*????????????</tr></thead>
  // <tbody><tr><td></td>*????????????</tr>??????</tbody>
  //</table>
  tableTag += '<table>';
  tableTag += createHead();
  tableTag += createBody(Ary);
  tableTag += '</table>';
  document.write(tableTag);
}

function createHead() {
  // <thead><tr><th></th>*????????????</tr></thead>
  let headTag = "";
  headTag += '<thead><tr>'
  fields.forEach(function (val) {
    headTag += `<th>${val}</th>`
  });
  headTag += '</tr></thead>';
  console.log(headTag);
  return headTag;
};

function createBody(ary){
  // <tbody><tr><td></td>*????????????</tr>??????</tbody>
  let bodyTag = "";
  bodyTag += '<tbody>';
  ary.forEach(function(val, idx){
    bodyTag += '<tr>';
    fields.forEach(function(field){
      bodyTag += `<td>${val[field]}</td>`;
    });
    bodyTag += '</tr>';
  });
  bodyTag += '</tbody>';
  console.log(bodyTag);
  return bodyTag;
}



showTable(objAry);
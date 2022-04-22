// object/practice2.js
// 달력 만들 기.
showCalendar(2022,5);

function showCalendar(year = 2022, month = 4) {
  let firstDay = getFirstDay(year, month); // 1일의 위치지정 하기위한 함수
  let lastDate = getLastDate(year, month); // 해당월 말일의 위치지정 하기위한 함수

  document.write('<table border=1>')
  // 요일 출력
  showDayInfo();
  // 빈공간 작성.
  for (let i = 0; i < getFirstDay(year, month); i++) {
    document.write('<td></td>');
  }
  // 날짜 화면 출력.
  for (let i = 1; i <= getLastDate(year, month); i++) {
    //document.write(`<td>${i}</td>`)


    if ((i + getFirstDay(year, month)) % 7 == 0) {
      document.write(`<td style="background-color: lightblue;">${i}</td>`)

    } else if ((i + getFirstDay(year, month)) % 7 == 1) {
      document.write(`<td style="background-color: lightpink;">${i}</td>`)
    } else {
      document.write(`<td>${i}</td>`)
    }
    if ((i + getFirstDay(year, month)) % 7 == 0) { // 줄바꿈.
      document.write('</tr><tr>'); // /,바꿈?
    }

  }
  document.write('</tr></table>');
}

function showDayInfo() {
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT', ];
  document.write('<thead><tr>')
  days.forEach(function (day) {
    document.write(`<th>${day}</th>`)
  })
  document.write('<tr>')
}

function getLastDate(year, month) {
  // 말일 정보를 가지고 오는 함수..
  switch (month) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
  }

}

function getFirstDay(year, month) {
  //첫일 정보를 가지고 오는 함수
  switch (month) {
    case 1:
      return 6;
    case 2:
      return 2;
    case 3:
      return 2;
    case 4:
      return 5;
    case 5:
      return 0;
    case 6:
      return 3;
    case 6:
      return 3;
    case 7:
      return 5;

  }
}
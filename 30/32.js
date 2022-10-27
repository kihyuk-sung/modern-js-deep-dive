(function printNow() {
  const today = new Date();
  const dayNames = [
    '(일요일)',
    '(월요일)',
    '(화요일)',
    '(수요일)',
    '(목요일)',
    '(금요일)',
    '(토요일)',
  ];

  function getHour(today) {
    let hour = today.getHours();
    hour %= 12;
    hour = hour || 12;
    return hour
  }

  function padString(number) {
    return number < 10 ? '0' + number : number
  }

  const day = dayNames[today.getDay()];
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = getHour(today);
  const minute = padString(today.getMinutes());
  const second = padString(today.getSeconds());
  const ampm = today.getHours() >= 12 ? 'PM' : 'AM'

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;
  console.log(now);

  setTimeout(printNow, 1000);
}());

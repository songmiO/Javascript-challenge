const minusBtn = document.getElementsByClassName('decrease-btn')[0];
const resetBtn = document.getElementsByClassName('reset-btn')[0];
const plusBtn = document.getElementsByClassName('increase-btn')[0];
// 카운트 할 숫자
let countNum = 0;

// 버튼 클릭 시, 하나씩 감소하는 함수
minusBtn.addEventListener('click', function () {
  const changeNum = document.getElementsByClassName('counter-num')[0];

  countNum -= 1;

  changeNum.innerHTML = countNum;
  changeNum.style.color = 'red';
});

// 버튼 클릭 시, 0으로 리셋 시키는 함수
resetBtn.addEventListener('click', function () {
  const changeNum = document.getElementsByClassName('counter-num')[0];

  countNum = 0;

  changeNum.innerHTML = countNum;
  changeNum.style.color = 'black';
});

// 버튼 클릭 시, 하나씩 증가하는 함수
plusBtn.addEventListener('click', function () {
  const changeNum = document.getElementsByClassName('counter-num')[0];

  countNum += 1;

  changeNum.innerHTML = countNum;
  changeNum.style.color = 'green';
});

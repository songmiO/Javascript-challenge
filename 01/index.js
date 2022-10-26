const colors = [
  '#FF9A00',
  '#FF3700',
  '#FFF800',
  '#00FF1D',
  '#0098FF',
  '#F1f5f8',
];
const changeBtn = document.getElementsByClassName('change-btn')[0];
// const colorCode = document.getElementsByClassName('color-code')[0];

// 버튼 클릭 할 때마다 colors 색상 랜덤 변경
changeBtn.addEventListener('click', function () {
  const code = Math.floor(Math.random() * colors.length);
  const display = document.getElementsByClassName('main-container')[0];
  display.style.backgroundColor = colors[code];
});

// 버튼 클릭 할 때마다 color code 랜덤 변경
changeBtn.addEventListener('click', function () {
  const number = Math.floor(Math.random() * colors.length);
  const codeNumber = document.getElementsByClassName('color-code')[0];
  codeNumber.innerHTML = colors[number];
});

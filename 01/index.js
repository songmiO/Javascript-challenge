document
  .getElementsByClassName('change-btn')[0]
  .addEventListener('click', function () {
    console.log('확인');
    document.getElementsByClassName('color-code')[0].innerHTML = '#2BC10B';
  });

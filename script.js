var resultInput = document.getElementById('result');
var numberBtns = document.querySelectorAll('.number');
var operatorBtns = document.querySelectorAll('.operator');
var clearBtn = document.getElementById('clear');
var pointBtn = document.getElementById('point');
var backBtn = document.getElementById('back');
var resultBtn = document.getElementById('equal');

numberBtns.forEach(n => n.addEventListener('click', () => {
  resultInput.value += n.id;
}));

operatorBtns.forEach(n => n.addEventListener('click', () => {
  resultInput.value += n.id;
}));

clearBtn.addEventListener('click', () => {
  resultInput.value = "";
});

pointBtn.addEventListener('click', () => {
  resultInput.value += '.';
});

backBtn.addEventListener('click', () => {
  resultInput.value = String(resultInput.value).slice(0, -1);
});

resultBtn.addEventListener('click', () => {
  resultInput.value = eval(resultInput.value);
});
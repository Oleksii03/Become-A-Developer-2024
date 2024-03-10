const input = document.querySelector('input[type="text"]');
const btnSend = document.querySelector('button[type="button"]');

const maxNum = document.querySelector('.max-num');
const minNum = document.querySelector('.min-num');
const median = document.querySelector('.median-num');
const averageNum = document.querySelector('.average-num');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');

let value = [];

input.addEventListener('change', (e) => {
  let valueArr = e.target.value.trim().split(' ');

  value = [];

  for (const el of valueArr) {
    let num = Number(el);
    value.push(num);
  }
});

btnSend.addEventListener('click', onСalculateValue);

function onСalculateValue (e) {

  if (!value.length || value.includes(NaN)) {
    alert('Введіть коректне значення');
    return;
  }

  getMaxValue(value);
  getMinValue(value);
  averageValue(value);
  calculateMedian(value);

  input.value = '';
}

function getMaxValue (arrValues) {
  let maxVal = arrValues[0];

  for (const num of arrValues) {
    if (num > maxVal) {
      maxVal = num;
    }
  }

  maxNum.textContent = maxVal;
}

function getMinValue (arrValues) {
  let minVal = arrValues[0];

  for (const num of arrValues) {
    if (num < minVal) {
      minVal = num;
    }
  }

  minNum.textContent = minVal;
}

function averageValue (arrValues) {
  let total = 0;

  for (const num of arrValues) {
    total += num;
  }

  averageNum.textContent = (total / arrValues.length).toFixed(1);
}

function calculateMedian (arrValues) {
  const sortArr = arrValues.sort((a, b) => a - b);

  let idx = Math.ceil(sortArr.length / 2 - 1);

  if (!(sortArr.length % 2)) {
    median.textContent = (sortArr[idx] + sortArr[idx + 1]) / 2;
  } else {
    median.textContent = sortArr[idx];
  }

  increment.textContent = sortArr.join(',');
  decrement.textContent = sortArr.reverse().join(',');
}
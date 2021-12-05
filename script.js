'use strict';

let secretNumber = 1 + Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;
select('.check').addEventListener('click', function () {
  let guess = Number(select('.guess').value);
  if (!guess) {
    select('.message').textContent = '⛔Sayı girin!';
  } else if (guess == secretNumber) {
    select('.message').textContent = '🎉TEBRİKLER!';
    select('body').style.backgroundColor = '#60b347';
    select('.number').textContent = secretNumber;
    select('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      select('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    select('.message').textContent = '📈Büyük sayı!';
    select('.score').textContent = --score;
  } else if (guess < secretNumber) {
    select('.message').textContent = '📉Küçük sayı!';
    select('.score').textContent = --score;
  }
});
select('.again').addEventListener('click', reset);
function select(element) {
  return document.querySelector(element);
}
function reset() {
  select('.message').textContent = 'Tahmin etmeye başla...';
  select('body').style.backgroundColor = '#222';
  select('.score').textContent = score = 20;
  secretNumber = 1 + Math.trunc(Math.random() * 20);
  select('.number').textContent = '?';
  select('.number').style.width = '15rem';
}

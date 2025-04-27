let i = document.getElementById('inp')
let b = document.querySelector('.check-btn')
let r = Math.round(Math.random()*20)
let h = document.getElementsByTagName('h1')[0]
let bg = document.getElementsByTagName('section')[0]
b.addEventListener('click',function(){
    if (r>0 && r == i.value){
        h.innerText= 'Correct'
        bg.style.backgroundColor= 'green'
    }
    if (r>0 && r > i.value){
        loseLife();
        h.innerText = 'Your Value is Low'
         bg.style.backgroundColor= 'red'
    }
     if(r>0 &&  r < i.value){
        loseLife();
        h.innerText = 'Value is high'
         bg.style.backgroundColor= 'red'
    }
    if(i.value<1 || i.value>20){
      alert('shyaar na bun')
    }
})
document.getElementById('restartButton').addEventListener('click', function() {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }

  
  let lives = 5;

function loseLife() {
  lives--;
  document.getElementById('lifes').innerText = 'Lives: ' + lives;
  
  if (lives <= 0) {
    gameOver()
    restartGame();
  }
}

function gameOver() {
  alert('Out of lives! Try again!');
  // You can also disable the game here or show a restart button
}

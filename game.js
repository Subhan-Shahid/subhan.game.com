let i = document.getElementById('inp')
let b = document.querySelector('.check-btn')
let r = Math.round(Math.random()*20)
let h = document.getElementsByTagName('h1')[0]
let bg = document.getElementsByTagName('section')[0]
b.addEventListener('click',function(){
    if (r>0 && r == i.value){
        h.innerText= 'Correct'
        h.style.color = 'green';
        bg.style.backgroundColor= '';
         document.getElementById('celeb-vid').style = 'celeb-vid';
        new Audio('218494__robinhood76__04807-strong-clapping-100-people.wav').play();
    }
    if (r>0 && r > i.value){
        loseLife();
        h.innerText = 'Your Value is Low'
        h.style.color = 'yellow';
         bg.style.backgroundColor= 'red'
          new Audio('558121__abdrtar__wrong.mp3').play();
          i.classList.add('shake');
          setTimeout(function() {
            i.classList.remove('shake');
          }, 1000); 
    }
     if(r>0 &&  r < i.value){
        loseLife();
        h.innerText = 'Value is high'
         bg.style.backgroundColor= 'red'
         h.style.color = 'yellow';
         new Audio('558121__abdrtar__wrong.mp3').play();
         i.classList.add('shake');
         setTimeout(function() {
            i.classList.remove('shake');
          }, 1000);
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
  document.getElementById('lifes').style.color = 'white';
  document.getElementById('lifes').innerText = 'Lives: ' + lives;
  if (lives <= 0) {
    gameOver()
    restartGame();
  }
}

function gameOver() {
  alert('Out of lives! Try again!');
}

window.addEventListener('keydown', function (event){
  if(event.key == 'Enter'){
    useful();
  }
})
function useful(){
  if (r>0 && r == i.value){
    h.innerText= 'Correct'
    h.style.color = 'green';
    bg.style.backgroundColor= '';
    document.getElementById('celeb-vid').style = 'celeb-vid';
    new Audio('218494__robinhood76__04807-strong-clapping-100-people.wav').play();
}
if (r>0 && r > i.value){
    loseLife();
    h.innerText = 'Your Value is Low'
    h.style.color = 'yellow';
     bg.style.backgroundColor= 'red'
     new Audio('558121__abdrtar__wrong.mp3').play();
      i.classList.add('shake');
      setTimeout(function() {
            i.classList.remove('shake');
          }, 1000);
}
 if(r>0 &&  r < i.value){
    loseLife();
    h.innerText = 'Value is high'
      h.style.color = 'yellow';
     bg.style.backgroundColor= 'red'
     new Audio('558121__abdrtar__wrong.mp3').play();
     i.classList.add('shake');
     setTimeout(function() {
            i.classList.remove('shake');
          }, 1000);
}
if(i.value<1 || i.value>20){
  alert('shyaar na bun')
}
}

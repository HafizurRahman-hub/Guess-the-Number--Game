'use strict';

let secretNumber =Math.trunc( (Math.random()*20)+1);
let scoreValue =20;
let highScore =0;
document.querySelector('.score').textContent =scoreValue;

document.querySelector('.check').addEventListener('click',function(){
    let guess = document.querySelector('.guess').value;
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
        document.querySelector('body').style.backgroundColor ='red';
    }else if(guess == secretNumber){
        document.querySelector('.message').textContent = 'WOW. You WON!';
        document.querySelector('.number').textContent =secretNumber;

        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.fontSize = '8rem';
        document.querySelector('.score').textContent =scoreValue;

        if(scoreValue>highScore){
            highScore=scoreValue;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if(guess > secretNumber){
        if(scoreValue > 1){
        document.querySelector('.message').textContent = 'TOO high TRY AGAIN!';
        scoreValue--;
        document.querySelector('.score').textContent =scoreValue;
        }else{
            document.querySelector('.message').textContent = 'You LOST the Game!'
            document.querySelector('.score').textContent =0;
            document.querySelector('body').style.backgroundColor ='red';
        }
    }else if(guess < secretNumber){
        if(scoreValue > 1){
        document.querySelector('.message').textContent = 'TOO low TRY AGAIN!'
        scoreValue--;
        document.querySelector('.score').textContent =scoreValue;
        }else{
                document.querySelector('.message').textContent = 'You LOST the Game!'
                document.querySelector('.score').textContent =0;
                document.querySelector('body').style.backgroundColor ='red';
        }
    }
})

document.querySelector('.again').addEventListener('click',function(){
     document.querySelector('body').style.backgroundColor ='#222';
     document.querySelector('.number').style.fontSize = '6rem';
     document.querySelector('.guess').value = '';
     document.querySelector('.message').textContent ='Start guessing...';
     document.querySelector('.score').textContent =20;
     document.querySelector('.number').textContent ='?'
     secretNumber =Math.trunc( (Math.random()*20)+1);
})

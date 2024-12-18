let tog=1
const backgroundSound= new Audio('music-for-games.mp3')
let gameoverSound= new Audio('game-over.mp3')
let rollingSound= new Audio('rpg-dice-rolling-95182.mp3')


player1sum=0
player2sum=0

function play(p1,playersum,num)

    let sum
        
    if (playersum == player1sum){

        player1sum = player1sum + num
    
        if (player1sum>36){
            player1sum= player1sum - num
           
        }
    
        if (player1sum == 6){
            player1sum = 18
    
        }
    
        if (player1sum == 12){
            player1sum = 24
        }
        
        if (player1sum == 15){
            player1sum = 27
        }

        if (player1sum == 32){
            player1sum = 28
        }
    
        if (player1sum == 25){
            player1sum = 23
        }
    
        if (player1sum == 20){
            player1sum = 16
        }
    
        if (player1sum == 11){
            player1sum = 3
        }
    
        sum=player1sum
    }
    
     
     if(playersum == player2sum){

    player2sum = player2sum + num

    if (player2sum>36){
        player2sum= player2sum - num
       
    }

    if (player2sum == 6){
        player2sum = 18

    }

    if (player2sum == 12){
        player2sum = 24
    }
    
    if (player2sum == 15){
        playersum = 27
    }

    if (player2sum == 32){
        player2sum = 28
    }

    if (player2sum == 25){
        player2sum = 23
    }

    if (player2sum == 20){
        player2sum = 16
    }

    if (player2sum == 11){
        player2sum = 3
    }

    sum=player2sum
}

backgroundSound.play();


document.getElementById("diceBtn").addEventListener("click",function(){
    rollingSound.play();
    let num=Math.floor(Math.random()*(6)+1)
    document.getElementById("dice").innertext=num


    if (tog % 2 !== 0){
        document.getElementById('tog').innerText="yellow's turn to play"
        play(p1,player1sum,num);
    
        
    } else {
        
    (tog % 2 == 0)
    
        document.getElementById('tog').innerText="red's turn to play"
        play(p2,player2sum,num);

        }

        tog= tog + 1


    }

     IF (sum===36)  tsa{
                gameoverSound.play();
     }
        if (player=='p1')
        {
            prompt("red won!!")
    }else (player=='p2')
    {
        prompt("yellow won!!")
    } 
    location.reload()










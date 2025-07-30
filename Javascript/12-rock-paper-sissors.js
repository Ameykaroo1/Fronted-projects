 let score = JSON.parse(localStorage.getItem("score")) || {
      win: 0,
      losses: 0,
      Ties: 0,
    };
    updateScoreElement();
    /*if(!score){
    score ={
      win: 0,
      losses: 0,
      Ties: 0
    };

  }*/

    let isAutoPlay= false;
    let intervalId;

    //const autoplay =()=>{

    //};
    function autoplay(){
      if(!isAutoPlay){
        intervalId= setInterval(()=>{
        const playerMove = pickComputerMove();
        playGame(playerMove);
      },1000);
      isAutoPlaying = true;
      }else{
        clearInterval(intervalId);
        isAutoPlaying =false;
      }
    }

    document.querySelector('.js-rock-button').addEventListener('click',()=> {
        playGame('rock');
      });

    document.querySelector('.js-paper-button').addEventListener('click',()=>{
        playGame('paper');
      });
    
    document.querySelector('.js-sissors-button').addEventListener('click',()=>{
        playGame('sissors');
      });

      document.body.addEventListener('keydown', (event)=>{
        if(event.key === 'r'){
          playGame('rock');
        }else if(event.key === 'p'){
          playGame('paper');
        }else if(event.key === 's'){
          playGame('sissors');
        }
        
        console.log(event.key);
      })

    function playGame(playerMove) {
      const ComputerMove = pickComputerMove();
      let result = "";
      if (playerMove === "sissors") {
        if (ComputerMove === "rock") {
          result = "you loss";
        } else if (ComputerMove === "paper") {
          result = "you win";
        } else if (ComputerMove === "sissors") {
          result = "Tie";
        }
      } else if (playerMove === "paper") {
        if (ComputerMove === "rock") {
          result = "you win";
        } else if (ComputerMove === "paper") {
          result = "Tie";
        } else if (ComputerMove === "sissors") {
          result = "you loss";
        }
      } else if (playerMove === "rock") {
        if (ComputerMove === "rock") {
          result = "Tie";
        } else if (ComputerMove === "paper") {
          result = "you loss";
        } else if (ComputerMove === "sissors") {
          result = "you win";
        }
      }

      if (result === "you win") {
        score.win += 1;
      } else if (result === "you loss") {
        score.losses += 1;
      } else if (result === "Tie") {
        score.Ties += 1;
      }

      localStorage.setItem("score", JSON.stringify(score));
      updateScoreElement();
      document.querySelector(".js-result").innerHTML = result;
      document.querySelector(".js-moves").innerHTML = `You
    <img src="${playerMove}-emoji.png" alt="" class="move-icon">  
    <img src="${ComputerMove}-emoji.png" alt="" class="move-icon">
    Computer`;
    }

    function updateScoreElement() {
      document.querySelector(
        ".js-score"
      ).innerHTML = `wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.Ties}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      let ComputerMove = "";
      if (randomNumber >= 0 && randomNumber <= 1 / 3) {
        ComputerMove = "rock";
      } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
        ComputerMove = "paper";
      } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
        ComputerMove = "sissors";
      }
      return ComputerMove;
    }
    
let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice")
const msgChoice=document.querySelector("#msg")
const fullBody=document.querySelector("body")
const userScoreText=document.querySelector("#user-score")
const compScoreText=document.querySelector("#computer-score")
const Restart=document.querySelector(".Restart")


const restartGame=(userScore, compScore)=>{
    if(userScore==5 || compScore==5){
        let winner = userScore==5?"User":"AI"
        
        // userScoreText.innerText=0;
        // compScoreText.innerText=0;
        // userScore=0;
        // compScore=0;
        msgChoice.innerText=`${winner} has scored 5 Points first and is the winner. `
        msgChoice.style.backgroundColor="#081b31"
        fullBody.style.backgroundColor="#fff"

        Restart.addEventListener("click",()=>{
            userScoreText.innerText=0;
            compScoreText.innerText=0;
            userScore=0;
            compScore=0;  
            msgChoice.innerText="Play your move"
        })   
    }
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        ++userScore;
        userScoreText.innerText=userScore;
        msgChoice.innerText=`You win!\n Your ${userChoice} beats ${compChoice}`
        
        msgChoice.style.backgroundColor="green"
        fullBody.style.backgroundColor="rgb(146, 206, 146)"  
        console.log("you win");
    }
    else{
        ++compScore;
        compScoreText.innerText=compScore;
        console.log("you lose")
        msgChoice.innerText=`You lose!\n ${compChoice} beats Your ${userChoice}`
        
        msgChoice.style.backgroundColor="red"
        fullBody.style.backgroundColor="rgb(234, 57, 87)"
    }

    restartGame(userScore, compScore)
     
}

const drawgame=(userChoice, compChoice)=>{
    msgChoice.innerText=`DRAW! Both chose ${userChoice}\n Play Again`
    console.log("It is a DRAW!")
    msgChoice.style.backgroundColor="#081b31"
    fullBody.style.backgroundColor="rgb(5, 55, 53)"
}

const genCompChoice=()=>{
    const options=["rock", "paper","scissors"];
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
}

const playGame=(userChoice)=>{
    console.log("User choice=",userChoice);
    const compChoice=genCompChoice()
    console.log("Computer's choice=",compChoice);

    if(userChoice===compChoice){
        ///Draw Condition
        drawgame(userChoice, compChoice)
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.id 
        
        playGame(userChoice)


    })
})
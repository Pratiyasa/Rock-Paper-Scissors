let yourscore=0;
let compscore=0;
let msg=document.querySelector("#msg");

let choices=document.querySelectorAll(".choice");

const compchoices=()=>{
    let arr=["rock","paper","scissors"];
    let value=Math.floor(Math.random()*3);
    return arr[value];
}


const checkpoint=(value)=>{
    let user=document.querySelector("#userpoint");
    let system=document.querySelector("#comppoint");
    if(value==="false")
    {
         compscore++;
         system.innerText=`${compscore}`;
         msg.innerText="You lose";
         msg.setAttribute("id","msg-lose");
         console.log("You lose");
    }
    else{
        yourscore++;
        user.innerText=`${yourscore}`;
        msg.innerText="You Win";
        msg.setAttribute("id","msg-win");
        console.log("You win");
    }
}

const gameplayer=(playerchoice)=>{
       let compchoice= compchoices();
       console.log(`player=${playerchoice} and system=${compchoice} `);

       if(playerchoice===compchoice)
       {
             console.log("it was a draw");
            msg.innerText="It was draw . Play Again";
            msg.setAttribute("id","msg");
       }
       else{
        let value;
        if(playerchoice==="rock")
        {
             value=(compchoice==="paper") ? "false" :"true";
        }
        if(playerchoice==="paper")
        {
             value=(compchoice==="scissors") ? "false" :"true";
        }
        if(playerchoice==="scissors")
        {
             value=(compchoice==="rock") ? "false" :"true";
        }
        checkpoint(value);
       }
       
}




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        let attri=choice.getAttribute("id");
        gameplayer(attri);
    })
})
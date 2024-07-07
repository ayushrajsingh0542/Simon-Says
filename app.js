let gameSeq=[];
let userSeq=[];
let started=false;
let level=-1;
let max=0;
let max_score=document.querySelector(".max-score");
max_score.innerText="High Score :  "; 


let btns=["red","yellow","blue","green"];
let h2=document.querySelector("h2");
    document.addEventListener("keypress",()=>{
        if(started==false)//ye bcs abhi tak game start nhi hua to ho jae..to ek baar hi start ho
            {
        console.log("Game Started");
        started=true;

        levelUp();
            }
 });
 function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },350);

 }
 function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },200)

 };
function levelUp(){
    userSeq=[];//taaki user ko har level me waps se sab daalna ho
    level++;
    h2.innerText=`Level : ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
    gameSeq.push(randColor);

}
function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white"
        },150)
       maxScore(level);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1)

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started =false;
    gameSeq=[]
    userSeq=[];
    if(level==0){
    level=0;
    }
    else{
        level=-1;
    }
}

function maxScore(value){
     max=Math.max(max,value);
    console.log(max);
    let max_score=document.querySelector(".max-score");
    max_score.innerText=`High Score : ${max}`;

}
const boxes=document.querySelectorAll(".box");
const resetbtn=document.querySelector("#resetbtn");
const winnertag=document.querySelector(".winnertag");
let turnX=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnX=true;
    enableBoxes();
    winnertag.innerText="";
}

boxes.forEach((value,index)=>{
    value.addEventListener("click",(e)=>{
        
        if(turnX)
        {
            value.innerText="x";
            turnX=false;

            
        }
        else{
            value.innerText="o";
            turnX=true;
        }
       count++;
        value.classList.add("disabled");
        let iswinner=checkWinner();
        if(count===9&&!iswinner){
            gameDraw();
        }
    })
});
const gameDraw=()=>{
    winnertag.innerText="Game Was a Draw."
}

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.classList.remove("disabled");
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
      if(!box.classList.contains("disabled"))  
             box.classList.add("disabled")
    }
}
const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
        let pos1=boxes[pattern[0]].innerText,
        pos2=boxes[pattern[1]].innerText,
        pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&& pos3!="")
        {
            if(pos1===pos2&&pos2===pos3)
            {
                winnertag.innerText=`Winner is ${pos1}`;
                disableBoxes();
                return true;
            }
        }
        

}
}
resetbtn.addEventListener("click",resetGame);
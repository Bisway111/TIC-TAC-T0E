let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector(".new-game");
let msgContainer = document.querySelector(".meg-container");
let msg =document.querySelector("p");
let hiden = document.querySelector(".hide"); 
let turnO =true;
let count = 0;
const winPattern =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) =>{
box.addEventListener("click",()=>{
   
    if(turnO===true){
        box.innerText="X";
        turnO=false;
    }else{
        box.innerText="O";
        turnO=true;
    }
    count++;
    box.disabled=true;
   let win = checkWinner();
   //To handle Draw condition
   let Win = checkWinner();

    if (count === 9 && !Win) {
        draw();
    }
    
    checkWinner();
});

});
const draw=()=>{
    msg.innerText ="It's a Draw ";
    msgContainer.classList.remove("hide");
    disableBtn();
}
const disableBtn =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBtn =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
var resetGame =()=>{
    turnO= true;
    count = 0;
    enableBtn();
    msgContainer.classList.add("hide");
    
    for(var pattern of winPattern ){
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
             if(pos1Value==pos2Value && pos2Value == pos3Value){
                boxes[pattern[0]].classList.remove("change");
               boxes[pattern[1]].classList.remove("change");
               boxes[pattern[2]].classList.remove("change");
               }
           }

}

const showWinner= (winner) =>{
msg.innerText=`Congratulations ${winner} is the winner`;
msgContainer.classList.remove("hide");
disableBtn();
}

const checkWinner = ()=>{
    for(var pattern of winPattern ){
 let pos1Value = boxes[pattern[0]].innerText;
 let pos2Value = boxes[pattern[1]].innerText;
 let pos3Value = boxes[pattern[2]].innerText;
if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
    if(pos1Value==pos2Value && pos2Value == pos3Value){
       showWinner(pos1Value);
        boxes[pattern[0]].classList.add("change");
        boxes[pattern[1]].classList.add("change");
        boxes[pattern[2]].classList.add("change");
       
        
    }

}
    }
    
}

resetbtn.addEventListener("click",resetGame);
newGame .addEventListener("click",resetGame);
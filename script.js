let turn = "X";
let gameover = false;

//change turn
const changeturn = ()=>{
    return turn === "X"?"0":"X"
}


//check for win
let boxtext = document.getElementsByClassName("boxtext");

const checkwin = ()=>{
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.getElementsByClassName("info")[0].innerText = boxtext[e[0]].innerText + " Won"; 
            gameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "150px";
            
            
        }
    })
}



//game logic
let box = document.getElementsByClassName("box");
Array.from(box).forEach(element=>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText = turn;
            turn = changeturn();
            checkwin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn For "+ turn;
            }
        }
    })
})


//adding eventlistener on reset button
reset.addEventListener("click",()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For "+ turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";

})
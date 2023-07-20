
//variables for winner
let winner0;
let winner1;
let winner2;
let winner3;
let winner4;
let winner5;
let winner6;
let winner7;
let winner8;

let turn = "X"
//created function for X & 0 logic
// function X_0() {
//     if(turn == "X"){
//      turn = "0";
//     }
//     else{
//      turn = "X";
//     }
// }

let cell0 = document.querySelector(".cell0");
cell0.addEventListener("click", cell0Function);
function cell0Function(){
    if(turn == "X"){
     turn = "0";
    }
    else{
     turn = "X";
    }
    winner0 = turn;
    cell0.innerHTML = turn;
    checkWinner();
}

let cell1 = document.querySelector(".cell1");
cell1.addEventListener("click", cell1Function);
function cell1Function(){
    if(turn == "X"){
     turn = "0";
    }
    else{
     turn = "X";
    }
    winner1 = turn;
    cell1.innerHTML = turn;
    checkWinner();
}

let cell2 = document.querySelector(".cell2");
cell2.addEventListener("click", cell2Function);
function cell2Function(){
    if(turn == "X"){
     turn = "0";
    }
    else{
     turn = "X";
    }
    winner2 = turn;
    cell2.innerHTML = turn;
    checkWinner();
}

let cell3 = document.querySelector(".cell3");
cell3.addEventListener("click", cell3Function);
function cell3Function(){
    if(turn == "X"){
     turn = "0";
    }
    else{
     turn = "X";
    }
    winner3 = turn;
    cell3.innerHTML = turn;
    checkWinner();
}

let cell4 = document.querySelector(".cell4");
cell4.addEventListener("click", cell4Function);
function cell4Function(){
    if(turn == "X"){
     turn = "0";
    }
    else{
     turn = "X";
    }
    winner4 = turn;
    cell4.innerHTML = turn;
    checkWinner();
}

let cell5 = document.querySelector(".cell5");
cell5.addEventListener("click", cell5Function);
function cell5Function(){
    if(turn == "X"){
     turn = "0";
    }
    else{
     turn = "X";
    }
    winner5 = turn;
    cell5.innerHTML = turn;
    checkWinner();
}

let cell6 = document.querySelector(".cell6");
cell6.addEventListener("click", cell6Function);
function cell6Function(){
    if(turn == "X"){
     turn = "0";
    }
    else{
     turn = "X";
    }
    winner6 = turn;
    cell6.innerHTML = turn;
    checkWinner();
}

let cell7 = document.querySelector(".cell7");
cell7.addEventListener("click", cell7Function);
function cell7Function(){
    if(turn == "X"){
     turn = "0";
    }
    else{
     turn = "X";
    }
    winner7 = turn;
    cell7.innerHTML = turn;
    checkWinner();
}

let cell8 = document.querySelector(".cell8");
cell8.addEventListener("click", cell8Function);
function cell8Function(){
    if(turn == "X"){
     turn = "0";
    }
    else{
     turn = "X";
    }
    winner8 = turn;
    cell8.innerHTML = turn;
    checkWinner();
}

//created logic for winner
function checkWinner() {
    //for X only
    // Winner for Horizontal Lne only
    if(winner0 == "X" && winner1 == "X" && winner2 == "X"){
        alert("top horizontal line X is winner");
    } else if(winner3 == "X" && winner4 == "X" && winner5 == "X"){
        alert("center horizontal line X is winner");
    } else if(winner6 == "X" && winner7 == "X" && winner8 == "X"){
        alert("bottom horizontal line X is winner");
    }// Winner for Vertical Lne only
    else if(winner0 == "X" && winner3 == "X" && winner6 == "X"){
        alert("top vertical line X is winner");
    } 
    else if(winner1 == "X" && winner4 == "X" && winner7 == "X"){
        alert("center vertical line X is winner");
    }
    else if(winner2 == "X" && winner5 == "X" && winner8 == "X"){
        alert("last vertical line X is winner");
    }
    else if(winner0 == "X" && winner4 == "X" && winner8 == "X"){
        alert("last cross line X is winner");
    }
    else if(winner2 == "X" && winner4 == "X" && winner6 == "X"){
        alert("last cross line X is winner");
    }

    //for 0 only
    // Winner for Horizontal Lne only
    if(winner0 == "0" && winner1 == "0" && winner2 == "0"){
        alert("top horizontal line 0 is winner");
    } else if(winner3 == "0" && winner4 == "0" && winner5 == "0"){
        alert("center horizontal line 0 is winner");
    } else if(winner6 == "0" && winner7 == "0" && winner8 == "0"){
        alert("bottom horizontal line 0 is winner");
    }// Winner for Vertical Lne only
    else if(winner0 == "0" && winner3 == "0" && winner6 == "0"){
        alert("top vertical line 0 is winner");
    } 
    else if(winner1 == "0" && winner4 == "0" && winner7 == "0"){
        alert("center vertical line 0 is winner");
    }
    else if(winner2 == "0" && winner5 == "0" && winner8 == "0"){
        alert("last vertical line 0 is winner");
    }
    else if(winner0 == "0" && winner4 == "0" && winner8 == "0"){
        alert("last cross line 0 is winner");
    }
    else if(winner2 == "0" && winner4 == "0" && winner6 == "0"){
        alert("last cross line 0 is winner");
    }

}


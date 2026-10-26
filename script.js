let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnPlayer = true;                                 // PlayerX or PlayerO

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Har box par click hone par X ya O lagega

boxes.forEach((box) => {
    box.addEventListener("click", () => {   // click krne prr ye callBack func execute hoga

        if (turnPlayer === true) {
            turnPlayer = false;
            box.innerText = "X";
            console.log("Box was clicked !");
        } else {
            console.log("Box was clicked !");
            turnPlayer = true;
            box.innerText = "O";
        }

        box.disabled = true;        // ek baar click krne pr dubara click na kr skee
        checkWinner();
    });
});

// CHECKS WHO WON USING ARRAY WALI THINGS
const checkWinner = () => {
    for (let pattern of winPatterns) {

        if (
            boxes[pattern[0]].innerText === "X" &&
            boxes[pattern[1]].innerText === "X" &&
            boxes[pattern[2]].innerText === "X"
        ) {
            console.log("Player X Wins!");
            disableBoxes();
            showWinner("X");               // FUNC CALL display krne ke liye X is the winner
            return;
        }

        else if (
            boxes[pattern[0]].innerText === "O" &&
            boxes[pattern[1]].innerText === "O" &&
            boxes[pattern[2]].innerText === "O"
        ) {
            console.log("Player O Wins!");
            disableBoxes();
            showWinner("O");               // FUNC CALL display krne ke liye X is the winner
            return;
        }
    }
};

// ----------------------------------------------------------------------------------------------------

// CREATED A FUNCTION WHICH DISABLES THE BOXES , NO MORE CLICKS ON THE SAME BUTTON
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true; 
    });
};

const showWinner = (winner) => {                                        
    msg.innerText = `Congratulations, The winner is ${winner}`;        
    msgContainer.classList.remove("hide");                             
};


// ----------------------------------------------------------------------------------------------------

// TO RESET THE GAME (EMPTY BOXES , VALUE ASSINGED TO X AGAIN , HIDE THE WINNER THING)
const resetGame = () => { 

    turnPlayer = true; 

    boxes.forEach((box) => { 
        box.innerText = ""; 
        box.disabled = false; 
    }); 

    msgContainer.classList.add("hide"); 

}; 

resetbtn.addEventListener("click", resetGame); 
newGameBtn.addEventListener("click", resetGame); 


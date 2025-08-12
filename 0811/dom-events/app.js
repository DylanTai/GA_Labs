/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let operand1 = 0;
let operand2 = 0;
let whichNum = 1;
let operator = "";

/*------------------------ Cached Element References ------------------------*/
const numElement = Array.from(document.querySelectorAll(".number"));
const operElement = Array.from(document.querySelectorAll(".operator"));
const equalsElement = document.querySelector(".equals");
const displayElement = document.querySelector(".display");
let hElement = null;

/*-------------------------------- Functions --------------------------------*/
//Shows the inputted number on the calculator
const printNum = (displayNum) => {
    if (hElement)
        displayElement.removeChild(hElement);
    hElement = document.createElement("h");
    hElement.textContent = displayNum;
    displayElement.appendChild(hElement);
};

//Handles the number buttons
const handleNum = (event) => {
    if (whichNum === 1)
        operand1 = operand1 * 10 + parseInt(event.target.textContent);
    else
        operand2 = operand2 * 10 + parseInt(event.target.textContent);
    printNum(whichNum === 1 ? operand1 : operand2);
};


//Handles the equals sign button (above handle operators because operators needs this function to work)
const handleEquals = () => {
    if (operator !== "") {
        switch (operator) {
            case "+":
                operand1 = parseInt(operand1) + parseInt(operand2);
                break;
            case "-":
                operand1 = parseInt(operand1) - parseInt(operand2);
                break;
            case "*":
                operand1 = parseInt(operand1) * parseInt(operand2);
                break;
            case "/":
                operand1 = parseInt(operand1) / parseInt(operand2);
                break;
        }
        whichNum = 1;
        printNum(operand1);
    }
};

//Handles the operator buttons
const handleOper = (event) => {
    if (event.target.textContent === "C") {
        whichNum = 1;
        operand1 = operand2 = 0;
        operator = "";
        printNum(operand1);
    }
    else {
        if (whichNum === 2)
            handleEquals();
        operand2 = 0;
        whichNum = 2;
        operator = event.target.textContent;
    }
};

/*----------------------------- Event Listeners -----------------------------*/
printNum(0);

numElement.forEach((num) => {
    num.addEventListener("click", handleNum);
});

operElement.forEach((oper) => {
    oper.addEventListener("click", handleOper);
});

equalsElement.addEventListener("click", handleEquals);
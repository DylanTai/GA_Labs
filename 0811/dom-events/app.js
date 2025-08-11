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
let liElement = null;

/*-------------------------------- Functions --------------------------------*/
const printNum = (operand) => {
    if (liElement)
        displayElement.removeChild(liElement);
    liElement = document.createElement("li");
    liElement.textContent = operand;
    displayElement.appendChild(liElement);
};

const handleNum = (event) => {
    if (whichNum === 1)
        operand1 = operand1 * 10 + parseInt(event.target.textContent);
    else
        operand2 = operand2 * 10 + parseInt(event.target.textContent);
    printNum(whichNum === 1 ? operand1 : operand2);
};

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
        operand2 = 0;
        operator = "";
        whichNum = 1;
        printNum(operand1);
    }
};

const handleOper = (event) => {
    if (event.target.textContent === "C") {
        whichNum = 1;
        operand1 = operand2 = 0;
        operator = "";
        printNum(operand1);
    }
    else {
        handleEquals();
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
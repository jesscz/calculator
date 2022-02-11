const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");
const allClearBtn = document.querySelector(".allclear-btn");
const deleteBtn = document.querySelector(".delete-btn");
const decBtn = document.querySelector(".dec-btn");
const equalsBtn = document.querySelector(".equals-btn");
const display = document.querySelector(".display");

let n1;
let n2;

let toCalculate = false; //does n1 exist? --not used rn

let answer;
decBtn.disabled = false;

createDisplayValue(0); 

function checkDecEx(num){ //check decimal exists
    return Number.isInteger(num);
}

function setToCalc(){ //set to n1 if it doesnt exist and set to n2 if it does
    if ((n1 == null) && (n2 == null)){
        n1 = display.textContent;
    }
    else if (n2 == null){
        n2 = display.textContent;
    }
    else {
        //smth about 
    }
}

allClearBtn.addEventListener("click", () => {createDisplayValue("new");});
deleteBtn.addEventListener("click", () => {createDisplayValue("delete");});
decBtn.addEventListener("click", () => {
    if (decBtn.disabled == false){
        createDisplayValue(".");
    }
});

numBtns.forEach(num => {
    num.addEventListener("click", () => {
        let number = num.textContent;
        createDisplayValue(number)
    });
});


opBtns.forEach(op => {
    op.addEventListener("click", () => {
        let operator = op.textContent;
        if (op.textContent == "+"){
            setToCalc();
            createDisplayValue(operator);
        }
        else if (op.textContent == "–"){
            setToCalc();
            createDisplayValue(operator);
        }
        else if (op.textContent == "×"){
            setToCalc();
            createDisplayValue(operator);
        }
        else if (op.textContent == "÷"){
            setToCalc();
            createDisplayValue(operator);
        }
    });
});

function createDisplayValue(num){
    if (num == "new"){
        decBtn.disabled = false;
        display.textContent = 0;
    }
    else if (num == "delete"){
        display.textContent = Number(display.textContent.toString().slice(0, -1));
        if (!(checkDecEx(display.textContent))){
            decBtn.disabled = false;
        }
    }
    else if (num == "."){
        decBtn.disabled = true;
        display.textContent += ".";
    }
    else if (display.textContent == 0){
        if ((display.textContent.toString().slice(-1)) == "."){ //add decimal after the zero
            display.textContent += `${num}`;
        }
        else{ //change zero to other number
            display.textContent = `${num}`;
        }
    }
    else{
        display.textContent += `${num}`;
    }
}

function operate(op,n1,n2){
    return op(n1,n2);
}

function add(n1,n2){
    return (n1+n2);
}

function subtract(n1,n2){
    return (n1-n2);
}

function multiply(n1,n2){
    return (n1*n2);
}

function divide(n1,n2){
    return (n1/n2);
}

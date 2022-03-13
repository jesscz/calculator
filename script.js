const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");
const allClearBtn = document.querySelector(".allclear-btn");
//const deleteBtn = document.querySelector(".delete-btn");
//const decBtn = document.querySelector(".dec-btn");
const equalsBtn = document.querySelector(".equals-btn");
const display = document.querySelector(".display");

let answer;
let n1 = 0;
let n2;
let operatorType;
let toOperate = false;
display.textContent = n1;

// function checkDec(num){ //check decimal exists
//     return Number.isInteger(num); //true when no decimal false when yes decimal
// }

numBtns.forEach(num => {
    num.addEventListener("click", () => {
        let number = num.textContent;
        if (toOperate == false){
            setN1(number);
        }
        else if (toOperate == true){ 
            
            setN2(number);
        } 
    });
});

opBtns.forEach(op => {
    op.addEventListener("click", () => {
        if (toOperate == false){
            toOperate = true;
            setType(op.textContent);
        }
        else if ((operatorType != undefined) && (n2 != undefined)){
            operate(operatorType,n1,n2);
            setType(op.textContent);
            display.textContent = answer;
            restart();
        }
        else if ((operatorType == undefined) && (n2 != undefined)){
            setType(op.textContent);
            operate(operatorType,n1,n2);
            display.textContent = answer;
            restart();
        }
        else{
            setType(op.textContent);
        }
    });
});

// decBtn.addEventListener("click", () => {
//     if (toOperate == false){
//         decBtn.disabled = true;
//         setN1(".");
//     }
//     else if (toOperate == true){ 
//         decBtn.disabled = true;
//         setN2(".");
//     } 
// });


equalsBtn.addEventListener("click", () => {
    if ((operatorType != undefined) && (n2 != undefined)){
        operate(operatorType,n1,n2);
        display.textContent = answer;
        restart();
    } //else do nothing
});


allClearBtn.addEventListener("click", () => {
    //location.reload();
    n1 = 0;
    n2 = undefined;
    answer = undefined;
    operatorType = undefined;
    toOperate = false;
    //decBtn.disabled = false;
    display.textContent = n1;
});


function setType(x){
    if (x == "+"){
        operatorType = add;
    }
    else if (x == "–"){
        operatorType = subtract;
    }
    else if (x == "×"){
        operatorType = multiply;
    }
    else if (x == "÷"){
        operatorType = divide;
    }
}

function restart(){ //so can restart the calculating cycle
    n1 = answer;
    n2 = undefined;
    answer = undefined;
}

function setN1(num){
    if ((String(n1).length) > 11){
       return;    
    }
    if ((n1 == 0) && (num != ".")){
        n1 = `${num}`;
    }
    else if ((n1 == 0) && (num == ".")){
        n1 += `${num}`;
    }
    else if (n1 != undefined){
        n1 += `${num}`;
    }
    display.textContent = n1;
}

function setN2(num){
    if ((String(n2).length) > 11){
        return;    
    }
    if (n2 == undefined){
        n2 = `${num}`;
    }
    else if ((n2 != undefined) && (answer == undefined)){
        n2 += `${num}`;
    }
    else if (answer == undefined){
        n2 = `${num}`;
    }

    display.textContent = n2;
}




function operate(opType,n1,n2){
    if (opType == add){
        add(n1,n2);
        return answer;
    }
    else if (opType == subtract){
        subtract(n1,n2);
        return answer;
    }
    else if (opType == multiply){
        multiply(n1,n2);
        return answer;
    }
    else if (opType == divide){
        divide(n1,n2);
        return answer;
    }
}

function add(n1,n2){
    answer = (Number(n1)+Number(n2));
}

function subtract(n1,n2){
    answer = (Number(n1)-Number(n2));
}

function multiply(n1,n2){
    answer = (Number(n1)*Number(n2));
}

function divide(n1,n2){
    answer = (Number(n1)/Number(n2));
}

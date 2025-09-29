const isDivisible = (a,b) => a%b==0;
// console.log(isDivisible(6,3));
// console.log(isDivisible(8,2))
// console.log(isDivisible(3))
// function add (a,b){
//     return a+b;
// }

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const output = document.getElementById("output");
const error = document.getElementById("error");

let result = 0;

const add = () => {
    if(num1.value === "" || num2.value === ""){
        error.innerText = "Please enter both numbers";
        error.style.color = "red";
        return;
    }
    error.innerText = ""; // clear error
    result = parseInt(num1.value) + parseInt(num2.value);
    output.value = result;
    console.log(result);
}

const sub = () => {
    if(num1.value === "" || num2.value === ""){
        error.innerText = "Please enter both numbers";
        error.style.color = "red";
        return;
    }
    error.innerText = "";
    result = parseInt(num1.value) - parseInt(num2.value);
    output.value = result;
    console.log(result);
}

const div = () => {
    if(num1.value === "" || num2.value === ""){
        error.innerText = "Please enter both numbers";
        error.style.color = "red";
        return;
    }
    if(parseInt(num2.value) === 0){
        error.innerText = "Cannot divide by zero";
        error.style.color = "red";
        return;
    }
    error.innerText = "";
    result = parseInt(num1.value) / parseInt(num2.value);
    output.value = result;
    console.log(result);
}

const mul = () => {
    if(num1.value === "" || num2.value === ""){
        error.innerText = "Please enter both numbers";
        error.style.color = "red";
        return;
    }
    error.innerText = "";
    result = parseInt(num1.value) * parseInt(num2.value);
    output.value = result;
    console.log(result);
}


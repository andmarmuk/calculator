let a;
let x='';
let y='';
let operator = '';
let buttons = document.querySelectorAll('button');
let numbers = document.querySelectorAll('button.numbers');
let operators = document.querySelectorAll('button.operators');
let ekran = document.getElementById('ekran');
ekran = true;
//display to screen
  for(item of buttons){item.addEventListener('click', function () {
    a = this.value;
    ekran.innerText += a;});}
//clean display
document.getElementById('C').addEventListener("click", function () {
    ekran.innerText = '';
    x='';
    y='';
    operator = '';
})
//numbers:x
for (item of numbers){ item.addEventListener('click', function(){
    if (ekran.innerText >= a, operator =='' ){
        x += a;
        console.log(x);
    } else if (operator!=''){
        y += a;
        console.log(y);
    }});}
//choose operator  
for (item of operators){ item.addEventListener('click', function(){
    if(a == '+'){
    operator = '+';
    } else if (a == '-'){
    operator = '-';
    } else if (a == '*'){
    operator = '*';
    } else if (a == '/'){
    operator = '/';
    } else if (a == 'MOD'){
    operator = 'MOD';
    };
    console.log(operator);
});}
//calculate result
document.getElementById('row').addEventListener("click", function () {
    if(operator == '+'){
        ekran.innerText = (parseFloat)(x) + (parseFloat)(y);
        console.log(ekran.innerText);
    } else if (operator == '-'){
        ekran.innerText = (parseFloat)(x) - (parseFloat)(y);
    } else if (operator == '*'){
        ekran.innerText = (parseFloat)(x) * (parseFloat)(y);
    } else if (operator == '/'){
        ekran.innerText = (parseFloat)(x) % (parseFloat)(y);
    } else if (operator == 'MOD'){
        ekran.innerText = (parseFloat)(x) % (parseFloat)(y);
        console.log(ekran.innerText);
    }});
//change color
document.getElementById('color').addEventListener("click", function () {
theme = document.querySelector('div.all');
if (theme.style.background == ''){
    theme.style.background = '#4747e4';   
} else {
    theme.style.background = '';  
}}); 

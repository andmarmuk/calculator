let a;
let x='';
let y='';
let operator = '';
let buttons = document.querySelectorAll('button');
let numbers = document.querySelectorAll('button.numbers');
let operators = document.querySelectorAll('button.operators');
let ekran = document.getElementById('ekran');

//display to screen
  for(item of buttons){item.addEventListener('click', function () {
    a = this.value;
    // a !== '.'
    a !== '=';
    if ((a == '+' || a == 'MOD' || a == '-' || a == '*' || a == '/') & x == '' ){
    ekran.innerText = '';
    a = '';
    console.log(a)
} else if (a == '.' & (y !=''|| x != '')& !x.includes('.')) {
    ekran.innerText += a;
    console.log(a);
} else if (a == '.' & (y !=''|| x != '')& y > '' & !y.includes('.')) {
    ekran.innerText += a;
    console.log(a);
} else if ((a == '+' || a == 'MOD' || a == '-' || a == '*' || a == '/' ) & x > '' & operator == '' ){
    ekran.innerText += a;
    console.log(a);
} else if (a !== '+' & a !== 'MOD' & a !== '-' & a !== '*' & a !== '/' & a !== operator & a!== '.') { 
    ekran.innerText += a;
    console.log(a);}
})}

//clean display
document.getElementById('C').addEventListener("click", function () {
    ekran.innerText = '';
    x='';
    y='';
    operator = '';
})
//numbers:x
for (item of numbers){ item.addEventListener('click', function(){
    if (x >= '' & operator =='' & a != '.'){
        x += a;
        console.log(x);}
    if (x > '' & operator ==''& a == '.' ){
        x += a;
        console.log(x);}
    if (ekran.innerText == ''& operator ==''& a =='.'  ){
        x != a;
        y != a;
        ekran.innerText = ''
        console.log(x);}
    if (y ==''& a =='.'& x != '' & operator != '' ){
        y != a;
        console.log(x);
    } else if (operator > '' ){
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
    if(operator == '+'& x !=='' & y !== ''){
        ekran.innerText = (parseFloat)(x) + (parseFloat)(y);
        console.log(ekran.innerText);
    } else if (operator == '-'& x !=='' & y !== ''){
        ekran.innerText = (parseFloat)(x) - (parseFloat)(y);
    } else if (operator == '*'& x !=='' & y !== ''){
        ekran.innerText = (parseFloat)(x) * (parseFloat)(y);
    } else if (operator == '/'& x !=='' & y !== '' & y !== '0'){
        ekran.innerText = (parseFloat)(x) / (parseFloat)(y);
    } else if (operator == 'MOD'& x !=='' & y !== ''){
        ekran.innerText = (parseFloat)(x) % (parseFloat)(y);
        console.log(ekran.innerText);
    } else if (operator == '') {ekran.innerText = ''
} else if (x =='' || y == '' || x == '=' || y == '=') {ekran.innerText = ''
} else if (operator == '/'& y == '0'){
    ekran.innerText = 'Choose another number';
} 
    x =  ekran.innerText;
    console.log(x);
    y = '';
    operator = '';
    console.log(y);
});
//change color
document.getElementById('color').addEventListener("click", function () {
theme = document.querySelector('div.all');
if (theme.style.background == ''){
    theme.style.background = '#4747e4';   
} else {
    theme.style.background = '';  
}}); 

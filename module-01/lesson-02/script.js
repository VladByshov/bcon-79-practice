//1
// const a = 7;
// const b = 9;
// console.log(a * b);

//2
const c = 7;
const d = 9;
document.querySelector('.out-2').textContent = (c / d).toFixed(2);

//3
const e = 3;
const f = 5;
document.querySelector('.out-3').textContent = e + f;

//4
const e1 = '3';
const f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1;

//5
const e2 = 3;
const f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;

//6
const e3 = 3;
const f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;

//7
const e4 = 3;
const f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;

//8
const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");

btn8.onclick = fn8;

function fn8() {
  console.log(out8.textContent = input8.value);
  out8.textContent = input8.value;
  input8.value = "";
}


//9
const input9 = document.querySelector('.i-9');
const button9 = document.querySelector('.b-9');
const out9 = document.querySelector('.out-9');

function t9 (){
  out9.textContent = input9.value;
  input9.value = "";
}

button9.onclick = t9;

//10
const input10 = document.querySelector('.i-10');
const button10 = document.querySelector('.b-10');
const out10 = document.querySelector('.out-10');

button10.onclick = t10;

function t10 (){
  if(input10.value === ""){
    alert("Введи число");
    return;
  }
  out10.textContent = +input10.value * 20;
  input10.value = "";
}

//11

document.querySelector('.b-11').onclick = t11;

function t11(){
  document.querySelector('.out-11').textContent = document.querySelector('.i-11').value + 55;
  document.querySelector('.i-11').value = "";
}

//12

const input1 = document.querySelector('.i-12-1');
const input2 = document.querySelector('.i-12-2');

document.querySelector('.b-12').onclick = t12;

function t12(){
  return document.querySelector('.out-12').textContent ="Hello " + input1.value + input2.value ;
}

//13
const a = document.querySelector('.i-13-1');
const b = document.querySelector('.i-13-2');
document.querySelector('.b-13').onclick = t13;

function t13(){
  return document.querySelector('.out-13').textContent = +a.value + +b.value;
}

//14
document.querySelector('.b-14').onclick = t14;

function t14(){
  return document.querySelector('.i-14').value = 'Go' ;
}

//15
document.querySelector('.b-15').onclick = t15;

function t15(){
  document.querySelector('.i-15').style.border = '4px solid red';
}

//16
const input1_2= document.querySelector('.i-16-1');
const input2_2= document.querySelector('.i-16-2');

document.querySelector('.b-16').onclick = t16;

function t16(){
  document.querySelector('.out-16').textContent = input1_2.value + input2_2.value ;
}

//17
const inputNum = document.querySelector('.i-17');
document.querySelector('.b-17').onclick = t17;

function t17(){
   document.querySelector('.out-17-1').textContent = Number(inputNum.value);
   document.querySelector('.out-17-2').textContent = parseInt(inputNum.value);
   document.querySelector('.out-17-3').textContent = parseFloat(inputNum.value);
}

//18
const a1 = document.querySelector('.i-18');
document.querySelector('.b-18').onclick = t18;

function t18(){
    document.querySelector('.out-18').textContent = parseFloat(a1.value);
}


//19
const a2 = document.querySelector('.i-19-1');
const b2 = document.querySelector('.i-19-2');

document.querySelector('.b-19').onclick = t19;

function t19(){
  document.querySelector('.out-19').textContent = +a2.value + +b2.value;
}


//20
document.querySelector('.b-20').onclick = t20;

let i = 0;

function t20(){
  document.querySelector('.out-20').textContent = ++i;
}





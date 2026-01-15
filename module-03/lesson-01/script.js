// Task-1
const btn1 = document.querySelector(".b-1");
const ar1 = ["random", true, 2, 15, -5];

btn1.onclick = fn1;

function fn1() {
const out1 = document.querySelector(".out-1");
out1.textContent = `[${ar1}]`;

}

// Task-2
const btn2 = document.querySelector(".b-2");
const ar2 = ["random", true, 2, 15, -5];
btn2.onclick = fn2;
function fn2() {
const out2 = document.querySelector(".out-2");
out2.textContent = `[${ar1}]`;

}


// Task-3
const btn3 = document.querySelector(".b-3");
const ar3 = ["random", true, 2, 15, -5];

btn3.onclick = fn3;

function fn3() {
const out3 = document.querySelector(".out-3");

out3.textContent = ar3.length;
}

// Task-4
const btn4 = document.querySelector(".b-4");
const ar4 = Array.from(Array(10).keys(), x => x + 1);
// the same as Array.from(Array(10).keys(), x => x + 1);      const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btn4.onclick = fn4;

function fn4() {
const out4 = document.querySelector(".out-4");

out4.textContent = `${ar4[0]} ${ar4[3]} ${ar4[8]}`;
}


// Task-5
const btn5 = document.querySelector(".b-5");
const ar5 = Array.from(Array(10).keys(), x => (x + 1)*10);

btn5.onclick = fn5;

function fn5() {
const out5 = document.querySelector(".out-5");

out5.textContent = `${ar5[0]} ${ar5[2]} ${ar5[3]}`;
}



// Task-6

const btn6 = document.querySelector(".b-6");
const ar6 = ["Olexy", "Teresy", "Monday", "April"];

btn6.onclick = fn6;

function fn6() {
const out6 = document.querySelector(".out-6");
let result = "";
// for (const item of ar6) {
// let result += item + "";
// }

 out6.textContent = ar6.join(" ");
}
// Task-7 задача прописати через цикл for( of )
const btn7 = document.querySelector(".b-7");
const ar7 = [];

btn7.onclick = f7;

function f7() {
const out7 = document.querySelector(".out-7");
let result = "";
ar7[7] = "vietnam";
ar7[6] = "turkey";
ar7[5] = "italy"

for (const item of ar7) {
  result += item + " ";
}
out7.textContent = result;
}  //видаватиме  indefined на перші 4 елементи. Слід прописати цикл тільки для 5-7 елемент без  of

// Task-8 
// const btn8 = document.querySelector(".b-8");
// const arr8 = [];

// btn8.onclick = fn8;

// function fn8() {
// const out8 = document.querySelector(".out-8");
// const out81 = document.querySelector(".out-8-1");
// let result = "";
// TO FINISH-no screen
// arr7[3] = "";
// arr7[4] = "";
// arr7[5] = ""

// for (const item of arr7) {
//   result += item + "";
// }
// out7.textContent = result;
// }

// Task-9

// Task-10

// Task-11

// Task-12

// Task-13

// Task-14

// Task-15

// Task-16

// Task-17

// Task-18

// Task-19

// Task-20

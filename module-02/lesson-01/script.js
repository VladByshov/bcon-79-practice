// Task 1
// При натисканні кнопки .b-1 спрацьовує функція f1. Функція повинна прочитати вміст .i-1 і порівняти його з числом 4 (порівняння ==). Результат порівняння - true або false виведіть у .out-1.
const input = document.querySelector('.i-1');
document.querySelector('.b-1').onclick = f1;
function f1() {
    document.querySelector('.out-1').textContent = input.value == 4;
}

// Task 2
// Дані дві змінні a21 і a22. При натисканні кнопки .b-2, запускається функція f2. Функція повинна порівняти змінні за допомогою if else і вивести в .out-2 число, яке більше. Варіант рівності змінних не розглядаємо.

let a21 = 8;
let a22 = 5;
document.querySelector('.b-2').onclick = f2;
function f2() {
  document.querySelector('.out-2').textContent = a21 > a22 ? a21 : a22;
}

// Task 3
// Дані 2 input - .i-31 і .i-32, обидва - input[type=number]. При натисканні кнопки .b-3 спрацьовує функція f3. Функція повинна порівняти числа з input, вивести в .out-3 більше число.
// Проведіть самостійний тест роботи, введіть пари чисел 4 і 9, 9 і 22, 5 і 111.
const input1 =  document.querySelector('.i-31');
const input2 =  document.querySelector('.i-32');
document.querySelector('.b-3').onclick = f3;

function f3() {
  document.querySelector('.out-3').textContent = +input1.value > +input2.value ? +input1.value : +input2.value;
}

// Task 4.
// Користувач вводить в .i-4 рік свого народження. Є кнопка .b-4, яка запускає функцію f4. Функція повинна вивести в .out-4 число 1, якщо користувачеві більше або дорівнює 18 років, і 0, якщо менше.

const dateNow = 2026;
document.querySelector('.b-4').onclick = f4;

function f4(){
  const yearsOld = 2026 - +document.querySelector('.i-4').value;
  document.querySelector('.out-4').textContent = yearsOld >= 18 ? 1 : 0;
}

// Task 5.
// На сторінці є input з класом i-5, куди користувач може ввести число. Є кнопка b-5, яка запускає функцію f5. Функція повинна вивести в .out-5 символ 'm' - якщо число менше нуля, 0 - якщо число дорівнює нулю, і число 1 - якщо більше.

const input5 = document.querySelector(".i-5");
const out5 = document.querySelector(".out-5");
const btn5 = document.querySelector(".b-5");

console.log(typeof input5.value);

btn5.onclick = f5;

function f5(){
  if(+input5.value < 0){
      out5.textContent = 'm';
  } else if(+input5.value === 0){
    out5.textContent = 0;
  } else {
    out5.textContent = '1';
  }
}

// Task 6.
// На сторінці є input з класом i-6, куди користувач може ввести число. Є кнопка .b-6, яка запускає функцію f6. Функція повинна вивести в .out-6 слово even, якщо число парне, і odd, якщо непарне. Для перевірки парності використовується цілочисельна остача від ділення на 2 (оператор %). Якщо остача дорівнює нулю - парне, ні - непарне.
const input6 = document.querySelector(".i-6");
const out6 = document.querySelector(".out-6");
const btn6 = document.querySelector(".b-6");

btn6.onclick = f6;

function f6(){
  if(+input6.value%2 === 0){
    out6.textContent = 'even';
  } else {
    out6.textContent = 'odd';
  }
}

// Task 7.
// Дані 2 input - .i-71 і .i-72, обидва - input[type=number]. При натисканні кнопки .b-7 спрацьовує функція f7. Функція повинна число з .i-71 піднести до степеня .i-72, вивести результат в .out-7. Для піднесення до степеня можна використовувати **, або Math.pow.
const input71 = document.querySelector(".i-71");
const input72 = document.querySelector(".i-72");
const out7 = document.querySelector(".out-7");
const btn7 = document.querySelector(".b-7");

btn7.onclick = f7;

function f7(){
  console.log(out7.textContent = 'chtoto');
  // out7.textContent = Math.pow(input71.value,input72.value);
}

// Task 8.
// Дано select s-8, який містить 3 значення: 1, 2, 3. Дана кнопка b-8. При її натисканні спрацьовує функція f8. Функція повинна отримати обране в select число, потім за допомогою switch case порівняти його по черзі з 1, 2, 3. І якщо вибрано число 1, то вивести в .out-8 рядок one, якщо 2 - two, якщо 3 - three. Нагадую - це програмування. Як зазначено в завданні - так і виводимо. Тобто Three з великої літери - помилка!
const select8 = document.querySelector(".s-8");
const out8 = document.querySelector(".out-8");
const btn8 = document.querySelector(".b-8");

btn8.onclick = f8;

function f8(){
  const numSwitch = +select8.value;
    switch (numSwitch){
      case 1:
        out8.textContent = 'one';
        break;
        case 2:
          out8.textContent = 'two';
          break;
          case 3:
            out8.textContent = 'three';
            break;
    }
}

// Task 9
// Є input з класом .i-9, куди користувач може ввести номер квартири. Є кнопка .b-9, яка запускає функцію f9. Функція повинна вивести в .out-9 номер під'їзду, в якому знаходиться квартира.
//  якщо від 1 включно до 32 включно - то вивести цифру 1
//  якщо від 33 (включно) до 43 (включно) - то вивести 2
//  якщо від 44 (включно) до 64 (включно) - то 3.
//  В іншому випадку, вивести 0.

document.querySelector('.b-9').onclick = f9;

function f9(){
  const numFloor = +document.querySelector('.i-9').value;
  let out9 = document.querySelector('.out-9');
  if(numFloor > 0 && numFloor <= 32){
      out9.textContent = 1;
  } else if (33 <= numFloor && numFloor <= 43){
    out9.textContent = 2;
  } else if (44 <= numFloor && numFloor <= 64){
    out9.textContent = 3;
  } else out9.textContent = "Floor doesn't exist";
}


// Task 10
// Дано select .s-100. Після натискання кнопки, виведіть value обраного option в .out-10.
const select10 = document.querySelector(".s-100");
const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");

btn10.onclick = f10;
function f10() {
 if(+select10.value === +select10.value){
   out10.textContent = select10.value;
 } else {
   return 'Nothing';
 }
}

// Task 11
// Дано select .s-110. При зміні стану select (подія onchange) виведіть value обраного option в .out-11.
const select11 = document.querySelector(".s-110");
const out11 = document.querySelector(".out-11");

select11.onchange = f11;
function f11(){
switch(+select11.value){
  case 6:
    out11.textContent = select11.value;
    break;
  case 7:
    out11.textContent = select11.value;
    break;
  case 11:
    out11.textContent = select11.value;
    break;
    case 9:
      out11.textContent = select11.value;
      break;
}
  }

// Task 12
// Дано input .i-120. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в .out-12 typeof отриманої змінної. Typeof дозволяє визначити тип даних.

document.querySelector('.b-12').onclick = f12;
const inp1 = document.querySelector('.i-120').value;

function f12(){
  document.querySelector('.out-12').textContent = typeof inp1;
}


// Task 13
// Дано input i-130. На відміну від попереднього завдання - input[type="number"]. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в out-13 typeof отриманої змінної. Typeof дозволяє визначити тип даних. Якщо ви правильно все зробили - то дивно, але тип даних буде string! Подумайте чому так?

document.querySelector('.b-13').onclick = f13;
const inp2 = document.querySelector('.i-130').value;

function f13(){
  document.querySelector('.out-13').textContent = typeof inp2;
}

// Task 14
// Дано input .i-141 і .i-142, [type=number]. Дано select .s-143, який містить чотири операції - +, -, *, / . Дана кнопка b-14, при натисканні на яку спрацьовує функція f14. Функція виводить в .out-14 результат операцій, обраних в 3-му select, до чисел, введених в першому і другому input. Наприклад вибрано 1 13 +, потрібно вивести результат операції 1+13 тобто 14.

document.querySelector('.b-14').onclick = f14;
const s143 = document.querySelector('.s-143');
const out14 = document.querySelector('.out-14');

function f14(){
  const i141 = Number(document.querySelector('.i-141').value);
  const i142 = Number(document.querySelector('.i-142').value);
  switch(s143.value){
    case '+':
      out14.textContent = i141 + i142;
      break;
    case '-':
      out14.textContent = i141 - i142;
      break;
    case '*':
      out14.textContent = i141 * i142;
      break;
    case '/':
      out14.textContent = i141 / i142;
      break;
  }
}
// Task 15
// Дано select .s-151 і .s-152, кожен з яких містить 1 і 0. Дано select .s-153, який містить дві операції - && і || . Дана кнопка .b-15, при натисканні на яку спрацьовує функція f15. Функція виводить в .out-15 результат логічних операцій, обраних в 3 select, до чисел, обраних в першому і другому select. Наприклад, вибрано 1 1 &&, потрібно вивести результат операції 1&&1 тобто 1 або 0.

document.querySelector('.b-15').onclick = f15;

function f15(){
  const s151 =  Number(document.querySelector('.s-151').value);
  const s152 =  Number(document.querySelector('.s-152').value);
  const s153 =  document.querySelector('.s-153').value;
  document.querySelector('.out-15').textContent = s153 === '&&' ? s151 && s152 : s151 || s152;
}

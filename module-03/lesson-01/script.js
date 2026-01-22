// 1

const ar1 = ['hello', 42, true, 'world', false, 3.14];
document.querySelector('.b-1').addEventListener('click', () => {
  document.querySelector('.out-1').textContent = ar1.join(' ');
});

// 2
const ar2 = ['hello', 42, true, 'world', false, 3.14];
document.querySelector('.b-2').addEventListener('click', () => {
  document.querySelector('.out-2').textContent = ar1.join(' ');
});

// 3
const ar3 = [3,4,5,6,3];
document.querySelector('.b-3').addEventListener('click', () => document.querySelector('.out-3').textContent = ar3.length);

// 4
const ar4 = ['hello', 42, true, 'world', false, 3.14, 5 ,6 ,7];
document.querySelector('.b-4').addEventListener('click', () => {
  // document.querySelector('.out-4').textContent = ar4[0] + ' ' + ar4[3] + ' ' + ar4[8];
  document.querySelector('.out-4').textContent = `${ar4[0]} ${ar4[3]} ${ar4[8]}`;
})

//5
const ar5 = [3,4,5,6,3,7,5];
document.querySelector('.b-5').addEventListener('click', () => {
  document.querySelector('.out-5').textContent = ar5[0]+ar5[2]+ar5[3];
})

//6
const ar6 = ['Vlad', 'Cancer', 16, 'July'];
document.querySelector('.b-6').addEventListener('click', () => {
  document.querySelector('.out-6').textContent = `${ar6[0]} ${ar6[1]} ${ar6[2]} ${ar6[3]}`;
})

//7
const ar7 = [];
document.querySelector('.b-7').onclick = f7;

function f7 () {
  ar7[7] = 'vietnam';
  ar7[6] = 'turkey';
  ar7[5] = 'italy';
  document.querySelector('.out-7').textContent = ar7.join(' ');
}

//8
const ar8 = [];
document.querySelector('.b-8').onclick = f8;

function f8 () {
  ar8[3] = 3.14;
  ar8[4] = 17;
  ar8[6] = 5;
  document.querySelector('.out-8').textContent = `${ar8[3]}-${ar8[4]}-${ar8[6]}`;
  document.querySelector('.out-8-1').textContent = ar8.length;
}






//15

const ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
document.querySelector('.b-15').onclick = f15;

function f15 () {
  for (const number of ar15) {
    if (number > 0){
      document.querySelector('.out-15').textContent += number + ' ';
    }
  }
}

//16

const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const ar16_odd = [];
const ar16_even = [];

document.querySelector('.b-16').onclick = f16;

function f16() {
  for (const number of ar16) {
    if (number%2 === 0){
      ar16_odd.push(number);
    } else {
      ar16_even.push(number);
    }
  }
  document.querySelector('.out-16-odd').textContent = ar16_odd.join(' ');
  document.querySelector('.out-16-even').textContent = ar16_even.join(' ');
}


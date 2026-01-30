// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};

// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

// Task 5
const obj5 = {
  one: 1,
  two: 2,
};

const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");
btn5.onclick = () => {
  fn5(obj5, out5);
};
function fn5(obj, output) {
  for (const key in obj) {
    let str = `${key} ${obj[key]} <br>`;
    output.innerHTML += str;
  }
  return output;
}

// Task 6
const obj6 = {
  b: 17,
  e: 22,
};

const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
const inp61 = document.querySelector(".i-61");
const inp62 = document.querySelector(".i-62");

btn6.onclick = () => {
  fn6(fn5);
};
function fn6(objKey, objValue, fn5) {
  objKey = inp61.value;
  objValue = inp62.value;
  obj6[objKey] = objValue;
  fn5(obj6, out6);
}

const result = (a, b) => {
  a + b;
};
console.log(result(2, 3));
// Task 7
const obj7 = {
  b: 17,
  e: 22,
};

function fn7() {}

// Task 8
const obj8 = {
  b: 17,
  e: 22,
};

// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
};

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

// Task 16
const obj16 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};

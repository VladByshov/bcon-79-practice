// Найбільше число в масиві
//Дано масив чисел:

const numbers = [10, 25, 48, 7, 32, 18];
//Завдання: Знайдіть найбільше число за допомогою reduce.
//Очікуваний результат:
//48

// const maxNumber = numbers.reduce((max, current) => {
//   return current > max ? current : max;
// }, numbers[0]);

const result = numbers.reduce((prev, curr) => {
  // return Math.max(prev, curr);
  return prev > curr ? prev : curr;
}, 0);

console.log(result); // Виведе: 48

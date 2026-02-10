//Згладження вкладеного масиву
//Дано вкладений масив:

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
//Завдання: За допомогою reduce перетворіть вкладений масив у плаский.
//Очікуваний результат:
//[1, 2, 3, 4, 5, 6]

const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);

console.log(flatArray); // Виведе: [1, 2, 3, 4, 5, 6]

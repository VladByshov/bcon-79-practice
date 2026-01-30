// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній
function letMeSeeYourName(callback) {
  // let result;
  // do {
  //     result = prompt("Введіть ваше ім'я:");
  // } while (!result);
  // callback(result);

  // const result = prompt("Введіть ваше ім'я:");
  // if (!result) {
  //     alert("Ім'я не може бути порожнім. Спробуйте ще раз.");
  //     return letMeSeeYourName(callback);
  // }
  // else return callback(result);
  let result = "";
  while (!result) {
    result = prompt("Введіть ваше ім'я:");
  }
  return callback(result);
}

function greet(name) {
  console.log(`Привіт ${name}`);
}

letMeSeeYourName(greet);

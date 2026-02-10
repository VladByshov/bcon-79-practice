// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

function savePassword(password) {
  return function (str) {
    return str === password;
  };
}

const checkPassword = savePassword("mySecretPassword");

console.log(checkPassword("mySecretPassword")); // true
console.log(checkPassword("wrongPassword")); // false

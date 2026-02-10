//Підрахунок загальної вартості товарів
//Дано масив товарів:
const cart = [
  { product: "Apple", price: 1, quantity: 4 },
  { product: "Banana", price: 0.5, quantity: 10 },
  { product: "Orange", price: 0.8, quantity: 6 },
];
//Завдання: За допомогою reduce підрахуйте загальну вартість усіх товарів у кошику.
//Очікуваний результат:
//13.8

const totalPrice = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
console.log(totalPrice); //13.8

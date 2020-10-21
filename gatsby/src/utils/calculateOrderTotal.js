import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  // loop over each item in the order
  const total = order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find((pza) => pza.id === singleOrder.id);
    // add that total to the running total
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
  // calc the total for that pizza
  return total;
}

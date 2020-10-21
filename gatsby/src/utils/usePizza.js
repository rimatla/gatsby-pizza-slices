import React, { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // 1. Create some state to hold our order

  // No longer needed | Getting state from Context
  // const [order, setOrder] = useState([]);

  const [order, setOrder] = useContext(OrderContext);
  // 2. Make a function add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // 3. Make a function remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1), // to the end of the array
    ]);
  }

  // this is the function that is run when someone submits the form
  // 4. Send this data the a serverless function when they check out
  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}

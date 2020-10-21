import React, { useState } from 'react';

// create order context
const OrderContext = React.createContext();

// Provider
export function OrderProvider({ children }) {
  // need to stick state
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;

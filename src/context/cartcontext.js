import { createContext, useState } from "react";
import products from "../data";
import { logDOM } from "@testing-library/react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [data, setData] = useState(products);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // if (product.id !== cart.id) {
    //   setCart([product]);
    // } else setCart([...cart, product]);
    // console.log(cart.id);
    setCart((currentCart) => {
      if (currentCart.id !== product.id) {
        return [...currentCart, product];
      } else {
        
      }
    });
  };

  return (
    <CartContext.Provider value={{ data, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;

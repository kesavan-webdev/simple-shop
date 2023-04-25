import { createContext, useState } from "react";
import products from "../data";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [data, setData] = useState(products);
  const [cart, setCart] = useState([]);
  // let [qty, setQty] = useState(0);

  const addToCart = (product) => {
    // if (product.id !== cart.id) {
    //   setCart([product]);
    // } else setCart([...cart, product]);
    // console.log(cart.id);

    cart.find((item) => item.id === product.id)
      ? cart.map((item) =>
          item.id === product.id
            ? console.log(setCart([{ ...item, count: item.count + 1 }]))
            : console.log(item)
        )
      : console.log(setCart([...cart, { ...product, count: 1 }]));
    console.log(cart);

    // setCart((currentCart) => {
    //   if (currentCart.id !== product.id) {
    //     return [...currentCart, product];
    //   } else {
    //   }
    // });

    //   setCart({
    //     ...cart,
    //     cart: cart.find((cartItem) => cartItem.id === product.id)
    //       ? cart.map((cartItem) =>
    //           cartItem.id === product.id
    //             ? { ...cartItem, count: cartItem.count + 1 }
    //             : cartItem
    //         )
    //       : [...cart, { ...product, count: 1 }],
    //   });
    // };

    //   setCart(
    //     ...cart,
    //     cart.find((cartItem) => cartItem.id === product.id)
    //       ? cart.map((cartItem) =>
    //           cartItem.id === product.id
    //             ? { ...cartItem, count: cartItem.count + 1 }
    //             : cartItem
    //         )
    //       : [...cart, { ...product, count: 1 }]
    //   );
    //   console.log(cart);
    // };

    // const increase = (product) => {
    //   cart.find((item) => item.id === product.id) ? setQty(++qty) : setQty(0);
    // };

    // const deleteItem = (product) => {
    //   cart ? setCart(cart.filter((item) => item.id !== product.id)) : setCart([]);
  };

  return (
    <CartContext.Provider value={{ data, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;

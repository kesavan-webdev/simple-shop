import CartContext from "../../context/cartcontext";
import { useContext } from "react";

const Shop = () => {
  const { cart } = useContext(CartContext);
  return cart.map((item) => {
    const { title, price } = item;
    return (
      <>
        <div className="card">
          <h4>{title}</h4>
          <h4>{price}</h4>
          <button onClick={""}>delete</button>
          <button onClick={""}> increase</button>
          <button onClick={""}>decrease</button>
        </div>
      </>
    );
  });
};

export default Shop;

import "./home.styles.css";

import { useContext } from "react";
import CartContext from "../../context/cartcontext";

const Home = () => {
  const { data, addToCart } = useContext(CartContext);
  return data.map((item) => {
    const { title, price } = item;
    return (
      <>
        <div className="card">
          <h4>{title}</h4>
          <h4>{price}</h4>
          <button onClick={() => addToCart(item)}>add to cart</button>
        </div>
      </>
    );
  });
};

export default Home;

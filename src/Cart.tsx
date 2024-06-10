import { useContext } from "react";
import { CartContext } from "./App";
import { Link } from "react-router-dom";

function Cart() {
  const [cartContent] = useContext(CartContext);

  const numberOfProductPerId: Record<string, number> = {};
  cartContent.forEach((product) => {
    const stringId = "" + product.id;
    if (Object.keys(numberOfProductPerId).includes(stringId)) {
      numberOfProductPerId[stringId] = numberOfProductPerId[stringId] + 1;
    } else {
      numberOfProductPerId[stringId] = 1;
    }
  });

  return (
    <div>
      <Link to="/products">vers produits</Link>
      <h1>Panier</h1>
      <div>
        {Object.keys(numberOfProductPerId).map((key) => {
          return (
            <div>
              <p>Nombre : {numberOfProductPerId[key]}</p>
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;

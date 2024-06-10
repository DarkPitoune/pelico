import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import { Product } from "./assets/types";
import { createContext, useState } from "react";
import Cart from "./Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export const CartContext = createContext<
  [Product[], React.Dispatch<React.SetStateAction<Product[]>>]
>([[], () => {}]);

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;

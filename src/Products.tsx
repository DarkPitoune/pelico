import { useEffect, useState } from "react";
import { Product } from "./assets/types";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProductsFromAPI = async () => {
    const res = await fetch("https://fakestoreapi.com/products/").then((res) =>
      res.json()
    );
    setProducts(res);
  };

  useEffect(() => {
    getProductsFromAPI();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          {product.title}
        </Link>
      ))}
    </div>
  );
}

export default Products;

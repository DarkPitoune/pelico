import { useCallback, useContext, useEffect, useState } from "react";
import { Product } from "./assets/types";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "./App";

function ProductDetail() {
  const { productId } = useParams();

  const [productDetail, setProductDetail] = useState<Product>();

  const getProductDetailFromAPI = async () => {
    const res = await fetch(
      "https://fakestoreapi.com/products/" + productId
    ).then((res) => res.json());
    setProductDetail(res);
  };

  const [cartContent, setCart] = useContext(CartContext);

  const addToCart = useCallback(() => {
    if (!productDetail) return;
    setCart((cart) => {
      return [productDetail, ...cart];
    });
  }, [productDetail]);

  useEffect(() => {
    getProductDetailFromAPI();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/cart">vers le Panier</Link>
      {productDetail && (
        <>
          <h1>{productDetail.title}</h1>
          <span>{productDetail.price}</span>
          <button onClick={addToCart}>Ajouter au panier</button>
          <img src={productDetail.image} alt={productDetail.description} />
        </>
      )}
    </div>
  );
}

export default ProductDetail;

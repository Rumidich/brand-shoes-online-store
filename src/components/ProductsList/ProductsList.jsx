import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { getProducts, products } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Link to="/add">
        <button>Add New</button>
      </Link>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;

import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";
import { Pagination } from "antd";

const ProductsList = () => {
  const { getProducts, products, pages } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
          {products.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <div style={{ display: "flex", justifyConent: "center" }}>
          <Pagination
            // defaultCurrent={currentPage}
            // total={pages}
            page={currentPage}
            count={pages}
            onChange={(e, page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};

export default ProductsList;

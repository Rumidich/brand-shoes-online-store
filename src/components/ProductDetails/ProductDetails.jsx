import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Loader from "../Loader/Loader";

const ProductsDetails = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useContext(productsContext);

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return oneProduct ? (
    <>
      <Button type="primary" onClick={showModal}>
        Open for Details
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        cancelButtonProps={{
          disabled: true,
        }}>
        <p>{oneProduct.title}</p>
        <p>{oneProduct.description}</p>
        <p>{oneProduct.price}</p>
        <p>{oneProduct.category}</p>
        <p>{oneProduct.image}</p>
      </Modal>
    </>
  ) : (
    <Loader />
  );
};

export default ProductsDetails;

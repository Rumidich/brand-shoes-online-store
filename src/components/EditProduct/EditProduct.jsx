import { Button, Input, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Loader from "../Loader/Loader";

const EditProduct = () => {
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { Title } = Typography;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setCategory(oneProduct.category);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  function handleSave() {
    const updatedProduct = {
      title,
      price,
      description,
      category,
      image,
    };
    updateProduct(id, updatedProduct);
    navigate("/shop");
  }

  return oneProduct ? (
    <div style={{ maxWidth: "40%" }}>
      <Title level={4}>Update Product</Title>
      <Input
        placeholder="Title"
        defaultValue={title}
        value={title}
        label="Title"
        onChange={e => setTitle(e.target.value)}
      />
      <Input
        placeholder="Price"
        defaultValue={price}
        value={price}
        label="Price"
        onChange={e => setPrice(e.target.value)}
      />
      <Input
        placeholder="Description"
        defaultValue={description}
        value={description}
        label="Description"
        onChange={e => setDescription(e.target.value)}
      />
      <Input
        placeholder="Category"
        defaultValue={category}
        value={category}
        label="Category"
        onChange={e => setCategory(e.target.value)}
      />
      <Input
        placeholder="Image"
        defaultValue={image}
        value={image}
        label="Image"
        onChange={e => setImage(e.target.value)}
      />
      <Button onClick={handleSave}>Save</Button>
    </div>
  ) : (
    <Loader />
  );
};

export default EditProduct;

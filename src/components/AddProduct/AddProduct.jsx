import React from "react";

import { useState } from "react";
import { useContext } from "react";

import { Button, Input, Space } from "antd";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

const AddProduct = () => {
  const { addProduct } = useContext(productsContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    const newProduct = {
      title,
      price,
      description,
      category,
      image,
    };
    if (
      !title.trim("") ||
      !price.trim("") ||
      !description.trim("") ||
      !category.trim("") ||
      !image.trim("")
    ) {
      alert("All ");
    } else {
      addProduct(newProduct);
    }
  }

  return (
    <Space
      direction="vertical"
      style={{
        width: "30%",
      }}>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        defaultValue="name"
      />
      <Input
        value={price}
        onChange={e => setPrice(e.target.value)}
        defaultValue="price"
      />
      <Input
        value={description}
        onChange={e => setDescription(e.target.value)}
        defaultValue="description"
      />
      <Input
        value={category}
        onChange={e => setCategory(e.target.value)}
        defaultValue="description"
      />
      <Input
        value={image}
        onChange={e => setImage(e.target.value)}
        defaultValue="image"
      />
      <Link to="/store">
        <Button onClick={() => handleSave()} type="primary">
          Add
        </Button>
      </Link>
    </Space>
  );
    };

export default AddProduct;

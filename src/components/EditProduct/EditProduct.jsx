import { CameraOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

const EditProduct = () => {
  const {
    getCategories,
    categories,
    getOneProduct,
    oneProduct,
    updateProduct,
  } = useContext(productsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { Title } = Typography;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    getCategories();
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setDescription(oneProduct.description);
      setCategory(oneProduct.category.id);
      setSize(oneProduct.size);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  function handleSave() {
    let editedProduct = new FormData();
    editedProduct.append("title", title);
    editedProduct.append("description", description);
    editedProduct.append("price", price);
    editedProduct.append("category", category);
    editedProduct.append("size", size);
    if (image) {
      editedProduct.append("image", image);
    }
    updateProduct(id, editedProduct, navigate);
  }

  return (
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
        onChange={e => setImage(e.target.files[0])}
      />
      <Input
        placeholder="Size"
        defaultValue={size}
        value={size}
        label="Size"
        onChange={e => setSize(e.target.value)}
      />
      <CameraOutlined />
      {image ? <Typography variant="span">{image.name}</Typography> : null}
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default EditProduct;

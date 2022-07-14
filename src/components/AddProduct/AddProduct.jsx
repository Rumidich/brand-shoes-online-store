import React, { useEffect } from "react";

import { useState } from "react";
import { useContext } from "react";

import { Button, Input, Select, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import productsContext from "../../contexts/productsContext";
import MenuItem from "antd/lib/menu/MenuItem";
import { FormContext } from "antd/lib/form/context";
import { CameraOutlined } from "@ant-design/icons";

const AddProduct = () => {
  const navigate = useNavigate();
  const { getCategories, categories, addProduct } = useContext(productsContext);

  const { Option } = Select;

  const [title, setTitle] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [brand, setBrand] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  function handleSave() {
    let newProduct = new FormData();
    // if (
    //   !title.trim("") ||
    //   !size.trim("") ||
    //   !price.trim("") ||
    //   !description.trim("") ||
    //   !category.trim("") ||
    //   !image.trim("") ||
    //   !brand.trim("")
    // ) {
    //   alert("All fields are required to be filled in ");
    // } else {
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("size", size);
    newProduct.append("brand", brand);
    newProduct.append("category", category);
    newProduct.append("image", image);
    addProduct(newProduct, navigate);
    // }
  }

  return (
    <Space
      direction="vertical"
      style={{
        width: "40%",
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}>
      <Typography>Add Product</Typography>
      <Input
        value={title}
        placeholder="title"
        onChange={e => setTitle(e.target.value)}
      />
      {/* <h3>Price</h3> */}
      <Input
        value={price}
        onChange={e => setPrice(e.target.value)}
        defaultValue="price"
      />
      {/* <h3>Description</h3> */}
      <Input
        value={description}
        onChange={e => setDescription(e.target.value)}
        defaultValue="description"
      />
      {/* <h3>Category</h3> */}
      <Input
        value={category}
        onChange={e => setCategory(e.target.value)}
        defaultValue="description"
      />
      {/* <FormContext> */}
      <Select
        showSearch
        placeholder="Category"
        optionFilterProp="children"
        onChange={e => setCategory(e.target.value)}
        value={category}>
        <Option value="Men">Men</Option>
        <Option value="Women">Women</Option>

        {categories.map(item => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
      {/* </FormContext> */}

      {/* <h3>Image</h3> */}
      <Input
        value={image}
        onChange={e => setImage(e.target.files[0])}
        defaultValue="image"
        accept="image/*"
      />
      {/* <h3>Brand</h3> */}
      <Input
        value={brand}
        onChange={e => setBrand(e.target.value)}
        defaultValue="image"
      />
      {/* <h3>Size</h3> */}
      <Input
        value={size}
        onChange={e => setSize(e.target.value)}
        defaultValue="image"
      />
      <CameraOutlined />
      <Link to="/store">
        <Button onClick={handleSave} type="primary">
          Add
        </Button>
      </Link>
    </Space>
  );
};

export default AddProduct;

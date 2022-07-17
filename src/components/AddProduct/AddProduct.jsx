import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/productsContext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PhotoCamera } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct, categories, getCategories } = useContext(productsContext);

  const [title, setTitle] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");

  // useEffect(() => {
  //   getCategories();
  // }, []);
  // console.log(categories);

  function handleSave() {
    let newProduct = {
      // if (
      //   !title.trim("") ||
      //   !size.trim("") ||
      //   !price.trim("") ||
      //   !description.trim("") ||
      //   !brand.trim("") ||
      //   !image.trim("")
      // ) {
      //   alert("All fields are required to be filled in ");
      // } else {
      title,
      description,
      price,
      size,
      image,
    };
    // newProduct.append("category", category);
    // newProduct.append("image", image);
    addProduct(newProduct, navigate);
    // }
  }

  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="h6">Add product</Typography>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          label="Brand"
          variant="outlined"
          value={brand}
          onChange={e => setBrand(e.target.value)}
        />
        <TextField
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          label="Size"
          variant="outlined"
          value={size}
          onChange={e => setSize(e.target.value)}
        />

        {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={e => setCategory(e.target.value)}>
            {categories.map(item => (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
        {/* <TextField
          label="Category"
          variant="outlined"
          value={category}
          onChange={e => setCategory(e.target.value)}
        /> */}
        <TextField
          label="Image"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />

        {/* <Box>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label">
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={e => setImage(e.target.files[0])}
            />
            <PhotoCamera />
          </IconButton>
          {image ? <Typography variant="span">{image.name}</Typography> : null}
        </Box> */}
        <Button variant="contained" color="secondary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AddProduct;

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
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    // getCategories,
    // categories,
    updateProduct,
    getOneProduct,
    oneProduct,
  } = useContext(productsContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    // getCategories();
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setDescription(oneProduct.description);
      // setCategory(oneProduct.category);
      setSize(oneProduct.size);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  function handleSave() {
    let editedProduct = {
      title,
      description,
      price,
      size,
      image,
    };
    updateProduct(id, editedProduct, navigate);
  }

  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="h6">Edit product</Typography>
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
        <TextField
          label="Image"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        {/* <TextField
          label="Category"
          variant="outlined"
          value={size}
          onChange={e => setCategory(e.target.value)}
        /> */}
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

export default EditProduct;

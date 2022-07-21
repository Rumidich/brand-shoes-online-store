import React from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

import "../Cart/cart.css";
import { Input } from "@mui/material";
import { favContext } from "../../contexts/FavoriteContext";

export default function Fav() {
  const navigate = useNavigate();
  const { getFav, fav, deleteFromFav } = React.useContext(favContext);

  React.useEffect(() => {
    getFav();
  }, []);
  console.log(fav);
  return fav ? (
    <>
      {" "}
      <section
        style={{
          marginTop: "80px",
          color: "black",
        }}>
        <h1>Favorites</h1>
        <ul
          style={{
            margin: "20px",
            display: "flex",
            flexWrap: "wrap",
          }}
          className="products">
          {fav.shoes.map(product => {
            return (
              <Card sx={{ maxWidth: 345, margin: "60px 20px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.item.image}
                  alt="green-iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.item.price} <br />
                    {product.item.author} <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => deleteFromFav(product.item.id)}>
                    Delete
                  </Button>
                  <Button
                    size="small"
                    color="success"
                    onClick={() => navigate(`/products/${product.item.id}`)}>
                    Details
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </ul>
      </section>
    </>
  ) : (
    <Loader />
  );
}

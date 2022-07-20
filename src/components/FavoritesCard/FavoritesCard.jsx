import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { productsContext } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";

export default function FavoritesCard(item) {
  const navigate = useNavigate();
  const { switchFavorites } = React.useContext(productsContext);
  return (
    <Card sx={{ maxWidth: 345, marginTop: "60px" }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="green-iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price} <br />
          {item.author} <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={() => switchFavorites(item.id)}>
          Delete
        </Button>
        <Button
          size="small"
          color="success"
          onClick={() => navigate(`/products/${item.id}`)}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

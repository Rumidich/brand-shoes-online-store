import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { productsContext } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import { cartContext } from "../../contexts/cartContext";

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ item }) {
  const { checkShoeInCart, addToCart } = React.useContext(cartContext);
  const [shoeState, setShoeState] = React.useState(checkShoeInCart(item.id));

  const navigate = useNavigate();
  const { deleteProduct, toggleLike, addToFavorites, toggleFavorites } =
    React.useContext(productsContext);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(item);
  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            onClick={() => navigate(`/products/${item.id}`)}>
            <MoreVertIcon />
          </IconButton>
        }
        title={item.author}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="product"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Title: {item.title} <br />
          Price: {item.price} KGS <br />
          Size: {item.size} <br />
          Brand: {item.brand} <br />
          Gender: {item.gender} <br />
          Category: {item.category} <br />
          Comments: {item.comments.length} <br />
          Likes: {item.like} <br />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => addToFavorites(item.favorites.id)}>
          {item.favorites ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>

        <IconButton onClick={() => toggleLike(item.like.id)}>
          {item.like}
          <FavoriteIcon color={item.like ? "error" : "primary"} />
        </IconButton>
        <>
          <IconButton onClick={() => deleteProduct(item.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              addToCart(item);
              setShoeState(checkShoeInCart(item.id));
            }}>
            <AddShoppingCartTwoToneIcon
              color={shoeState ? "secondary" : "success"}
            />
          </IconButton>
        </>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{item.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

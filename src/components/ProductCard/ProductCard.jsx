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
import Rating from "@mui/material/Rating";
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

  const { deleteProduct, switchLike, switchFavorites } =
    React.useContext(productsContext);

  const [rating, setRating] = React.useState([1, 5]);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(item);

  return (
    <Card sx={{ width: 300, margin: "10px" }}>
      <CardHeader />
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt="product"
      />
      <CardContent>
        <Typography style={{ height: "10px", padding: "0px", margin: "0" }}>
          <span style={{ fontWeight: "bold", padding: "0px", margin: "0" }}>
            {item.title}
          </span>
          <br />
          {item.price}
        </Typography>
        <br />
        <br />

        <Rating
          name="simple-controlled"
          valueLabelDisplay="auto"
          value={rating}
          min={0}
          max={5}
          step={1}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />

        {/* <Typography variant="body2" color="text.secondary">
          Title: {item.title} <br />
          Price: {item.price} KGS <br />
          Size: {item.size} <br />
          Brand: {item.brand} <br />
          Gender: {item.gender} <br />
          Category: {item.category} <br />
          Comments: {item.comments.length} <br />
          Likes: {item.like} <br />
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => switchFavorites(item.id)}>
          {item.favorites ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
        <IconButton
          onClick={() => {
            switchLike(item.id);
          }}>
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
          <IconButton
            aria-label="settings"
            onClick={() => navigate(`/products/${item.id}`)}>
            <MoreVertIcon />
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
          <Typography variant="body2" color="text.secondary">
            {item.category.title}
            Size: {item.size} <br />
            Description: {item.description} <br />
            Comments: {item.comments.length} <br />
            Likes: {item.like} <br />
          </Typography>
          {/* <Typography paragraph>{item.description}</Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}

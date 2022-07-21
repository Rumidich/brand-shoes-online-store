import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Rating from "@mui/material/Rating";

const Comments = ({ comments }) => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const { addComment, deleteComment } = useContext(productsContext);
  const [rating, setRating] = React.useState("");

  function handleSave() {
    const comment = {
      text: newComment,
      product: id,
    };
    addComment(comment, id);
    setNewComment("");
  }
  console.log(newComment);

  return (
    <Box sx={{ marginTop: "30px" }}>
      <Box>
        <TextField
          label="New Comment"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <Button
          sx={{ marginLeft: "10px", marginTop: "8px" }}
          variant="outlined"
          onClick={handleSave}>
          Post
        </Button>
      </Box>
      <Typography variant="h6" sx={{ marginTop: "20px" }}>
        {" "}
        All Comments ({comments.length}){" "}
      </Typography>{" "}
      <br />
      <Box>
        {comments.map(item => (
          <Box marginBottom="20px">
            <Typography>Author: {item.author}</Typography>
            <Typography>Quote: {item.text}</Typography>
            <Typography>Posted: {item.create_date}</Typography>

            <br />
            <Button
              color="error"
              variant="outlined"
              onClick={() => deleteComment(item.id, id)}>
              Delete
            </Button>
            <Divider variant="inset" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Comments;

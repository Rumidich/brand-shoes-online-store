import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

const Comments = ({ comments }) => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const { addComment, deleteComment } = useContext(productsContext);

  function handleSave() {
    const comment = {
      text: newComment,
      product: id,
    };
    addComment(comment, id);
    setNewComment("");
  }

  return (
    <Box>
      <Box>
        <TextField
          label="New Comment"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <Button variant="outlined" onClick={handleSave}>
          Post
        </Button>
      </Box>
      <Typography variant="h5">Comments ({comments.length})</Typography>
      <Box>
        {comments.map(item => (
          <Box marginBottom="20px">
            <Typography variant="h6">Author: {item.author}</Typography>
            <Typography variant="p">{item.text}</Typography> <br />
            <Typography variant="p">{item.created_date}</Typography>
            <br />
            {/* {item.is_author ? ( */}
            <Button
              color="error"
              variant="contained"
              onClick={() => deleteComment(item.id, id)}>
              Delete
            </Button>
            {/* ) : null} */}
            <Divider variant="inset" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Comments;

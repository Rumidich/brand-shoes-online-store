import React from "react";
import { useContext } from "react";
import { productsContext } from "../../contexts/productsContext";

import {
  DeleteOutlined,
  EditOutlined,
  LikeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export const ProductCard = ({ item }) => {
  const { deleteProduct, toggleLike, toggleFavorites } =
    useContext(productsContext);
  const navigate = useNavigate();
  return (
    <Card
      style={{
        width: 280,
      }}
      cover={<img alt="example" src={item.image} />}
      actions={[
        <LikeOutlined key="like" onClick={() => toggleLike(item.id)} />,

        <EditOutlined
          key="edit"
          onClick={() => navigate(`/edit/${item.id}`)}
        />,
        <DeleteOutlined
          key="ellipsis"
          onClick={() => deleteProduct(item.id)}
        />,
      ]}>
      {/* <p> */}
      <Typography>
        Title: {item.title} <br />
        Brand: {item.brand} <br />
        Price: {item.price} <br />
        Size: {item.size} <br />
        Category: {item.category.title} <br />
        {/* Reviews: {item.reviews.length} <br /> */}
        Likes: {item.likes} <br />
      </Typography>
      {/* </p> */}

      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={item.title}
        description={item.description}
      />
    </Card>
  );
};

export default ProductCard;

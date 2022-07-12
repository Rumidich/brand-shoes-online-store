import React from "react";
import { useContext } from "react";
import { productsContext } from "../../contexts/productsContext";

import {
  DeleteOutlined,
  EditOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export const ProductCard = ({ item }) => {
  const { deleteProduct, updateProduct } = useContext(productsContext);
  const navigate = useNavigate();
  return (
    <Card
      style={{
        width: 280,
      }}
      cover={<img alt="example" src={item.image} />}
      actions={[
        <SettingOutlined
          key="setting"
          onClick={() => navigate(`/details/${item.id}`)}
        />,
        <EditOutlined
          key="edit"
          onClick={() => navigate(`/edit/${item.id}`)}
        />,
        <DeleteOutlined
          key="ellipsis"
          onClick={() => deleteProduct(item.id)}
        />,
      ]}>
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={item.title}
        description={item.description}
      />
    </Card>
  );
};

export default ProductCard;

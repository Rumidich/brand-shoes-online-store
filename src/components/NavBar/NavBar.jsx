import { ShoppingOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const items = [
  {
    label: <Link to="/">Main</Link>,
    key: "mail",
    icon: <ShoppingOutlined />,
  },

  {
    label: "For Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: <Link to="/store">Shop</Link>,
    key: "alipay",
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;

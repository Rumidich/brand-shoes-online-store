import {
  ShoppingOutlined,
  SettingOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Menu, Input, Affix } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";
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
  const navigate = useNavigate();
  // const { checkAuth, loading, handleLogout } = useContext(authContext);
  // useEffect(() => {
  //   if (localStorage.getItem("tokens")) {
  //     checkAuth();
  //   }
  // }, []);

  const onClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const [container, setContainer] = useState(null);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      {/* {currentUser ? ( */}
      <div className="scrollable-container" ref={setContainer}>
        <div className="background">
          <Button onClick={() => navigate("/products")}>Products</Button>
          <Button onClick={() => navigate("/add")}>Add Product</Button>
          <Button>Logout</Button>
          <Affix target={() => window}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["mail"]}
              style={{
                // position: "sticky",
                display: "flex",
                justifyContent: "flex-end",
              }}>
              <Menu.Item>
                <UserOutlined />
              </Menu.Item>
              <Menu.Item
                key="shop"
                icon={<HeartOutlined style={{}} />}></Menu.Item>
              <Menu.Item icon={<ShoppingOutlined style={{}} />}></Menu.Item>
            </Menu>
          </Affix>
        </div>
      </div>
      {/* ) : ( */}
      <div>
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/register")}>Register</Button>
      </div>
      {/* )} */}
      <Menu
        style={{ display: "flex", justifyContent: "space-around" }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}></Menu>
    </>
  );
};

export default Navbar;

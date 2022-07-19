import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { useEffect } from "react";

import { VscAdd, VscAccount } from "react-icons/vsc";

import { FiShoppingCart } from "react-icons/fi";

import { BsShop } from "react-icons/bs";
import { productsContext } from "../../contexts/productsContext";

export default function NavBar() {
  const { getProducts, products, pages } = React.useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [currentPage, setCurrentPage] = React.useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );

  useEffect(() => {
    getProducts();
  }, []);
  React.useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 6,
    });
  }, [search, currentPage]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  // console.log(products);

  const { handleLogout } = React.useContext(authContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          handleLogout();
        }}>
        Log Out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <BsShop />
          </Badge>
        </IconButton>
        <p>Shop</p>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <FiShoppingCart />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit">
          <Badge badgeContent={17} color="error">
            <VscAdd />
          </Badge>
        </IconButton>
        <p>Add</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <BookmarksIcon />
          </Badge>
        </IconButton>
        <p>Favorites</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <VscAccount />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const navigate = useNavigate();
  const { currentUser, checkAuth, loading } = React.useContext(authContext);
  // React.useEffect(() => {
  //   if (localStorage.getItem("tokens")) {
  //     checkAuth();
  //   }
  // }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="appBar"
          position="fixed"
          style={{
            backgroundColor: "white",
            color: "black",
            height: "45px",
          }}>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              variant="h7"
              noWrap
              component="div"
              sx={{
                marginBottom: "20px",
                display: { xs: "none", sm: "block" },
              }}>
              <img
                style={{
                  width: "60px",
                  color: "white",
                  height: "49px",
                  backgroundColor: "white",
                }}
                src="https://t3.ftcdn.net/jpg/01/36/55/48/360_F_136554899_bI9RjRJeAdCUoAgyIcNdMz8UvorxxohP.jpg"
              />
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                marginBottom: "20px",
                display: { xs: "none", md: "flex" },
              }}>
              <IconButton
                onClick={() => navigate("/products")}
                size="large"
                aria-label="shop"
                color="inherit">
                <Badge>
                  <BsShop color="accent" />
                  <Typography></Typography>
                </Badge>
              </IconButton>
              <MenuItem>
                <IconButton>
                  <FiShoppingCart
                    style={{ color: "black" }}
                    onClick={() => navigate("/cart")}
                  />
                </IconButton>
              </MenuItem>
              <IconButton
                onClick={() => navigate("/add")}
                size="large"
                color="inherit">
                <Badge>
                  <VscAdd />
                  <Typography></Typography>
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit">
                <VscAccount />
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}

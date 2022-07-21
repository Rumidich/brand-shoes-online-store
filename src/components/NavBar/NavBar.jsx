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
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";
import { VscAdd, VscAccount } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { cartContext } from "../../contexts/cartContext";

export default function NavBar() {
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
        <IconButton>
          <Badge>
            <BsShop />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <BsCart2 />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <Badge>
            <VscAdd />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <Badge>
            <FiBookmark />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <VscAccount />
        </IconButton>
      </MenuItem>
    </Menu>
  );
  const navigate = useNavigate();
  const { getCart, count } = React.useContext(cartContext);

  React.useEffect(() => {
    getCart();
  }, []);

  const { loading } = React.useContext(authContext);

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
            height: "52px",
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
                  height: "63px",
                  backgroundColor: "white",
                }}
                src="https://t3.ftcdn.net/jpg/01/36/55/48/360_F_136554899_bI9RjRJeAdCUoAgyIcNdMz8UvorxxohP.jpg"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                marginLeft: "20px",
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
              <IconButton
                onClick={() => navigate("/favorites")}
                size="large"
                aria-label="shop"
                color="inherit">
                <Badge>
                  <FiBookmark />
                </Badge>
              </IconButton>
              <MenuItem>
                <IconButton
                  style={{ color: "black" }}
                  color="success"
                  aria-label="add to shopping cart"
                  onClick={() => navigate("/cart")}>
                  <Badge badgeContent={count} color="error">
                    <BsCart2 />
                  </Badge>
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

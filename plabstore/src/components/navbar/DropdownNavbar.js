import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import UseStyles from "../../hooks/UseStyles";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ModalLogin, ModalRegister } from "../modal";

import { Link } from "react-router-dom";

function DropdownNavbar() {
  const { styles, ...props } = UseStyles();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [isLogin] = React.useState(true);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // desktop
  const menuId = "primary-search-account-menu";
  const renderMenu = isLogin ? (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Riwayat Pembelian</MenuItem>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/status-pembelian"
      >
        <MenuItem onClick={handleMenuClose}>Status Pemesanan</MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>Wishlist</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  ) : (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <ModalLogin>
          <Typography className={classes.title} variant="h6" nowWrap>
            Login
          </Typography>
        </ModalLogin>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <ModalRegister>
          <Typography className={classes.title} variant="h6" nowWrap>
            Register
          </Typography>
        </ModalRegister>
      </MenuItem>
    </Menu>
  );

  // mobile
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = isLogin ? (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Riwayat Pembelian</MenuItem>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/status-pembelian"
      >
        <MenuItem onClick={handleMenuClose}>Status Pemesanan</MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>Wishlist</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  ) : (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <ModalLogin>
          <Typography className={classes.title} variant="h6" nowWrap>
            Login
          </Typography>
        </ModalLogin>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <ModalRegister>
          <Typography className={classes.title} variant="h6" nowWrap>
            Register
          </Typography>
        </ModalRegister>
      </MenuItem>
    </Menu>
  );
  return {
    renderMenu,
    renderMobileMenu,
    handleProfileMenuOpen,
    handleMobileMenuOpen,
    menuId,
    mobileMenuId,
  };
}

export default DropdownNavbar;

import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import UseStyles from "../../hooks/UseStyles";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ModalLogin, ModalRegister } from "../modal";

import { Link } from "react-router-dom";

// Hamburger option menu
const options = [
  'Gamis',
  'T-shirt',
  'Kemeja',
  'Baju tidur',
  'Daster',
  'Lain-Lain',
];

const ITEM_HEIGHT = 48;

function DropdownNavbar() {
  const { styles } = UseStyles();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [isLogin] = React.useState(true);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [anchorElH, setAnchorElH] = React.useState(null);
  
  const isMenuOpen = Boolean(anchorEl);
  const open = Boolean(anchorElH);

  const handleClick = (event) => {
    setAnchorElH(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElH(null);
  };


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
      <Link style={{ textDecoration: "none", color: "black" }} to="/profile">
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/riwayat-pembelian"
      >
        <MenuItem onClick={handleMenuClose}>Riwayat Pembelian</MenuItem>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/status-pembelian"
      >
        <MenuItem onClick={handleMenuClose}>Status Pemesanan</MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/wishlist"}>
        <MenuItem onClick={handleMenuClose}>Wishlist</MenuItem>
      </Link>
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

  // hamburger menu
  const renderHamburger =  <Menu
  id="long-menu"
  anchorEl={anchorElH}
  keepMounted
  open={open}
  onClose={handleClose}
  PaperProps={{
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
      width: '20ch',
   
    },
  }}
  style={{zIndex:'9999999999'}}
>
  {options.map((option) => (
      <Link to={`/listProduk/${option}`} style={{textDecoration:'none', color:'grey'}}>
    <MenuItem key={option} selected={option === 'Tampilkan Semua'} onClick={handleClose}>
        {option}

    </MenuItem>
      </Link>
  ))}
</Menu>

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
      style={{zIndex:'9999999999'}}
    >
      <Link style={{ textDecoration: "none", color: "black" }} to={"/profile"}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/checkout"}>
        <MenuItem onClick={handleMenuClose}>Keranjang Belanja</MenuItem>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/riwayat-pembelian"
      >
        <MenuItem onClick={handleMenuClose}>Riwayat Pembelian</MenuItem>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/status-pembelian"
      >
        <MenuItem onClick={handleMenuClose}>Status Pemesanan</MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/wishlist"}>
        <MenuItem onClick={handleMenuClose}>Wishlist</MenuItem>
      </Link>
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
    handleClick,
    renderHamburger
  };
}

export default DropdownNavbar;

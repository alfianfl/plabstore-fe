import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import StoreIcon from "@material-ui/icons/Store";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import UseStyles from "../../hooks/UseStyles";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import UseDropdownMenu from "./DropdownNavbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { ModalLogin, ModalRegister } from "../modal";

export default function Navbar() {
  // useStyles di refactor jadi Hooks
  const { styles, ...props } = UseStyles();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const {
    renderMenu,
    renderMobileMenu,
    handleProfileMenuOpen,
    handleMobileMenuOpen,
    menuId,
    mobileMenuId,
    handleClick,
    renderHamburger
  } = UseDropdownMenu();

  // if login true
  const [isLogin] = React.useState(true);

  return (
    <div className={classes.grow}>
      <AppBar className={classes.grow} position="static">
        <Toolbar style={{ display: "flex" }}>
          <IconButton
            {...props}
            edge="start"
            className={classes.menuButton}
            color="default"
            aria-label="open drawer"
            onClick={handleClick}
            style={{color:'white'}}
          >
            <MenuIcon />
          </IconButton>
          {renderHamburger}

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            {isLogin ? (
              <>
                <IconButton
                  edge="start"
                  color="default"
                  aria-label="open drawer"
                >
                  <Link
                    to="/listProduk"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <IconButton color="inherit">
                      <Badge badgeContent={"new"} color="secondary">
                        <StoreIcon />
                      </Badge>
                    </IconButton>
                  </Link>
                </IconButton>
                <IconButton
                  edge="start"
                  color="default"
                  aria-label="open drawer"
                >
                  <Link
                    to="/checkout"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <IconButton aria-label="show 4 new mails" color="inherit">
                      <Badge badgeContent={4} color="secondary">
                        <ShoppingBasketIcon />
                      </Badge>
                    </IconButton>
                  </Link>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  style={{color:'white'}}
                >
                  <AccountCircle />
                </IconButton>{" "}
              </>
            ) : (
              <>
                <ModalLogin>
                  <Typography className={classes.title} variant="h6" nowWrap>
                    Login
                  </Typography>
                </ModalLogin>
                <ModalRegister>
                  <Typography className={classes.title} variant="h6" nowWrap>
                    Register
                  </Typography>
                </ModalRegister>
              </>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              style={{color:'white'}}
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

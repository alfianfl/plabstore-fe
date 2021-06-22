import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import UseStyles from "../../hooks/UseStyles";
// import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import UseDropdownMenu from "./DropdownNavbar";

export default function Navbar() {
  const { styles } = UseStyles();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const {
    renderMenu,
    renderMobileMenu,
    handleProfileMenuOpen,
    handleMobileMenuOpen,
    menuId,
    mobileMenuId,
  } = UseDropdownMenu();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.grow} position="static">
        <Toolbar style={{ display: "flex" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="default"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography className={classes.title} variant="h6" nowWrap>
            Plabstore
          </Typography> */}
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
            <IconButton edge="start" color="default" aria-label="open drawer">
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="default"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="default"
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

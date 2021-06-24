import { fade } from "@material-ui/core/styles";

function UseStyles() {
  const styles = (theme) => ({
    gridItem: {
      padding: "0  !important",
      marginTop: "50px",
    },
    grid: {
      width: "unset",
      padding: "0px",
      marginTop: "30px",
    },
    grow: {
      flexGrow: 1,
      backgroundColor: "#ffff",
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    ShoppingBasketIcon: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      color: "default",
      textAlign: "center",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      border: "1px solid grey",
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      color: "grey",
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "grey",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  });
  return { styles };
}

export default UseStyles;
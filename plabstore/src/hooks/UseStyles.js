

function UseStyles() {
  const styles = (theme) => ({
    gridItem: {
      padding: "0  !important",
    },
    grid: {
      width: "unset",
      padding: "0px",
    },
    grow: {
      flexGrow: 1,
      backgroundColor: "black",
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    ShoppingBasketIcon: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      color: "#fff",
      fontSize: "16px",
      margin: "0px 20px 0px 20px",
      textAlign: "center",
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
        textDecoration:'underline'
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "white",

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
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,

      padding: theme.spacing(2, 4, 3),
      width: "40%",
      [theme.breakpoints.down("md")]: {
        width: "90%",
      },
    },
  });
  return { styles };
}

export default UseStyles;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  styles: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function RegularButton(props) {
  const classes = useStyles();
  return (
    <Button
      {...props.rest}
      classes={classes.root}
      style={{
        background: props.background,
        margin: "0px 5px 0px 5px",
        width: "100%",
        color: "white",
      }}
      size={props.size}
      variant={props.variant}
      color={props.color}
    >
      {props.children}
    </Button>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
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
      classes={classes}
      variant={props.variant}
      color={props.color}
    >
      {props.children}
    </Button>
  );
}

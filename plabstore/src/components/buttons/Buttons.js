import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import UseStyles from "../../hooks/UseStyles";

export default function RegularButton(props) {
  const { styles } = UseStyles();
  const useStyles = makeStyles(styles);
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

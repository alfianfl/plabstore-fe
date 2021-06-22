import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UseStyles from "../../hooks/UseStyles";

export default function GridItem(props) {
  const { styles } = UseStyles();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.gridItem}>
      {children}
    </Grid>
  );
}

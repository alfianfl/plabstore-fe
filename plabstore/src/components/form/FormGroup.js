import React from "react";
import TextField from "@material-ui/core/TextField";
// import UseStyles from "../../hooks/UseStyles";
// import { makeStyles } from "@material-ui/core/styles";

export default function FormPropsTextFields({
  children,
  placeholder,
  type,
  idForm,
}) {
  // const { styles } = UseStyles();
  // const useStyles = makeStyles(styles);
  // const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <TextField
        id={idForm}
        type={type}
        label={placeholder}
        variant="outlined"
        className="w-100 my-2"
      >
        {children}
      </TextField>
    </form>
  );
}

import React from 'react'
import TextAreaAutoSize from "@material-ui/core/TextField"
import UseStyles from "../../hooks/UseStyles"
import { makeStyles } from "@material-ui/core/styles"

export default function FormArea({
    children,
    placeholder,
    type,
    idForm,
}) {
    const { styles } = UseStyles();
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <form noValidate autoComplete="off">
            <TextAreaAutoSize
                id={idForm}
                type={type}
                label={placeholder}
                variant="outlined"
                className="w-100 my-2"
                minRows={3}
            >
                {children}
            </TextAreaAutoSize>
        </form>
    )
}



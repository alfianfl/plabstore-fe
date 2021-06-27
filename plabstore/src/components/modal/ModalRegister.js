import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField } from "../form";
import { Button } from "../buttons";
import UseStyles from "../../hooks/UseStyles";

export default function TransitionsModal({ children }) {
  const { styles } = UseStyles();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <span onClick={handleOpen}>{children}</span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2
              id="transition-modal-title"
              className="text-center my-4"
              style={{ fontSize: "25px" }}
            >
              Register
            </h2>
            <p id="transition-modal-description">
              <div>
                <TextField
                  placeholder={"username"}
                  id={"standard-username-input"}
                />
                <TextField
                  placeholder={"email"}
                  type={"email"}
                  id={"standard-email-input"}
                />
                <TextField
                  placeholder={"password"}
                  type={"password"}
                  id={"standard-password-input"}
                />
                <TextField
                  placeholder={"confrim password"}
                  type={"password"}
                  id={"standard-confirm-password-input"}
                />
                <Button size="large" variant="contained" background="#94D0CC">
                  {" "}
                  <span style={{ color: "white" }}>Register</span>{" "}
                </Button>
              </div>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

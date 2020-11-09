import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import "../components/formStyle.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function FormPropsTextFields() {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState();

  return (
    <Container className="formContainer">
      <Typography variant="h3" color="primary" align="center">
        Logistics
      </Typography>
      <form className={classes.root} Validate autoComplete="off">
        <TextField
          className="inputName"
          required
          id="outlined-required"
          label="Name"
          variant="outlined"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          className="inputPassword"
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
          <Link type="submit" className="formBtn" to={`/${"agent"}`}>
            Enter
          </Link>
      </form>
    </Container>
  );
}
export default FormPropsTextFields;

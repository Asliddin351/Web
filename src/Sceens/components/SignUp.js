import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import "../components/formStyle.css";
const SignUp = () => {
  return (
    <Container className="formContainer">
      <Typography variant="h3" color="primary" align="center">
        Регистрация
      </Typography>

      <form>
        <TextField
          type="text"
          name="position"
          placeholder="Position"
          variant="outlined"
          label="Position"
          required
        />
        <TextField
          type="text"
          name="name"
          placeholder="Name"
          variant="outlined"
          label="Name"
          required
        />

        <TextField
          type="text"
          name="login"
          placeholder="login"
          variant="outlined"
          label="Login"
          required
        />
        <TextField
          type="password"
          name="password"
          placeholder="password"
          variant="outlined"
          label="Password"
          required
        />
        <TextField
          type="password"
          name="verificationPassword"
          placeholder="Verification Password"
          variant="outlined"
          label="Verification Password"
          required
        />
        <button type="submit" className="formBtn">
          Добавить
        </button>
      </form>
    </Container>
  );
};

export default SignUp;

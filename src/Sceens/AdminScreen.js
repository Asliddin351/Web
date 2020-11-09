import React from "react";
import ButtonAppBar from "./components/ButtonAppBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import NavTabs from "./components/NavTabs";
const AdminScreen = () => {
  return (
    <>
      <Router>
        <Route exact path="/admin"  component={ButtonAppBar}>
          <ButtonAppBar />
          <NavTabs />
        </Route>
        <Route  exact path="/admin/SignUp" component={SignUp}>
          <SignUp />
        </Route>
      </Router>
    </>
  );
};

export default AdminScreen;

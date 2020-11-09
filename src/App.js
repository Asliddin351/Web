import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Sceens/HomeScreen";
import AdminScreen from "./Sceens/AdminScreen";
import AgentScreen from "./Sceens/AgentScreen";
// import TodoList from "./TodoList";


function App() {


  return (
  <>  
    <Router>
      <Switch>
        <Route exact path="/"  component={HomeScreen}>
          <HomeScreen />
        </Route>
        <Route path="/admin" component={AdminScreen}>
          <AdminScreen />
        </Route>
        <Route  path="/agent" component={AgentScreen}>
          <AgentScreen />
        </Route>
      </Switch>
    </Router>
    
    
  </>
  );
}

export default App;

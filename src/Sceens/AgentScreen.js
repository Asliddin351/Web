import React from "react";
import BadgeAvatars from "./components/BadgeAvatars";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stockroom from "./Stockroom";
import Typography from "@material-ui/core/Typography";
import "./agent.css";

const AgentScreen = () => {
  return (
    <div>
      <Router>
        <Route path="/agent" exact component={BadgeAvatars}>
          <BadgeAvatars />
          <hr />
          <ul className="box_container">
            <li className="box_item">
              <Link
                to="/agent/stockroom"
                type="button"
                className="box_item__link_1"
              >
                Stockroom
              </Link>
              <Typography align="center">Stockroom</Typography>
            </li>
            <li className="box_item">
              <Link
                to="/agent/otchet"
                type="button"
                className="box_item__link_2"
              >
                Market
              </Link>
              <Typography align="center">Market</Typography>
            </li>
            <li className="box_item">
              <Link
                to="/agent/otchet"
                type="button"
                className="box_item__link_2"
              >
                Отчёт
              </Link>
              <Typography align="center">Отчёт</Typography>
            </li>
          </ul>
        </Route>
        <Route path="/agent/stockroom" component={Stockroom}>
          <Stockroom />
        </Route>
        <Route path="/agent/otchet" component={Stockroom}>
          <Stockroom />
        </Route>
      </Router>
    </div>
  );
};

export default AgentScreen;

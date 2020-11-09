
import React from "react";
import Typography from "@material-ui/core/Typography";
import Counter from "./components/Counter";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import ReactVirtualizedTable from "./components/ReactVirtualizedTable";
const Stockroom = () => {
  return (
    <div>
      <Typography variant="h5" color="#333" align="center">
        Фирмы
      </Typography>
      <Counter/>

      {/* <ReactVirtualizedTable /> */}
    </div>
  );
};

export default Stockroom;

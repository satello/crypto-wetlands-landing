import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Nav from './containers/Nav'
import Home from './containers/Home'

import "antd/dist/antd.css";

export default function CryptoWetlandsApp() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

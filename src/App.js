import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Nav from './containers/Nav'
import Home from './containers/Home'
import About from './containers/About'
import ComingSoon from './components/coming-soon'

import "antd/dist/antd.css";
import "./App.css";

export default function CryptoWetlandsApp() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/grants" element={<ComingSoon />} />
          <Route exact path="/dao" element={<ComingSoon />} />
          <Route exact path="/nft" element={<ComingSoon />} />
          <Route exact path="/explorer" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
}

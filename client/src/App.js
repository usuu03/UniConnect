import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//Page Imports
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Registration from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

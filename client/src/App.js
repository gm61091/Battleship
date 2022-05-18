import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RequireAuth><Main /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

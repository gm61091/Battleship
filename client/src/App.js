/**
 * This is a React function that sets up routes for a web application, including authentication
 * requirements for accessing certain pages.
 * @returns The `App` component is being returned, which contains a `Router` component from
 * `react-router-dom` and three `Route` components. The first `Route` component has a path of `/` and
 * renders the `Main` component wrapped in a `RequireAuth` component. The second `Route` component has
 * a path of `/login` and renders the `Login` component. The third
 */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import RequireAuth from "./components/auth/RequireAuth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

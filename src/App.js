import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { home } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<Home />} />
        {/* <Route exact path="/user/:id" element={<User />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

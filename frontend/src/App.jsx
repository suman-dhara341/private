import React from "react";
import { BrowserRouter } from "react-router-dom";
import Auth from "./router/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );
};

export default App;

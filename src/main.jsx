import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
//   <App />

  // to wrap App with BrowserRouter
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>


  <UserContext>
    <App/>
  </UserContext>
);

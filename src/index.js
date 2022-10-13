import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import function component
import Component from "./components/header";
// import Class component
import HeaderClass from "./components/Class-component";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* funtion Component */}
    <Component />

    {/* class component */}
    <HeaderClass />
  </React.StrictMode>
); 

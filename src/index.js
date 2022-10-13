import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import List from "./Component/Props";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <List title="Contoh Data" />
    <List data=" This is Contoh Data" />
    <List title="Contoh Dua" />
    <List data=" This is Contoh Dua" />
  </React.StrictMode>
);

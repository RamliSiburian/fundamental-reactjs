import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import List, { DummyList } from "./Component/Props"
import { Dummy } from "./Component/Data-dummy";



const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(Dummy[0]);
root.render(
  <React.StrictMode>
    {/* Props Using Data Dummy */}
    <div>
      <h1>Props Using Dummy Data</h1>
      {Dummy.map((item, index) => (
        <div key={index}>
          <DummyList name={item.name} />
          <br />
          <DummyList title={item.title} />
        </div>
      ))}
    </div>

    {/* Props Using Manual Data */}
    <div>
      <h1>Props Using Manual Data</h1>
      <List name="Cotoh Data" />
      <br />
      <List title="This is Contog Data" />
    </div>

  </React.StrictMode>
);

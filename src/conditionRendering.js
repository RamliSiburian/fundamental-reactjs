import React from "react";
import { useState } from "react";

//Create Component PrivatePage
function PrivatePage(props) {
  return (
    <>
      <h1>Welcome</h1>
      <button onClick={props.Logout}>Logout</button>
    </>
  );
}
//Create Component GuestPage
function GuestPage(props) {
  return (
    <>
      <h1>Welcome</h1>
      <button onClick={props.Login}>Login</button>
    </>
  );
}

function ConditionRendering() {
  //init State
  const [isLogin, setIsLogin] = useState(false);
  return (
    // Code Inside div
    <div>
      {isLogin ? (<PrivatePage Logout={() => setIsLogin(!isLogin)} />) : (<GuestPage Login={() => setIsLogin(!isLogin)} />)}
    </div>
  );
}

export default ConditionRendering;

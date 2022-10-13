import React from "react";

function Event() {
  //Create function here
  function ExEventFunc() {
    return alert('Event Start When Button Clicked With Function')

  }

  return (
    // Code Inside div
    <>
      <div>
        <button onClick={() => alert('Event Start When Button Clicked With Arrow Function')}>Click Here</button>
      </div>
      <br />
      <div>
        <button onClick={ExEventFunc}>Press Here</button>
      </div>
    </>
  );
}

export default Event;

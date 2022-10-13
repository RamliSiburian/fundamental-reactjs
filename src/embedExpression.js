import React from "react";

function EmbedExpression() {
  //Create function here
  function Embed() {
    return 'This is embed from function'
  }

  //Create a variable here
  const varEmbed = 'This is embed from Variable'

  return (
    // Code Inside div
    <div>
      <p>{Embed()}</p>
      <p>{varEmbed}</p>
    </div>
  );
}

export default EmbedExpression;

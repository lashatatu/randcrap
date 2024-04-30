import React from 'react';

function Beers(props) {
  return (
    <pre>
      <h3>
        {" "}
        Total Price of all items:{" "}
        {props.data.reduce(props.callbackfn, 0).toFixed(0)}
      </h3>
      <h3>
        {" "}
        Total reviews of all items:{" "}
        {props.data.reduce(props.callbackfn1, 0).toFixed(0)}
      </h3>

      {props.data.map(props.callbackfn2)}
    </pre>
  );
}

export default Beers;

import React, { useEffect, useRef, useState } from "react";
import Beers from "./Components/Beers";

const App = () => {
  const [data, setData] = useState([]);
  const buttonRef = useRef(null);

  async function getData({ beverage }) {
    const res = await fetch(`https://api.sampleapis.com/beers/${beverage}`);
    const data = await res.json();
    setData(data);
  }

  return (
    <div>
      <button ref={buttonRef} onClick={() => getData({ beverage: "ale" })}>
        Get Ales
      </button>
      <button ref={buttonRef} onClick={() => getData({ beverage: "stouts" })}>
        Get stouts
      </button>
      <Beers
        data={data}
        callbackfn={(acc, item) => acc + Number(item.price.substring(1))}
        callbackfn1={(acc, item) => acc + Number(item.rating.reviews)}
        callbackfn2={(beer) => (
          <div style={{ backgroundImage: `url(${beer.image}` }} key={beer.id}>
            <h2 key={beer.id}>{beer.name}</h2>
            <p>{beer.price}</p>
            <p>{Number(beer.rating.average.toFixed(1))}</p>
            <p>{beer.rating.reviews}</p>
          </div>
        )}
      />
    </div>
  );
};
export default App;

import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  function increase() {
    setCount((value) => value + 1);
  }

  function decrease() {
    setCount((value) => value - 1);
  }

  return (
    <div>
      <p>
        You clicked {count} {count <= 1 ? "time" : "times"}
      </p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};
export default Count;

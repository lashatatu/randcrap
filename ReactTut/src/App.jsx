import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>
        You clicked {count} {count <= 1 ? "time" : "times"}
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Count;

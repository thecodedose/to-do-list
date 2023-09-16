import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default Counter;


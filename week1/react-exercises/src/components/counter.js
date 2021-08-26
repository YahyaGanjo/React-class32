import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount(count + 1);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  return (
    <div>
      <Count count={count} />
      <Button clickHandler={clickHandler} />
      <p>{feedback}</p>
    </div>
  );
};

const Count = ({ count }) => {
  return <div>{count}</div>;
};

const Button = ({ clickHandler }) => {
  return <button onClick={clickHandler}>Add 1</button>;
};

export default Counter;

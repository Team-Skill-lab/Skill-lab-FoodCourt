import React, { useState } from 'react';
import '../css/Counter.css';
const Counter = (props) => {
  const [count, setCount] = useState(props.number);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className='Div-Counter'>
     
      <button onClick={increaseCount}>+</button>
       <p className='count-counter'>{count}</p>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
};

export default Counter;

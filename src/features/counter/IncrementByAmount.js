
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from './counterSlice';

export default function IncrementByAmount() {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value, 10) || 0);
  };

  const handleIncrement = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div>
      <h2>Increment By Amount</h2>
      <p>Current Value: {count}</p>
      <label>
        Amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

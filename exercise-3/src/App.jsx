import React, { useState } from 'react';

const App = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [total, setTotal] = useState(null);
  const [checkType, setCheckType] = useState(true);

  const onA = (e) => {
    setA(e.target.value);
  };

  const onB = (e) => {
    setB(e.target.value);
  };

  const handleCompute = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setCheckType(false);
    } else {
      setCheckType(true);
      setTotal(numA + numB);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      <input
        disabled
        style={{ color: checkType ? 'white' : 'red' }}
        value={checkType ? total : 'A and B shall be numbers!'}
      />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
};

export default App;

import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [result] = useState(null);

  const handleCalculate = () => {};

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', color: '#aaa' }}>


      <h2>String Calculator</h2>

      <h1 style={{ fontSize: '20px' }}>Enter numbers</h1>

      <textarea
        style={{ margin: '10px 0', color: '#aaa' }}
        placeholder='Enter numbers'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div
        onClick={handleCalculate}
        style={{
          padding: '10px',
          backgroundColor: '#008cba',
          color: '#fff',
          border: 'none',
        }}>
        Calculate
      </div>

      {result !== null && <p style={{ color: 'green' }}>Result: {result}</p>}

      <div role='alert'>
        <p>Make sure you enter numbers correctly!</p>
      </div>
    </div>
  );
};

export default App;

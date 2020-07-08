import React, { useState } from 'react';
import logo from './logo.svg';

function App() {
  const [age, setAge] = useState();
  const [nw, setNw] = useState(0);

  const date = new Date();
  const future = new Date();

  future.setFullYear(future.getFullYear() + 30 - age);

  function handleChange(e) {
    if (e.target.name === 'age') {
      if (e.target.value < 31) {
        setAge(e.target.value);
      }
    }
    if (e.target.name === 'nw') {
      setNw(e.target.value);
    }
  }

  console.log(nw);

  const yearsToGo = 30 - age;
  const monthsToGo = (30 - age) * 12;
  const yrlyIncome = Math.round((1000000 - nw) / yearsToGo).toLocaleString();
  const mthlyIncome = Math.round((1000000 - nw) / monthsToGo).toLocaleString();

  return (
    <div className='box'>
      {age ? (
        <h1>To be a millionaire by 30</h1>
      ) : (
        <h1>Enter your current age</h1>
      )}

      {age && <h4>{`Years to go: ${yearsToGo}`}</h4>}
      {age && <p>{`Yearly income needed: $${yrlyIncome}`}</p>}
      {age && <h4>{`Months to go: ${monthsToGo}`}</h4>}
      {age && <p>{`Monthly Income Needed: $${mthlyIncome}`}</p>}

      <input
        placeholder='Current Age'
        name='age'
        type='text'
        value={age}
        onChange={handleChange}
      />

      <br></br>

      {age && (
        <input
          placeholder='Current Assets'
          name='nw'
          type='text'
          value={nw}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default App;

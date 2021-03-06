import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0)

  return (
    <div  data-test="component-app" className="App">
      <header className="App-header">
        Hello, Welcome to my Counter Demo.
        <p data-test="component-display" >Count:{count}</p>
        <button  data-test="component-button" onClick={() => setCount(count+1)} >
            Click me
        </button>
      </header>
    </div>
  );
}

export default Counter;
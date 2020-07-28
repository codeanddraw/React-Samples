import React, {useState, useEffect} from 'react';
import '../../App.css';

function App() {
    const [numVal, setNum] = useState(0)
    useEffect(()=>{
        alert("Counter button was clicked")
        document.title=`You clicked me ${numVal}`
    }, [numVal])
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>{
            setNum(numVal + 1)
        }}>
        Click me {numVal}
        </button>
      </header>
    </div>
  );
}

export default App;
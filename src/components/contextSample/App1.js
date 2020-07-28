import React, { createContext } from 'react';
import '../../App.css';
import AClass from './components/contextSample/AClass'

const Fname = createContext()
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Fname.Provider value={"Context API"}>
        <AClass />
      </Fname.Provider>
      </header>
    </div>
  );
}

export default App;
export { Fname };
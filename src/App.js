import React  from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';

const App = () => {
    const Name = () =>{
        return <h1>Hello, I am in Name Page</h1>
    }

  return (
    <div>
      <Switch>
          <Route exact path='/' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route path='/contact/Name' component={Name}></Route>
          <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
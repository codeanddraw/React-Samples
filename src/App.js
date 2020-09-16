import React  from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Menu from './components/pages/Menu';
import Counter from './components/counterApp/Counter';

const App = () => {
    const Name = () =>{
        return <h1>Hello, I am in Name Page</h1>
    }

  return (
    <>
    <Menu/>
      <Switch>
          <Route exact path='/' component={() => <About/>}></Route>
          <Route exact path='/contact' render={() => <Contact/>}></Route>
          <Route path='/contact/Name' component={Name}></Route>
          <Route exact path='/counter' component={() => <Counter/>}></Route>
          <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
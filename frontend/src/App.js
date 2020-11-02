import React  from 'react'
import { Route, Switch}from  'react-router-dom'
import './App.css';
import Signup from './component/Signup';
import Header from './component/Header'
import roots from './roots';
import Login from './component/Login';
import Invoice from './component/Invoice';

function App() {

  
  return (
    <>
    <div className="App">
      <Header />
      <Switch>
        <Route path = {roots.signup}>
        <Signup />
        </Route>
        <Route path={roots.login}>
          <Login />
          </Route>
        <Route path={roots.invoice}>
 <Invoice/>
        </Route>
        
      </Switch>
     
    </div>
    </>
  );
}

export default App;

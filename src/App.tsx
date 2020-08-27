import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Products from './routes/Products';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products" exact component={Products}/>
        <Route path="/cart" />
        <Redirect path="*" to="/products"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

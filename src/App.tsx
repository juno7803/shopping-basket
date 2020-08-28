import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Products from './routes/ProductsContainer';
import Cart from './routes/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products" exact component={Products}/>
        <Route path="/cart" component={Cart}/>
        <Redirect path="*" to="/products"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

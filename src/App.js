import React from "react";
import * as Yup from "yup";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css"

import Home from "./components/Home";
import OrderForm from "./components/OrderForm";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/pizza">
            <OrderForm />
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </div>
    
  );
};
export default App;

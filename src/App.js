import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import "./App.css"

import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Confirmation from "./components/Confirmation";
import schema from "./validation/formSchema";

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  bacon: false,
  chicken: false,
  special: ''
}
const initialFormErrors = {
  name: '',
  size: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ""}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value}) 
  }

  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      bacon: formValues.bacon,
      chicken: formValues.chicken,
      special: formValues.special.trim()
    }
    postNewOrder(newOrder)
  }


  return (
    <div className="App">
      <header>
        <h1>Lambda Meats</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/confirmation">
            <Confirmation />
        </Route>
        <Route path="/pizza">
            <OrderForm
             change={inputChange}
             values={formValues}
             errors={formErrors}
             submit={formSubmit}
            />
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </div>
    
  );
};
export default App;

import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();

    const routeToForm = () => {
        history.push("/pizza")
    }

    return (
        <section className="cta">
        <h2>Your favorite food, delivered while coding</h2>
        <button id="order-pizza" onClick={routeToForm}>Pizza?</button>
      </section>
    )

}

export default Home
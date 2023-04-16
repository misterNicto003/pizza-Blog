import React from "react";

import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { Header } from "./component";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" Component={() => <Home items={pizzas} />} exact />
            <Route path="/cart" Component={Cart} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react"; // imr
//Components
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import PLP from "./components/PLP";
import PDP from "./components/PDP";

const App = () => {

  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" exact component={PLP} />
        <Route path="/products/:id" component={PDP} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// import logo from "./logo.svg";
import "./App.css";
import { CartContext } from "./contexts/cartContext";
import Head from "./components/Head";
import Slider from "./components/Slider";
import Catalogue from "./components/Catalogue.js";
import Footer from "./components/Footer";
import CategoriesMenu from "./components/CategoriesMenu";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import FreshFoods from "./catalogues/FreshFoods";
import Home from "./catalogues/Home";
import Groceries from "./catalogues/Groceries";
import CartHook from "./useHook/Cart";
import { useEffect, useState } from "react";
import CheckOutCart from "./pages/CheckOutCart";
import StrongValueProps from "./components/StrongValueProps";
import ShopByList from "./components/ShopByList";
import MainNavigationMenu from "./subcomponents/MainNavigationMenu";
import SayHiClosure from "./components/SayHiClosure";
import ContactUs from "./pages/ContactUs";
import SelectOptionsWidget from "./components/widgets/SelectOptionsWidget";
import SmalllerWidget from "./components/widgets/SmalllerWidget";
import Recipies from "./catalogues/Recipies";

function App() {
  let [cart, addProduct] = useState([]);
  let [mountSlider, setMount] = useState(true);
  let [data, setData] = useState("");

  // setInterval(() => {
  //   setData(`1${Math.random()}`);
  // }, 2000);

  return (
    <CartContext.Provider value={{ addProduct, cart, setMount }}>
      <Router>
        <Head cart={cart} cartTotal={cart.length} />
        <StrongValueProps />
        <Route path="/contactUs" exact component={ContactUs} />
        <Route
          exact
          path="/checkout"
          exact
          render={(props) => <CheckOutCart {...props} cart={cart} />}
        />
        {mountSlider ? <Slider cart={cart} /> : ""}
        {/* {mountSlider ? <ShopByList /> : ""} */}
        {mountSlider ? <CategoriesMenu /> : ""}
        <Route exact path="/" exact component={FreshFoods} />
        <Route exact path="/groceries" component={Groceries} />
        <Route exact path="/freshfoods" component={FreshFoods} />
        <Route exact path="/recipes" component={Recipies} />
        <Route exact path="/freshdirect" component={FreshFoods} />
        {/* <SayHiClosure data={data} /> */}
        {/* <SelectOptionsWidget options={["One", "Two", "Three"]} /> */}
        {/* <SmalllerWidget /> */}
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}

export default App;

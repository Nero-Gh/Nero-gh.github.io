import React from "react";

import css from "./styles/App.module.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experties from "./components/Experties/Experties";
import Work from "./components/Works/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <People />
      <Footer />
    </div>
  );
};

export default App;

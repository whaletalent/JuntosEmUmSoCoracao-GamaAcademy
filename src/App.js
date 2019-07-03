import React, { Fragment } from "react";
import "./App.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import PageSection from "./components/PageSection/PageSection";
import SectionFooter from "./components/SectionFooter";

function App() {
  return (
    <Fragment>
      <HeroSection />
      <PageSection />
      <SectionFooter />
    </Fragment>
  );
}

export default App;

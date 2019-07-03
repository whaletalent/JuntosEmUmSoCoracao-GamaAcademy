import React, { Fragment } from "react";
import "./App.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import PageSection from "./components/PageSection/PageSection";
import ContactSection from "./components/SectionContact";
//import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Fragment>
      <HeroSection />
      <PageSection />
      <ContactSection />
    </Fragment>
  );
}

export default App;

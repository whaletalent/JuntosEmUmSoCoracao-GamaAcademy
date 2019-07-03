import React, { Fragment } from "react";
import "./App.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import PageSection from "./components/PageSection/PageSection";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Fragment>
      <HeroSection />
      <PageSection />
      <ContactForm />
    </Fragment>
  );
}

export default App;

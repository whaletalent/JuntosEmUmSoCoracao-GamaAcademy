import React, {Fragment} from "react";
import "./App.scss";
import HeroSection from './components/HeroSection/HeroSection'
import PageSection from './components/PageSection/PageSection'


function App() {
  return (
    <Fragment>
      <HeroSection/>
        <PageSection/>
    </Fragment>
  );
}

export default App;

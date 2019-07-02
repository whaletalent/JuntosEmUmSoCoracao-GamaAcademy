import React, {Fragment} from "react";
import "./App.scss";
import HeroSection from './components/HeroSection/HeroSection'
import ImageTitle from './components/ImageTitle/ImageTitle';


function App() {
  return (
    <Fragment>
      <HeroSection/>
      <ImageTitle title="Titulo" subtitle="Subtitulo"></ImageTitle>
    </Fragment>
  );
}

export default App;

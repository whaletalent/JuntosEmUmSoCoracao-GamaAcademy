import React, {Fragment} from "react";
import "./App.scss";
import HeroSection from './components/HeroSection/HeroSection'
import ImageTitle from './components/ImageTitle/ImageTitle';
import SectionContent from './components/SectionContent/SectionContent';


function App() {
  return (
    <Fragment>
      <HeroSection/>
      <ImageTitle 
        title="Titulo" 
        subtitle="Subtitulo" 
        image="https://bulma.io/images/placeholders/1280x960.png"
      />
      <SectionContent></SectionContent>
      <ImageTitle 
        title="Titulo" 
        subtitle="Subtitulo" 
        image="https://bulma.io/images/placeholders/1280x960.png"
      />
      <SectionContent></SectionContent>
    </Fragment>
  );
}

export default App;

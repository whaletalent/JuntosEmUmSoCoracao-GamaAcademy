import React, { Component, Fragment } from "react";
import { Hero, Container, Title, Button, Content } from "rbx";
import NavMenu from "../NavMenu/NavMenu";
import "./heroSection.scss";

export default class HeroSection extends Component {
  render() {
    return (
      <Fragment>
        <Hero size="fullheight" color="default-blue" className="heroContainer">
          {/* Hero head: will stick at the top */}
          <Hero.Head>
            <NavMenu />
          </Hero.Head>
          {/* Hero content: will be in the middle */}
          <Hero.Body textAlign="centered" className="hero-wrapper">
            <Content textAlign="centered">
              <Title size="1">Apoie Nossa Causa!</Title>

              <Button color="default-blue" size="large" className="botaoHero">
                Ajudar
              </Button>
            </Content>
          </Hero.Body>
        </Hero>
      </Fragment>
    );
  }
}

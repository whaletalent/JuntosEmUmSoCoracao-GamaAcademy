import React, { Fragment } from "react";
import { Footer, Section, Content, Navbar, Container, Button } from "rbx";

import MenuFooter from "./menuFooter";
import ContatoFooter from "./contatoFooter";
import SocialMediaFooter from "./socialMediaFooter";
import "./styles.scss";

const sections = {
  menuItems: [
    { label: "Quem Somos", section: "section1" },
    { label: "Quero ser um voluntário", section: "section2" },
    { label: "Doações", section: "section3" },
    { label: "Seja um Patrocinador", section: "section4" },
    { label: "Notícias", section: "section5" },
    { label: "Contato", section: "section6" },
    { label: "Galeria", section: "section7" }
  ]
};

const SectionFooter = () => (
  <Fragment>
    <Footer backgroundColor="default-blue">
      <Section>
        <Content>
          <MenuFooter sections={sections} />
          <ContatoFooter />
          <SocialMediaFooter />
        </Content>
      </Section>
    </Footer>
  </Fragment>
);

export default SectionFooter;

import React, { Component, Fragment } from "react";
import { Navbar, Container, Button } from "rbx";
import Scroll from "react-scroll-to-element";
import "./NavMenu.scss";
import logo from "../../assets/logo.png";

export default class NavMenu extends Component {
  state = {
    menuItems: [
      { label: "Quem Somos", section: "section1" },
      { label: "Quero ser um voluntário", section: "section2" },
      { label: "Doações", section: "section3" },
      { label: "Seja um Patrocinador", section: "section4" },
      { label: "Notícias", section: "section5" },
      // {label: 'Contato', section: 'section6'},
      { label: "Galeria", section: "section7" }
    ]
  };
  render() {
    return (
      <Fragment>
        <Navbar fixed="top" color="default-blue">
          <Container>
            <Navbar.Brand>
              <Navbar.Item>
                <img className="logo" src={logo} alt="Logo" />
              </Navbar.Item>
              <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
              <Navbar.Segment align="end">
                {this.state.menuItems.map(item => {
                  return (
                    //usar 'active' na tag para marcar o item ativado do menu
                    <Scroll type="id" element={item.section} key={item.section}>
                      <Navbar.Item>{item.label}</Navbar.Item>
                    </Scroll>
                  );
                })}
                <Navbar.Item as="span">
                  <Scroll type="id" element="section9">
                    <Button color="default-blue" inverted>
                      <span>Doar</span>
                    </Button>
                  </Scroll>
                </Navbar.Item>
              </Navbar.Segment>
            </Navbar.Menu>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

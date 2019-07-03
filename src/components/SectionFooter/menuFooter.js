import React, { Fragment } from "react";
import Scroll from "react-scroll-to-element";
import { Title } from "rbx";
import "./styles.scss";

const MenuFooter = ({ sections }) => (
  <Fragment>
    <Title textColor="light" size={5}>
      Menu
    </Title>
    {sections.menuItems.map(item => {
      return (
        //usar 'active' na tag para marcar o item ativado do menu
        <Scroll type="id" element={item.section} key={item.section}>
          <div className="footer-menu-item">{item.label}</div>
        </Scroll>
      );
    })}
  </Fragment>
);

export default MenuFooter;

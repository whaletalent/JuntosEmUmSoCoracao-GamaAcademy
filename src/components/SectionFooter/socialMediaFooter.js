import React, { Fragment } from "react";
import { Title, Content } from "rbx";
import "./styles.scss";

import LogoInsta from "../../assets/instagram.png";
import LogoFacebook from "../../assets/facebook.png";
import LogoWhatsApp from "../../assets/whatsapp.png";

const SocialMediaFooter = () => (
  <Content className="footer-content-social">
    <Title textColor="light" size={5}>
      Acompanhe a gente
    </Title>
    <div className="footer-social-media">
      <a
        className="footer-social-link"
        href="https://www.instagram.com/juntosemumsocoracao/"
      >
        <img src={LogoInsta} alt="logo instagram" />
      </a>
      <a
        href="https://www.facebook.com/juntosemumsocoracao/"
        className="footer-social-link"
      >
        <img src={LogoFacebook} alt="logo instagram" />
      </a>
    </div>
  </Content>
);

export default SocialMediaFooter;

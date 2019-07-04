import React from "react";
import { Title, Content } from "rbx";
import "./styles.scss";

const ContatoFooter = () => (
  <Content className="footer-content-contact">
    <Title textColor="light" size={5}>
      Contato
    </Title>
    <p className="footer-contato">
      <div>SÃO PAULO</div>
      <div>Rua Dr. Virgílio de Carvalho Pinto, 445</div>
      <div>Pinheiros – São Paulo – SP – Brasil – 05415-030 </div>
      <div>email@email.org.br</div>
      <div>+55 (11) 99238.6568</div>
    </p>
  </Content>
);

export default ContatoFooter;

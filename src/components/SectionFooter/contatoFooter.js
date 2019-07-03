import React, { Fragment } from "react";
import { Title } from "rbx";
import "./styles.scss";

const ContatoFooter = () => (
  <Fragment>
    <Title textColor="light" size={5}>
      Contato
    </Title>
    <p className="footer-contato">
      SÃO PAULO Rua Dr. Virgílio de Carvalho Pinto, 445 Pinheiros – São Paulo –
      SP – Brasil – 05415-030 email@email.org.br +55 (11) 99238.6568
    </p>
  </Fragment>
);

export default ContatoFooter;

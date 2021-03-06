import React, { Component, Fragment } from "react";
import {
  FaUtensils,
  FaTshirt,
  FaMitten,
  FaBaseballBall,
  FaTint,
  FaGift,
  FaHandshake
} from "react-icons/fa";

import "./DiskHelp.scss";

export default class DiskHelp extends Component {
  render() {
    return (
      <Fragment>
        <h5>
          Encontre amigos solidários com coração aberto para contribuir com sua
          causa. Desta forma você é ajudado com doações e voluntários e nossa
          rede de iniciativas não para de crescer. Nosso projeto promove ações
          relacionadas a diversas frentes de atuação, como por exemplo:
        </h5>
        <div className="ajude-content">
          <div>
            <p>
              <FaUtensils /> Arrecadação de alimentos
            </p>
            <p>
              <FaTshirt /> Arrecadação de roupas
            </p>
            <p>
              <FaMitten /> Arrecadação de agasalhos e cobertores
            </p>
            <p>
              <FaBaseballBall /> Arrecadação de brinquedos
            </p>
            <p>
              <FaTint /> Doação de sangue
            </p>
            <p>
              <FaGift /> Datas comemorativas{" "}
            </p>
            <p>
              <FaHandshake /> Trabalhos voluntários
            </p>
          </div>
          <div>
            <div>
              <h5>Quem pode ser ajudado:</h5>

              <p>Crianças e adolescentes</p>
              <p>Idosos</p>
              <p>Comunidades</p>
              <p>Moradores de rua</p>
              <p>Homens e Mulheres</p>
            </div>{" "}
          </div>
        </div>
      </Fragment>
    );
  }
}

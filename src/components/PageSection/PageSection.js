import React, { Component, Fragment } from "react";
import ReactHtmlParser from "react-html-parser";

import SectionContent from "../SectionContent/SectionContent";
import ImageTitle from "../ImageTitle/ImageTitle";

import ContactSection from "../SectionContact";
import { Button, Content, Title } from "rbx";
import ImageGalery from "../ImageGalery/ImageGalery";
import NewsSection from "../NewSection/NewsSection";
import DiskHelp from "../SectionContent/Contents/DiskHelp";

//image import
import make from "../../assets/maquiagem.jpg";
import sejaVoluntario from "../../assets/seja-voluntario.jpg";
import donate from "../../assets/doacoes.jpg";
import baby from "../../assets/childreen.jpg";

import hands from "../../assets/hands2.jpg";
import people from "../../assets/people-helping.jpg";
import hands2 from "../../assets/hands.jpg";
import handsHeart from "../../assets/hands-heart.jpg";
import { FaWhatsapp } from "react-icons/fa";

export default class PageSection extends Component {
  state = {
    contents: [
      {
        sectionId: "section1",
        sectionTitle: "Sobre a Instituição",
        sectionSubtitle: "",
        sectionText: `
         <p >Desde 2015, Fernanda Henriques fundadora do Projeto Social Juntos em um só coração mobiliza e coordena um grupo de amigos voluntários que vem escrevendo uma nova história e o melhor de tudo praticando.
          Alegria, fé na vida, espontaneidade, amor no coração, comprometimento são os elementos essenciais para ser um dos nossos amigos voluntários.</p> `,
        imageUrl: make
      },
      {
        sectionId: "section2",
        sectionTitle: "Seja um Voluntário",
        sectionSubtitle: "Participe conosco das nossas ações",
        sectionText: `
        <p>
        Somos um grupo de amigos escrevendo uma nova história e, o melhor de tudo, praticando. Venha fazer parte e ajudar a comunidade.

        Conheça Nossas Ações.
        </p>
        <h3  style="
        text-align: center;
        font-size: 36px;
        margin-bottom: 40px;">
          Deixe seu contato para saber mais:
        </h3>
        <p style="
        display: flex;
        justify-content: center;
        height: 1300px;">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe1cydGhpZ8IkUn1tX_3wBGhTF81wy1ZtDEp26p2Lv1B_yFgQ/viewform?embedded=true" width="640" height="1668" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
        </p>
        `,
        imageUrl: sejaVoluntario
      },
      {
        sectionId: "section3",
        sectionTitle: "Doações",
        sectionSubtitle: "",
        sectionText: `
        <p>
        <h5>
        Encontre amigos solidários com coração aberto para contribuir com sua
        causa. Desta forma você é ajudado com doações e voluntários e nossa
        rede de iniciativas não para de crescer. Nosso projeto promove ações
        relacionadas a diversas frentes de atuação, como por exemplo:
      </h5>
      <div style="display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 2.5em;
      padding: 0 20px;">
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
            <FaGift /> Datas comemorativas
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
          </div>
        </div>
      </div>
        </p>
`,
        imageUrl: donate
      },
      {
        sectionId: "section4",
        sectionTitle: "Patrocine nossa ONG",
        sectionSubtitle: "",
        sectionText: `
        <p>Participe como um patrocinador da Juntos em um só Coração e nos ajude a ajudar
        as ONGs que mais necessitam. O patrocínio ajuda a custear todas as ações que
        realizamos, financiando compra de recursos para ações. A sua ajuda, mesmo que
        pequena, tem o poder de transformar a vida pessoas.</p>
        <p>Ao apoiar a nossa ONG, além do prazer de trazer alegria para a vida de muitos, se
        você for uma pessoa jurídica a sua empresa terá um lugar especial no nosso site e
        no material de nossas ações.</p>
        <p>Seja um patrocinador e mtransforme a vida de alguém!.</p>
       
        <p style="
        display: flex;
        justify-content: center;
        height: 800px;" >
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2NIAXoj6tTEU-WBX5fRHw-F0VYCIlPqJLmEcc4Sw14nxQ-w/viewform?embedded=true" width="640" height="716" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
        </p>
        `,

        imageUrl: hands
      }
    ]
  };
  render() {
    return (
      <Fragment>
        {this.state.contents.map(content => {
          return (
            <Fragment key={content.sectionId}>
              <ImageTitle
                index={content.sectionId}
                title={content.sectionTitle}
                image={content.imageUrl}
              />
              <SectionContent>
                <Content
                  size="medium
                "
                >
                  {ReactHtmlParser(content.sectionText)}
                </Content>
              </SectionContent>
            </Fragment>
          );
        })}
        <ImageTitle index="section5" title="Notícias da ONG" image={people} />
        <NewsSection />
        <ImageGalery />
      </Fragment>
    );
  }
}

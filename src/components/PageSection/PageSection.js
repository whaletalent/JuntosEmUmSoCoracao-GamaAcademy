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
        sectionText: `Somos um grupo de amigos escrevendo uma nova história e, o melhor de tudo, praticando. Venha fazer parte e ajudar a comunidade.

        Conheça Nossas Ações.
        `,
        imageUrl: sejaVoluntario
      },
      {
        sectionId: "section3",
        sectionTitle: "Doações",
        sectionSubtitle: "",
        sectionText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                iaculis mauris.`,
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
        <p>Seja um patrocinador e mtransforme a vida de alguém!.</p>`,

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
        {/* <ContactSection/> */}

        <ImageGalery />
        <ImageTitle
          index="section8"
          title="Ajude"
          subtitle=""
          image={handsHeart}
        />
        <SectionContent>
          <DiskHelp />
        </SectionContent>
      </Fragment>
    );
  }
}

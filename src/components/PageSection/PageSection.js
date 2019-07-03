import React, { Component, Fragment } from "react";
import SectionContent from "../SectionContent/SectionContent";
import ImageTitle from "../ImageTitle/ImageTitle";

import ContactSection from "../SectionContact";
import { Button } from "rbx";
import ImageGalery from "../ImageGalery/ImageGalery";
import NewsSection from "../NewSection/NewsSection";
import DiskHelp from "../SectionContent/Contents/DiskHelp";

//image import
import boy from "../../assets/boy.jpg";
import baby from "../../assets/childreen.jpg";
import donate from "../../assets/donate.jpg";
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
        sectionTitle: "Quem Somos",
        sectionSubtitle: "",
        sectionText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                iaculis mauris.`,
        imageUrl: boy
      },
      {
        sectionId: "section2",
        sectionTitle: "Seja um Voluntário",
        sectionSubtitle: "Participe conosco das nossas ações",
        sectionText: ` Somos um grupo de amigos escrevendo uma nova história e, o melhor de tudo, praticando. Venha fazer parte e ajudar a comunidade.

        Conheça Nossas Ações.
        `,
        imageUrl: baby
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
        sectionTitle: "Seja Um Patrocinador",
        sectionSubtitle: "",
        sectionText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                iaculis mauris.`,

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
              <SectionContent textContent={content.sectionText} />
            </Fragment>
          );
        })}
        <ImageTitle index="section5" title="Últimas Notícias" image={people} />
        <NewsSection />
        {/* <ContactSection/> */}

        <ImageGalery />
        <ImageTitle
          index="section8"
          title="Disk Ajuda"
          subtitle=""
          image={handsHeart}
        />
        <SectionContent>
          <DiskHelp />
        </SectionContent>

        <ImageTitle
          index="section9"
          title="Doações"
          subtitle="Encontre amigos solidários com coração aberto para contribuir com sua causa!"
          image={hands2}
        >
          <Button size="medium">
            <FaWhatsapp /> &nbsp; Contato Via Whatsapp
          </Button>
        </ImageTitle>
      </Fragment>
    );
  }
}

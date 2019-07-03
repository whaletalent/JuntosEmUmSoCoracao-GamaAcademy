import React, { Component, Fragment } from "react";
import SectionContent from "../SectionContent/SectionContent";
import ImageTitle from "../ImageTitle/ImageTitle";
import ContactSection from '../SectionContact'
import NewsSection from '../NewSection/NewsSection'
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
        imageUrl: "https://bulma.io/images/placeholders/1280x960.png"
      },
      {
        sectionId: "section2",
        sectionTitle: "Quero Ser um Voluntário",
        sectionSubtitle: "",
        sectionText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                iaculis mauris.`,
        imageUrl: "https://bulma.io/images/placeholders/1280x960.png"
      },
      {
        sectionId: "section3",
        sectionTitle: "Doações",
        sectionSubtitle: "",
        sectionText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                iaculis mauris.`,
        imageUrl: "https://bulma.io/images/placeholders/1280x960.png"
      },
      {
        sectionId: "section4",
        sectionTitle: "Seja Um Patrocinador",
        sectionSubtitle: "",
        sectionText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                iaculis mauris.`,

        imageUrl: "https://bulma.io/images/placeholders/1280x960.png"
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
                subtitle={content.sectionSubtitle}
                image={content.imageUrl}
              />
              <SectionContent textContent={content.sectionText} />
            </Fragment>
          );
        })}
        <ImageTitle
                index="section5"
                title="Últimas Notícias"
                subtitle="Acompanhe as últimas postagens"
                image={this.state.contents[1].imageUrl}
                />
        <NewsSection/>
        <ContactSection/>
      </Fragment>
    );
  }
}

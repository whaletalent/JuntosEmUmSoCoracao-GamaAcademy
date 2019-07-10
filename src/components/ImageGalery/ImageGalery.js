import React, { Fragment } from "react";
import { Card, Content, Column, Image, Title } from "rbx";
import camera from "../../assets/camera.jpg";
import Galery from "./Galery";

import "./ImageGalery.scss";

import gallery from "../../assets/galeria.jpg";

import ImageTitle from "../ImageTitle/ImageTitle";
import ContactForm from "../ContactForm";

import { FaInstagram } from "react-icons/fa";
//images

import criancaEvento from "../../assets/crianca-evento.png";
import voluntarioFantasiado from "../../assets/voluntario-fantasiado.png";
import evento from "../../assets/evento.png";
import criancas from "../../assets/crianca8744s-01.png";

const ImageGalery = () => (
  <Fragment>
    <ImageTitle
      index="section7"
      title="Galeria"
      subtitle="Confira nossa galeria de fotos"
      image={gallery}
    />
    <Card className="gallery-card">
      <Card.Content>
        <Content size="medium">
          <Column.Group centered gapSize={5}>
            <Column size="three-quarters">
              <Column.Group gapSize={5}>
                <Column>
                  <Image.Container size="16by9">
                    <Image src={criancaEvento} />
                  </Image.Container>
                </Column>
                <Column>
                  <Image.Container size="16by9">
                    <Image src={voluntarioFantasiado} />
                  </Image.Container>
                </Column>
                <Column>
                  <Image.Container size="16by9">
                    <Image src={evento} />
                  </Image.Container>
                </Column>
              </Column.Group>
              {/* <Galery /> */}
            </Column>
          </Column.Group>
          <Column.Group centered gapSize={5}>
            <Title size={3}>Visite Nosso Intagram!</Title>
          </Column.Group>
          <Column.Group centered gapSize={5}>
            <div className="gallery-container-link">
              <a
                className="gallery-link"
                href="https://www.instagram.com/juntosemumsocoracao/"
              >
                <FaInstagram />
              </a>
            </div>
          </Column.Group>
        </Content>
      </Card.Content>
    </Card>
  </Fragment>
);

export default ImageGalery;

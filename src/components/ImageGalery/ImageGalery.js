import React, { Fragment } from "react";
import { Card, Content, Column } from "rbx";
import camera from '../../assets/camera.jpg'
import Galery from './Galery'

import ImageTitle from "../ImageTitle/ImageTitle";
import ContactForm from "../ContactForm";

const ImageGalery = () => (
  <Fragment>
    <ImageTitle
      index="section7"
      title="Galeria"
      subtitle="Confira nossa galeria de fotos"
      image= {camera}
    />
    <Card>
      <Card.Content>
        <Content>
          <Column.Group centered>
            <Column size="three-quarters">
              <Galery/>
            </Column>
          </Column.Group>
        </Content>
      </Card.Content>
    </Card>
  </Fragment>
);

export default ImageGalery;

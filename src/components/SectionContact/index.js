import React, { Fragment } from "react";
import { Card, Image, Media, Title, Content, Column } from "rbx";

import ImageTitle from "../ImageTitle/ImageTitle";
import ContactForm from "../ContactForm";

const SectionContact = () => (
  <Fragment>
    <ImageTitle
      index="section6"
      title="Contato"
      image="https://bulma.io/images/placeholders/1280x960.png"
    />
    <Card>
      <Card.Content>
        <Content>
          <Column.Group centered>
            <Column size="three-quarters">
              <ContactForm />
            </Column>
          </Column.Group>
        </Content>
      </Card.Content>
    </Card>
  </Fragment>
);

export default SectionContact;

import React, { Component, Fragment } from "react";
import { Card, Image, Media, Title, Content } from "rbx";

export default class SectionContent extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <Card.Content>
            <Media>
              <Media.Item as="figure" align="left">
                <Image.Container as="p" size={64}>
                  <Image
                    alt="64x64"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </Image.Container>
              </Media.Item>
              <Media.Item>
                <Title as="p" size={4}>
                  Test Title
                </Title>
                <Title as="p" subtitle size={6}>
                  Test Subtitle
                </Title>
              </Media.Item>
            </Media>
            <Content>
              {this.props.textContent}
              <a href="#css">#css</a>{" "}
              <a href="#responsive">#BrunoApoRapidoDemais</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </Content>
          </Card.Content>
        </Card>
      </Fragment>
    );
  }
}

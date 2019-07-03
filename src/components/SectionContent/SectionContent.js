import React, { Component, Fragment } from "react";
import { Card, Content } from "rbx";
import './SectionContent.scss'

export default class SectionContent extends Component {
  render() {
    return (
      <Fragment>
        <Card className="contentCard">
          <Card.Content>
            <Content>
              {this.props.textContent}
              {this.props.children}
            </Content>
          </Card.Content>
        </Card>
      </Fragment>
    );
  }
}

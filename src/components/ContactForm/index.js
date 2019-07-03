import React, { Component, Fragment } from "react";
import { Field, Control, Input, Textarea, Button, Column } from "rbx";

import ValidationContract from "../../validators/fluent-validator";
// import { Container } from './styles';

export default class ContactForm extends Component {
  state = {
    email: "",
    name: "",
    comment: ""
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, name } = this.state;
    let contract = new ValidationContract();
    contract.hasMinLen(name, 3, "Erro ao cadastrar nome");
    contract.isEmail(email, "O email não está no formato correto");
    if (!contract.isValid()) {
      console.log("Ops... falha ao cadastrar contato");
      return false;
    }

    try {
      //colocar
      console.log("sucesso");
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { email, name, comment } = this.state;
    return (
      <Fragment>
        <Column.Group centered>
          <Column size="half">
            <form onSubmit={this.handleSubmit} type="post">
              <Field horizontal>
                <Field.Label size="normal" />
                <Field.Body>
                  <Field>
                    <Control expanded iconLeft>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={name}
                        onChange={this.handleInputChange}
                      />
                    </Control>
                  </Field>
                </Field.Body>
              </Field>
              <Field horizontal>
                <Field.Label size="normal" />
                <Field.Body>
                  <Field>
                    <Control expanded iconLeft iconRight>
                      <Input
                        placeholder="Email"
                        name="email"
                        valeu={email}
                        type="email"
                        onChange={this.handleInputChange}
                      />
                    </Control>
                  </Field>
                </Field.Body>
              </Field>
              <Field horizontal>
                <Field.Label size="normal" />
                <Field.Body>
                  <Field>
                    <Control>
                      <Textarea
                        type="text"
                        name="comment"
                        placeholder="Nome"
                        value={comment}
                        onChange={this.handleInputChange}
                      />
                    </Control>
                  </Field>
                </Field.Body>
              </Field>
              <Field horizontal>
                <Field.Label /> {/* Left empty for spacing  */}
                <Field.Body>
                  <Field>
                    <Control>
                      <Button fullwidth size="large" key="large" color="ligth">
                        Enviar
                      </Button>
                    </Control>
                  </Field>
                </Field.Body>
              </Field>
            </form>
          </Column>
        </Column.Group>
      </Fragment>
    );
  }
}

import React, { Component, Fragment } from "react";
import { Field, Control, Input, Textarea, Button, Column } from "rbx";
import './ContactForm.scss'
import ValidationContract from "../../validators/fluent-validator";

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
        <Column.Group centered >
          <Column size="full" className="formCard">
            <form onSubmit={this.handleSubmit} type="post">
              <Field horizontal>
                
                <Field.Body>
                  <Field>
                    <Control expanded iconLeft>
                      <Input
                        required
                        type="text"
                        name="name"
                        placeholder="Nome"
                        color="default-blue"
                        value={name}
                        onChange={this.handleInputChange}
                      />
                    </Control>
                  </Field>
                </Field.Body>
              </Field>
              <Field horizontal>
                
                <Field.Body>
                  <Field>
                    <Control expanded iconLeft iconRight>
                      <Input
                        required
                        placeholder="Email"
                        name="email"
                        color="default-blue"
                        valeu={email}
                        type="email"
                        onChange={this.handleInputChange}
                      />
                    </Control>
                  </Field>
                </Field.Body>
              </Field>
              <Field horizontal>
                <Field.Body>
                  <Field>
                    <Control>
                      <Textarea
                        required
                        type="text"
                        name="comment"
                        color="default-blue"
                        placeholder="Mensagem"
                        value={comment}
                        onChange={this.handleInputChange}
                      />
                    </Control>
                  </Field>
                </Field.Body>
              </Field>
              <Field horizontal>
                <Field.Body>
                  <Field>
                    <Control>
                      <Button color="default-blue" fullwidth size="large" key="large">
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

import React, { Component } from "react";
import { FaGithub, FaPlus, FaSpinner } from "react-icons/fa";

import api from "../../services/api";

import { Container, Form, List, SubmitButton } from "./styles";

export default class Main extends Component {
  state = {
    newRepo: "",
    repositories: [],
    loading: false
  };

  //pegando dados do input
  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  //pegando o submit
  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    //pegando o nome do repos digitado no form e os repos
    const { newRepo, repositories } = this.state;
    const response = await api.get(`repos/${newRepo}`);

    //criando uma variável para armazenar o repos
    const data = {
      name: response.data.full_name
    };

    //modificando o stado da variável que guardas uma lista de repos
    this.setState({
      repositories: [...repositories, data],
      newRepo: "",
      loading: false
    });
    //console.log(response.data);
  };

  render() {
    const { newRepo, repositories, loading } = this.state;
    return (
      <Container>
        <h1>
          <FaGithub />
          Fala Brother!
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome..."
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <a href="#">Detalhes</a>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

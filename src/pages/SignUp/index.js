import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/airbnb-logo.svg";

// CSS in JS sample
import { Form, Container, Button } from "./styles";

import api from "../../services/api";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: "",
  };

  handleSignUp = async (e) => {
    e.preventDefault();
    alert("Eu vou te registrar");

    const { username, email, password } = this.state;

    if (!username || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", { username, email, password });
        this.props.history.push("/");
      } catch (error) {
        this.setState({ error: "Ocorreu um erro ao registrar sua conta" });
      }
    }
  };

  render() {
    // inline CSS
    const btnStyle = { color: "WhiteSmoke", backgroundColor: "Indigo" };

    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="Airbnb logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={(e) => this.setState({ username: e.target.value })}
            // inline CSS
            style={{ backgroundColor: "AliceBlue" }}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          {/* inline CSS */}
          <button type="submit" style={btnStyle}>
            Cadastrar grátis
          </button>
          <hr />
          <Link to="/">Fazer login</Link>
          {/* CSS in JS sample */}
          <Button primary>CSS in JS sample</Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);

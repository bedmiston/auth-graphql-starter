import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import AuthForm from "./AuthForm";
import loginUser from "../mutations/LoginUser";
import currentUserQuery from "../queries/CurrentUser";

class LoginForm extends Component {
  loginHandler(email, password) {
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{ query: currentUserQuery }]
      })
      .then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm submitted={this.loginHandler.bind(this)} />
      </div>
    );
  }
}

export default graphql(loginUser)(LoginForm);

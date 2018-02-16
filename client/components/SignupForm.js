import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import AuthForm from "./AuthForm";
import signupUser from "../mutations/SignupUser";
import currentUserQuery from "../queries/CurrentUser";

class LoginForm extends Component {
  signupHandler(email, password) {
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
    return <AuthForm submitted={this.signupHandler} />;
  }
}

export default graphql(signupUser)(LoginForm);

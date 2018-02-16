import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import AuthForm from "./AuthForm";
import signup from "../mutations/Signup";
import currentUserQuery from "../queries/CurrentUser";

class LoginForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     errors: []
  //   };
  // }

  state = {
    errors: []
  };
  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{ query: currentUserQuery }]
      })
      .then(() => hashHistory.push("/dashboard"))
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(signup)(LoginForm);

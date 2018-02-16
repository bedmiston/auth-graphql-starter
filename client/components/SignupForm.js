import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import AuthForm from "./AuthForm";
import signup from "../mutations/Signup";
import currentUserQuery from "../queries/CurrentUser";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.data.user) {
      hashHistory.push("/dashboard");
    }
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{ query: currentUserQuery }]
      })
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

export default graphql(currentUserQuery)(graphql(signup)(SignupForm));

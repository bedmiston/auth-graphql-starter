import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.submitted(this.state.email, this.state.password);
  }

  render() {
    return (
      <form onSubmit={() => this.onSubmit(event)}>
        <label>Email:</label>
        <input
          type="text"
          value={this.state.email}
          onChange={event => this.setState({ email: event.target.value })}
        />
        <label>Password:</label>
        <input
          type="password"
          value={this.state.password}
          onChange={event => this.setState({ password: event.target.value })}
        />
        <button type="submit">{this.props.signup ? "SignUp" : "Login"}</button>
      </form>
    );
  }
}

export default AuthForm;

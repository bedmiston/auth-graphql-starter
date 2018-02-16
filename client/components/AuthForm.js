import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit(e) {
    event.preventDefault();
    this.props.submitted(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="row">
        <form className="col s6" onSubmit={() => this.onSubmit(event)}>
          <div className="input-field">
            <label>Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={event => this.setState({ password: e.target.value })}
            />
          </div>
          <button className="btn" type="submit">
            {this.props.signup ? "SignUp" : "Login"}
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;

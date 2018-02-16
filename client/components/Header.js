import React, { Component } from "react";
import { graphql } from "react-apollo";
import currentUserQuery from "../queries/CurrentUser";
import { Link } from "react-router";
import logoutUserMutation from "../mutations/LogoutUser";

class Header extends Component {
  logoutHandler(event) {
    event.preventDefault();

    this.props.mutate().then(() => this.props.data.refetch());
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) {
      return <div />;
    }

    console.log(user);
    if (user) {
      return (
        <div>
          <li>
            <a onClick={this.logoutHandler.bind(this)}>Logout</a>
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(logoutUserMutation)(graphql(currentUserQuery)(Header));

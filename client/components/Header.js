import React, { Component } from "react";
import { graphql } from "react-apollo";
import currentUserQuery from "../queries/CurrentUser";

class Header extends Component {
  render() {
    console.log(this.props.data);
    const data = this.props.data;

    if (data.loading) {
      return <div>Loading...</div>;
    }

    const { user } = data;
    return <div>Header</div>;
  }
}

export default graphql(currentUserQuery)(Header);

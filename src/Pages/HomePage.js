import React, { Component } from "react";
import { Link } from "react-router-dom";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <Link to="/">Users</Link>
      </div>
    );
  }
}

export default HomePage;

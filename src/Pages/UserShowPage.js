import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class UserShowPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container" style={styles}>
          <h1 className="mb-5" style={{ textAlign: "center" }}>
            User Show Page
          </h1>
          <p className="mb-5">User ID: {this.props.match.params.id}</p>

          <Link to="/">Go Home</Link>
        </div>
      </React.Fragment>
    );
  }
}

let styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
};

export default UserShowPage;

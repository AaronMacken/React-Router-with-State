import React, { Component } from "react";
import User from "./User";
import PropTypes from "prop-types";

class Users extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.users.map((user) => (
            <div className="col-12 col-md-6 mt-5 todos-col" key={user.id}>
              <User user={user} delete={this.props.delete} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  delete: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

export default Users;

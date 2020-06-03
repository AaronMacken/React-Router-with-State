import React from "react";
import EditUser from "./EditUser";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

export default function User(props) {
  console.log(props);
  return (
    <div className="todo">
      <Link to={`/users/${props.user.id}`}>
        <p style={{ padding: "2rem", width: "75%", textAlign: "center" }}>
          {`${props.user.name}`}
        </p>
      </Link>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          className="btn btn-danger"
          onClick={() => props.delete(props.user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  delete: PropTypes.func.isRequired,
};

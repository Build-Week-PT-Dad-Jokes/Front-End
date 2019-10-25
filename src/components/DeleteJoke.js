import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { loginUser } from "../actions";

const DeleteJoke = props => {
  const { jokeID } = props;

  const deleteJoke = id => {
    axiosWithAuth()
      .delete(`https://dadjokesbw.herokuapp.com/api/jokes/${id}`)
      .then(res => {
        axiosWithAuth()
          .get(`/users/${id}`)
          .then(res => {
            loginUser(res.data);
            alert('This joke has successfully been deleted.')
          })
          .catch(err => console.error(err.response));
      })
      .catch(err => console.error(err.response))
  };

  return <DeleteIcon onClick={() => deleteJoke(jokeID)} />;
};

export default connect(
  null,
  { loginUser }
)(DeleteJoke);

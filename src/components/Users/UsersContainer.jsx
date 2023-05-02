import React from 'react';
import {connect} from "react-redux";
import {subscribeAC, setUsersAC, unsubscribeAC} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    subscribe: (userId) => {dispatch(subscribeAC(userId))},
    unsubscribe: (userId) => {dispatch(unsubscribeAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))}
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
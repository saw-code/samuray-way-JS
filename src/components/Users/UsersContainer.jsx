import React from 'react';
import {connect} from "react-redux";
import {subscribeAC, setUsersAC, unsubscribeAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    subscribe: (userId) => {dispatch(subscribeAC(userId))},
    unsubscribe: (userId) => {dispatch(unsubscribeAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
    setTotalUsersCount: (totalUsersCount) => {dispatch(setTotalUsersCountAC(totalUsersCount))}
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
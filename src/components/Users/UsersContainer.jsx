import React from 'react';
import {connect} from "react-redux";
import {subscribeAC, setUsersAC, unsubscribeAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <Users
      users={this.props.users}
      pageSize={this.props.pageSize}
      totalUsersCount={this.props.totalUsersCount}
      currentPage={this.props.currentPage}
      subscribe={this.props.subscribe}
      unsubscribe={this.props.unsubscribe}
      onPageChanged={this.onPageChanged}
    />
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
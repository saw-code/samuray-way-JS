const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState = {
  users: []
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {...state, users: state.users.map(el => el.id === action.userId ? {...el, subscribe: true} : el )}
    }

    case UNFOLLOW: {
      return {...state, users: state.users.map(el => el.id === action.userId ? {...el, subscribe: false} : el )}
    }

    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }

    default:
      return state
  }
}

export const subscribeAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}

export const unsubscribeAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export default UsersReducer;

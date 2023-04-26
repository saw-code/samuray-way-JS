const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessageBody = state.newMessage

      state.messages.push({id: 6, message: newMessageBody})
      state.newMessage = ""
      return state

    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.newMessage
      return state

    default:
      return state
  }
}

export const addMessageAC = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateNewMessageAC = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    newMessage: text
  }
}

export default dialogsReducer;

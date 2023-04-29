const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"

let initialState = {
  dialogs: [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Valera"}
  ],
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
  ],
  newMessage: ""
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessageBody = state.newMessage

      return {
        ...state,
        messages: [...state.messages, {id: 6, message: newMessageBody}],
        newMessage: ""
      }
    }

    case UPDATE_NEW_MESSAGE: {
      return {...state, newMessage: action.newMessage}
    }

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

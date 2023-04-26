const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MESSAGE = "ADD=MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"

export let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
      ],
      newPostText: ""
    },

    dialogsPage: {
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
  },
  _callSubscriber() {
    console.log("State changed")
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ""
      this._callSubscriber(this._state)
    }

    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }

    if (action.type === ADD_MESSAGE) {
      const newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessage
      }

      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessage = ""
      this._callSubscriber(this._state)
    }

    if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogsPage.newMessage = action.newMessage
      this._callSubscriber(this._state)
    }
  }
}

export const addPostAC = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextAC = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
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

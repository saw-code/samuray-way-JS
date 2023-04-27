import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

export const DialogsContainer = (props) => {

  let dialogsPageState = props.store.getState().dialogsPage

  let addMessage = () => {
    props.store.dispatch(addMessageAC())
  }

  let messageChange = (text) => {
    props.store.dispatch(updateNewMessageAC(text))
  }

  return <Dialogs
    messageChange={messageChange}
    addMessage={addMessage}
    dialogsPage={dialogsPageState}
  />
};

import React, {useContext} from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

export const DialogsContainer = () => {
  const store = useContext(StoreContext)

  let dialogsPageState = store.getState().dialogsPage

  let addMessage = () => {
    store.dispatch(addMessageAC())
  }

  let messageChange = (text) => {
    store.dispatch(updateNewMessageAC(text))
  }

  return <Dialogs
    messageChange={messageChange}
    addMessage={addMessage}
    dialogsPage={dialogsPageState}
  />
};

import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

export const DialogsContainer = () => {

  return <StoreContext.Consumer>
    {(store) => {
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
    }
    }
  </StoreContext.Consumer>
};

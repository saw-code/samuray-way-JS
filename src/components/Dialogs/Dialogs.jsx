import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
  let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)

  let addMessage = () => {
    props.store.dispatch(addMessageAC())
  }

  let onMessageChange = (event) => {
    let text = event.currentTarget.value
    props.store.dispatch(updateNewMessageAC(text))
  }

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea onChange={onMessageChange} value={state.newMessage}></textarea></div>
          <div>
            <button onClick={addMessage}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

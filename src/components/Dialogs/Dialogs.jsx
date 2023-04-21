import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
  let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

  let newMessageElement = React.createRef()

  let addMessage = () => {
    let text = newMessageElement.current.value
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea ref={newMessageElement}></textarea>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

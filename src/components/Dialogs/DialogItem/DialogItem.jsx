import React from 'react';
import s from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`

  return (
    <div className={`${s.dialogs} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

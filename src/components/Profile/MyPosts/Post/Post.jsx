import React from 'react';
import s from "./Post.module.css"

export const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://img.freepik.com/premium-vector/doodle-astonished-emoji-round-sketchy-funny-avatar-vector-illustration-isolated-on-white-background_81894-5330.jpg?w=826"/>
      {props.message}
      <div>
        <span>{props.likesCount}</span>
      </div>
    </div>
  )
}

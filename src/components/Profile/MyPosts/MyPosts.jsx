import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

export const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch(addPostAC())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextAC(text))
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {
  let state = props.store.getState()

  let addPost = () => {
    props.store.dispatch(addPostAC())
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextAC(text))
  }

  return <MyPosts
    updateNewPostText={onPostChange}
    addPost={addPost}
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}
  />
}

import React, {useContext} from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = () => {
  const store = useContext(StoreContext)

  let state = store.getState()

  let addPost = () => {
    store.dispatch(addPostAC())
  }

  let onPostChange = (text) => {
    store.dispatch(updateNewPostTextAC(text))
  }

  return <MyPosts
    updateNewPostText={onPostChange}
    addPost={addPost}
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}
  />
}

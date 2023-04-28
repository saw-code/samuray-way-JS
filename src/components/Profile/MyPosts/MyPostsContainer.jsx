import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = () => {


  return <StoreContext.Consumer>
    {(store) => {
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
    }
  </StoreContext.Consumer>
}

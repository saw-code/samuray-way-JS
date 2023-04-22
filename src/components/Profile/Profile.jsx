import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

export const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               updateNewPostText={props.updateNewPostText}
               addPost={props.addPost}/>
    </div>
  )
}

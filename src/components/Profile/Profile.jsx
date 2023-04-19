import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
  ]

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  )
}

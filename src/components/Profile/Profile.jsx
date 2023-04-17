import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
          alt="picture"/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}

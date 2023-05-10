import React from 'react';
import s from "./ProfileInfo.module.css"
import {Preloader} from "../../common/preloader/Preloader";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img
          src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
          alt="picture"/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        ava + description
      </div>
    </div>
  )
}

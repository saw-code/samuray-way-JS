import React from 'react';
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
          alt="picture"/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

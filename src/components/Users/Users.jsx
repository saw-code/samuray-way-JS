import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/default.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p && s.selectedPage}
                       onClick={() => props.onPageChanged(p)}>{p}</span>
        })}

      </div>
      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={`/profile/${u.id}`}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
            </NavLink>
          </div>
          <div>
            {u.subscribe
              ? <button onClick={() => {

                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  headers: {"API-KEY": "62d19d64-cb0c-4ed8-b41b-45e7b014617c"},
                  withCredentials: true
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id)
                    }
                  })


              }}>Unfollow</button>
              : <button onClick={() => {

                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                  {
                    headers: {"API-KEY": "62d19d64-cb0c-4ed8-b41b-45e7b014617c"},
                    withCredentials: true
                  })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id)
                    }
                  })


              }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>)}
    </div>
  );
};

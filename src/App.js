import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg"/>
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img
            src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
            alt="picture"/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import userAvatar from '../images/user-avatar.jpg';
import repoStar from '../images/star.svg';
import userFollowers from '../images/followers.svg';

const User = ({ user }) => (
  <div className="user">
    <div className="white-background"></div>
    <div>
      <img src={userAvatar} alt="User Avatar" className="user-avatar"/>
      <p className="user-name">{user.name}</p>
      <p className="user-email">{user.email}</p>
      <div className="user-followers">
        <img src={userFollowers} alt="Followers Icon"/>
        <span className="user-followers--count">{user.followers}</span>
        <span>Followers</span>
      </div>
    </div>
    <div className="user-repo-division"></div>
    <div className="user-repo">
      <div className="user-repo--details">
        <p className="user-repo--name">{user.repo.name}</p>
        <div className="user-repo--stars">
          <img src={repoStar} alt="Repository Stars"/>
          <span>{user.repo.stars}</span>
        </div>
      </div>
      <p className="user-repo--description">{user.repo.description}</p>
    </div>
    <div className="user-profile--btn">open profile</div>
  </div>
);

export default User;

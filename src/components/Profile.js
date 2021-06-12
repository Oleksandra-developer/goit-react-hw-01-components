import PropTypes from "prop-types";
import React from "react";
// import ReactDOM from "react-dom";
// import user from "./user.json";

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers </span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views </span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes </span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);
Profile.defaultProps = {
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;

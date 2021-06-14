import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendsList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.item} key={id}>
        {!isOnline ? (
          <span className={styles.statusDisable}></span>
        ) : (
          <span className={styles.statusEnable}></span>
        )}

        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);
FriendsList.defaultProps = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendsList;

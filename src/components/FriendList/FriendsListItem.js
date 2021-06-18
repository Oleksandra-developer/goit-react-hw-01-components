import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendsListItem = ({ avatar, name, isOnline, id }) => (
  <li className={styles.item} key={id}>
    <span
      className={isOnline ? styles.statusEnable : styles.statusDisable}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);
FriendsListItem.defaultProps = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendsListItem;

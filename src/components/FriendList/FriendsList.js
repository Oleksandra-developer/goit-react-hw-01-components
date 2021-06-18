import React from "react";
import FriendsListItem from "./FriendsListItem";
import styles from "./FriendList.module.css";

const FriendsList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendsListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        id={id}
      />
    ))}
  </ul>
);

export default FriendsList;

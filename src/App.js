import React from "react";
import Container from "./components/Container/Container";

import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";

import Statistics from "./components/Statistic/Statistics";
import statData from "./components/Statistic/statistical-data.json";

import friends from "./components/FriendList/friends.json";
import FriendsList from "./components/FriendList/FriendsList";

import transactions from "./components/Transaction/transactions.json";
import TransactionHistory from "./components/Transaction/TransactionHistory";
import "./App.css";

const App = () => {
  return (
    <>
      <Container>
        <section title="Task 1">
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </section>

        <section title="Task 2">
          <Statistics title="Upload stats" stats={statData} />
          <Statistics stats={statData} />
        </section>

        <section title="Task 3">
          <FriendsList friends={friends} />
        </section>

        <section title="Task 4">
          <TransactionHistory items={transactions} />
        </section>
      </Container>
    </>
  );
};

export default App;

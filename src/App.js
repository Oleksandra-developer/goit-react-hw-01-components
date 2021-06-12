import React from "react";
// import ReactDOM from "react-dom";
import Profile from "./components/Profile";
import user from "./components/user.json";
import Statistics from "./components/Statistics";
import statData from "./components/statistical-data.json";
import "./App.css";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;

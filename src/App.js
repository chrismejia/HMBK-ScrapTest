import React from "react";
import {
  BottomNav,
  ChatSchedule,
  EditorialFeed,
  Hero,
  TopNav
} from "./components/";

function App() {
  return (
    <div>
      <TopNav />
      <Hero />
      <ChatSchedule />
      <EditorialFeed />
      <BottomNav />
    </div>
  );
}

export default App;

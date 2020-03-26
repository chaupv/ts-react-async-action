import React from "react";
import "./App.css";
import UserList from "./components/UserList";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <UserList />
      </UserProvider>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";


import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello from react</h1>       
//     </div>
//   );
// }

class App extends Component {
  render() {
   
    return (
      <div className="App">
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;

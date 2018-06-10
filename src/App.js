import React, { Component } from "react";
import VideoBackground from "./components/VideoBackground.jsx";
import Slogan from "./components/Slogan.jsx";
import AboutAndCompleted from "./components/AboutAndCompleted.jsx";
import TopMenu from "./components/TopMenu.jsx";
import JoinUs from "./components/JoinUs.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="firstvp">
          <TopMenu />
          <VideoBackground />
        </div>
        <Slogan />
        <AboutAndCompleted />
        <JoinUs />
        <small>website ©2018 Colin Nielsen</small>
      </div>
    );
  }
}

export default App;

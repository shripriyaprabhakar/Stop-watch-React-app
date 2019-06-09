import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      min: 0,
      sec: 0,
      centiSec: 0,
      startText: "Start",
      lapText: "lap",
      lapCounter: 1
    };
  }

  fastTick = () => {
    this.setState({
      centiSec: this.state.centiSec + 1
    });
    if (this.state.centiSec === 100) {
      this.setState({ centiSec: 0, sec: this.state.sec + 1 });
    }
    if (this.state.sec === 60) {
      this.setState({ min: this.state.min + 1, sec: 0 });
    }
  };

  stopTimer = () => {
    clearInterval(this.fastTickCounter);
  };

  startTimer = e => {
    e.preventDefault();
    if (e.target.value === "Start") {
      this.setState({ startText: "Stop" });
      this.fastTickCounter = setInterval(() => {
        this.fastTick();
      }, 10);
    } else if (e.target.value === "Stop") {
      this.setState({ startText: "Start" });
      this.setState({ lapText: "Reset" });
      this.stopTimer();
    }
  };

  resetTime = e => {
    if (e.target.value === "Reset") {
      this.setState({ lapText: "lap", centiSec: 0, sec: 0, min: 0 });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Stop Watch</h1>
        <div className="screen">
          {this.state.min}: {this.state.sec} : {this.state.centiSec}
          <div className="btn-group">
            <button value={this.state.lapText} onClick={this.resetTime}>
              {this.state.lapText}
            </button>
            <button value={this.state.startText} onClick={this.startTimer}>
              {this.state.startText}
            </button>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>lap {this.state.lapCounter}</td>
                  <td>
                    {this.state.min}: {this.state.sec} : {this.state.centiSec}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

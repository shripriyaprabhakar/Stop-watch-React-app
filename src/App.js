import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      min: 0,
      sec: 0,
      milli: 0,
      text: "Start",
      counter: 0
    };
  }

  fastTick = () => {
    this.setState({ milli: this.state.milli + 1 });
    if (this.state.milli === 100) {
      this.setState({ milli: 0 });
    }
  };
  secTick = () => {
    this.setState({ sec: this.state.sec + 1 });
    if (this.state.sec === 60) {
      this.setState({ sec: 0 }, { min: this.state.min + 1 });
    }
  };

  startTimer = e => {
    if (e.target.value === "Start") {
      // var newText = this.state.text === "Start" ? "Reset" : "Start";
      this.setState({ text: "Reset" });
      this.fastTickCounter = setInterval(() => {
        this.fastTick();
      }, 1 / 100);
      this.secTickCounter = setInterval(() => {
        this.secTick();
      }, 1000);
    } else if (e.target.value === "Reset") {
      this.stopTimer();
      this.setState({ min: 0, sec: 0, milli: 0, text: "Start" });
    }
  };

  stopTimer = () => {
    clearInterval(this.fastTickCounter);
    clearInterval(this.secTickCounter);
    return (
      <div className="screen">
        {this.state.min} : {this.state.sec} : {this.state.milli}
      </div>
    );
  };

  render() {
    return (
      <div className="screen">
        <div className="text-screen">
          {this.state.min} : {this.state.sec} : {this.state.milli}
        </div>
        <section>
          <button
            className="btns btn-1"
            value={this.state.text}
            onClick={this.startTimer}
          >
            {this.state.text}
          </button>
          <button className="btns btn-2" onClick={this.stopTimer}>
            Stop
          </button>
        </section>
        <section>
          <table>
            <tbody>
              <tr>
                <td>lap</td>
                <td>1min</td>
              </tr>
              <tr>
                <td>lap</td>
                <td>1min</td>
              </tr>
              <tr>
                <td>lap</td>
                <td>1min</td>
              </tr>
              <tr>
                <td>lap</td>
                <td>1min</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;

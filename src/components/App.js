import React from "react";
import "../styles/App.css";
import Even from "./Even";
import Odd from "./Odd";

class App extends React.Component {
  handleChange() {
    this.setState({ even: !this.state.even });
  }
  constructor(props) {
    super(props);
    this.state = { even: true };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div id="main">
        {this.state.even ? <Even /> : <Odd />}

        <button id="toggle" onClick={this.handleChange}>
          Change
        </button>
      </div>
    );
  }
}

export default App;

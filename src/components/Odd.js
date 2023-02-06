import React from "react";

class Odd extends React.Component {
  componentWillUnmount() {
    console.log("Odd is unmounted");
  }
  render() {
    return <div id="odd">I am odd</div>;
  }
}

export default Odd;

import React from "react";

class Even extends React.Component {
  componentWillUnmount() {
    console.log("Even is unmounted");
  }
  render() {
    return <div id="even">I am even</div>;
  }
}

export default Even;

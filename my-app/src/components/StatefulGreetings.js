import React from "react";

class StatefulGreetings extends React.Component {
  render() {
    return <h1>Hello, {this.props.greeting}</h1>;
  }
}

export default StatefulGreetings;
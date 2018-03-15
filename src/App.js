import React, { Component } from "react";

const MAX_PIZZAS = 20;

const eatPizaa = (state, props) => {
  const { pizzas } = state;
  if (pizzas < MAX_PIZZAS) {
    return {
      pizzas: pizzas + 1
    };
  } else {
    return null;
  }
};

class Controlled extends Component {
  state = {
    pizzas: 0
  };
  render() {
    const { pizzas } = this.state;
    return (
      <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${
        pizzas === 1 ? "pizza" : "pizzas"
      }`}</button>
    );
  }
  _handleClick = () => {
    this.setState(eatPizaa);
  };
}

class App extends Component {
  render() {
    return <Controlled />;
  }
}

export default App;

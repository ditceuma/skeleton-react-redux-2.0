import React, { Component } from "react";
import { Logo } from "./Components";
import { decreaseRate, increaseRate } from "./Actions/appActions";
import { connect } from "react-redux";
import "./Assets/css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ rate: props.rate });
  }

  increase() {
    this.props.increaseRate(this.state.rate);
  }

  decrease() {
    this.props.decreaseRate(this.state.rate);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Sua nota para essa pagina: {this.props.rate}</p>
          <button
            target="_blank"
            onClick={this.increase}
            rel="noopener noreferrer"
          >
            Aumentar nota
          </button>
          <button
            target="_blank"
            onClick={this.decrease}
            rel="noopener noreferrer"
          >
            Diminuir nota
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rate: state.appState.rate
});

export default connect(
  mapStateToProps,
  { decreaseRate, increaseRate }
)(App);

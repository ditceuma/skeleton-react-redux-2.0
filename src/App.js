import React from "react";
import { Logo } from "./Components";
import { useDispatch, useSelector } from "react-redux";
import "./Assets/css/App.css";
import { incrementRate, decrementRate } from "./Slices/rate";

const App = () => {
  const rate = useSelector(state => state.rate);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Sua nota para essa pagina: {rate}</p>
        <button onClick={() => dispatch(incrementRate())}>
          Aumentar nota
        </button>
        <button onClick={() => dispatch(decrementRate())}>
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
};

export default App;

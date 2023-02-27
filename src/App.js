function App() {
  return (
    <div className="App">
      <div className="calculator-box">
        <div className="displays">
          <div className="upper-display">123</div>
          <div className="lower-display">123</div>
        </div>
        <div className="numpad">
          <div className="operation num-AC">
            <button className="operation-btn">AC</button>
          </div>
          <div className="operation">
            <button className="operation-btn">/</button>
          </div>
          <div className="operation">
            <button className="operation-btn">x</button>
          </div>
          <div className="">
            <button>7</button>
          </div>
          <div className="">
            <button>8</button>
          </div>
          <div className="">
            <button>9</button>
          </div>
          <div className="operation">
            <button className="operation-btn">-</button>
          </div>
          <div className="">
            <button>4</button>
          </div>
          <div className="">
            <button>5</button>
          </div>
          <div className="">
            <button>6</button>
          </div>
          <div className="operation">
            <button className="operation-btn">+</button>
          </div>
          <div className="">
            <button>1</button>
          </div>
          <div className="">
            <button>2</button>
          </div>
          <div className="">
            <button>3</button>
          </div>
          <div className="num-zero">
            <button>0</button>
          </div>
          <div className="">
            <button>.</button>
          </div>
          <div className="operation equal">
            <button className="operation-btn equal">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

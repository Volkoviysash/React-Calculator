import { useState } from "react";

function App() {
  const MaxDigits = 12;
  const MaxDecimalPart = MaxDigits / 2;
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "/", "*"];
  const divider = ".";

  const [result, setResult] = useState("");
  const [mathExpression, setMathExpression] = useState("");
  const [mathValue, setMathValue] = useState("");

  const numberHandleClick = (event) => {
    if (event.target.value == 0 && mathValue.length < 1) {
      return;
    }
    setResult("");
    setMathValue(mathValue.concat(event.target.value));
    setMathExpression(mathExpression.concat(event.target.value));
  };

  const operationHandleClick = (event) => {
    if (mathExpression.length < 1 && !/^[+-]$/.test(event.target.value)) {
      return;
    }
    if (operations.includes(mathExpression[mathExpression.length - 1])) {
      setMathExpression(mathExpression.slice(0, -1).concat(event.target.value));
      return;
    }
    setResult("");
    setMathExpression(mathExpression.concat(event.target.value));
    setMathValue("");
  };

  const dividerHandleClick = () => {
    if (mathValue.includes(divider)) {
      return;
    }
    setMathValue(mathValue.concat(divider));
    setMathExpression(mathExpression.concat(divider));
  };

  const clearDisplay = () => {
    if (mathValue) {
      setMathExpression(
        mathExpression.slice(0, mathExpression.lastIndexOf(mathValue))
      );
      setMathValue("");
    } else {
      setMathExpression("");
      setResult("");
    }
  };

  const handleEqual = () => {
    setResult(calculateResult());
    setMathExpression("");
    setMathValue("");
  };

  const calculateResult = () => {
    let operationResult = eval(mathExpression);
    if (Number.isInteger(operationResult)) {
      return operationResult.toString().length >= MaxDigits
        ? operationResult.toExponential(MaxDecimalPart)
        : operationResult;
    } else {
      return roundToFirstNonZero(operationResult);
    }
  };

  function roundToFirstNonZero(num) {
    const roundedNum = num.toFixed(MaxDecimalPart);
    const zeroIndex = roundedNum.indexOf("0", roundedNum.indexOf(".") + 1);
    if (zeroIndex === -1) {
      return roundedNum;
    }
    return roundedNum.slice(0, zeroIndex);
  }

  return (
    <div className="App">
      <div className="calculator-box">
        <div className="func-btns">
          <button className="close"></button>
          <button className="change-color"></button>
          <button className="info"></button>
        </div>
        <div className="displays">
          <div className="upper-display">{mathExpression}</div>
          <div id="display" className="lower-display">
            {result ? result : mathValue ? mathValue : "0"}
          </div>
        </div>
        <div className="line"></div>
        <div className="numpad">
          <div className="operation num-AC">
            <button
              id="clear"
              value="AC"
              onClick={clearDisplay}
              className="operation-btn"
            >
              AC
            </button>
          </div>
          <div className="operation">
            <button
              id="divide"
              value="/"
              onClick={operationHandleClick}
              className="operation-btn"
            >
              /
            </button>
          </div>
          <div className="operation">
            <button
              id="multiply"
              value="*"
              onClick={operationHandleClick}
              className="operation-btn"
            >
              x
            </button>
          </div>
          <div className="">
            <button id="seven" value="7" onClick={numberHandleClick}>
              7
            </button>
          </div>
          <div className="">
            <button id="eight" value="8" onClick={numberHandleClick}>
              8
            </button>
          </div>
          <div className="">
            <button id="nine" value="9" onClick={numberHandleClick}>
              9
            </button>
          </div>
          <div className="operation">
            <button
              id="subtract"
              value="-"
              onClick={operationHandleClick}
              className="operation-btn"
            >
              -
            </button>
          </div>
          <div className="">
            <button id="four" value="4" onClick={numberHandleClick}>
              4
            </button>
          </div>
          <div className="">
            <button id="five" value="5" onClick={numberHandleClick}>
              5
            </button>
          </div>
          <div className="">
            <button id="six" value="6" onClick={numberHandleClick}>
              6
            </button>
          </div>
          <div className="operation">
            <button
              id="add"
              value="+"
              onClick={operationHandleClick}
              className="operation-btn"
            >
              +
            </button>
          </div>
          <div className="">
            <button id="one" value="1" onClick={numberHandleClick}>
              1
            </button>
          </div>
          <div className="">
            <button id="two" value="2" onClick={numberHandleClick}>
              2
            </button>
          </div>
          <div className="">
            <button id="three" value="3" onClick={numberHandleClick}>
              3
            </button>
          </div>
          <div className="num-zero">
            <button id="zero" value="0" onClick={numberHandleClick}>
              0
            </button>
          </div>
          <div className="">
            <button id="decimal" value="." onClick={dividerHandleClick}>
              .
            </button>
          </div>
          <div className="operation equal">
            <button
              id="equals"
              value="="
              onClick={handleEqual}
              className="operation-btn equal"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

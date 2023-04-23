import { useState } from "react";
import Display from "./components/Display";
import NumberButton from "./components/NumberButton";
import OperatorButton from "./components/OperatorButton";
import OperatorType from "./enums/OperatorType";

function App() {
  const [value, setValue] = useState(0);

  const handleNumberButtonClick = (value: number) => {};
  const handleAddition = () => {};
  const handleDivision = () => {};
  const handleMultiplication = () => {};
  const handleSubtraction = () => {};
  const handlePowerOf = () => {};
  const handleRoot = () => {};
  const handleEqual = () => {};

  return (
    <div className="calculator">
      <Display>{value}</Display>
      <div className="calculator__button-container">
        <NumberButton onClick={handleNumberButtonClick}>1</NumberButton>
        <NumberButton onClick={handleNumberButtonClick}>2</NumberButton>
        <NumberButton onClick={handleNumberButtonClick}>3</NumberButton>
        <NumberButton onClick={handleNumberButtonClick}>4</NumberButton>
        <NumberButton onClick={handleNumberButtonClick}>5</NumberButton>
        <NumberButton onClick={handleNumberButtonClick}>6</NumberButton>
        <NumberButton onClick={handleNumberButtonClick}>7</NumberButton>
        <NumberButton onClick={handleNumberButtonClick}>8</NumberButton>
        <NumberButton onClick={handleNumberButtonClick}>0</NumberButton>
        <OperatorButton onClick={handleAddition} type={OperatorType.ADDITION} />
        <OperatorButton onClick={handleDivision} type={OperatorType.DIVISION} />
        <OperatorButton
          onClick={handleSubtraction}
          type={OperatorType.SUBTRACTION}
        />
        <OperatorButton
          onClick={handleMultiplication}
          type={OperatorType.MULTIPLICATION}
        />
        <OperatorButton onClick={handlePowerOf} type={OperatorType.POWEROF} />
        <OperatorButton onClick={handleRoot} type={OperatorType.ROOT} />
        <OperatorButton onClick={handleEqual} type={OperatorType.EQUAL} />
      </div>
    </div>
  );
}

export default App;

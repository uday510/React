import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  const inputIsValid = userInput.duration > 0;
  return (
    <>
      <Header>
      </Header>
      <UserInput userInput={userInput} onChange={handleChange}></UserInput>
      {!inputIsValid && <p className="center">Please Enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput}></Results>}
    </>
  );
}

export default App

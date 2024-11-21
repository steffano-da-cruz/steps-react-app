import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = function () {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };

  const handleNext = function () {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  };

  return (
    <>
      <button className="close-button" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="container">
          <div className="steps-box flex margin-bottom-md">
            <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <div className="messages-box center margin-bottom-md">
            <p className="message">
              Step {step}: {messages[step - 1]}
            </p>
          </div>
          <div className="buttons-box flex">
            <button
              className="button-previous btn"
              style={{ color: "#fff", backgroundColor: "#7950f2" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="button-next btn"
              style={{ color: "#fff", backgroundColor: "#7950f2" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

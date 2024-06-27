import React, { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    step > 1 && setStep((step) => step - 1);
  };
  const handleNext = () => {
    step < 3 && setStep((step) => step + 1);
  };
  return (
    <>
      <Steps
        step={step}
        next={handleNext}
        prev={handlePrevious}
        toggle={setIsOpen}
        opened={isOpen}
      />
      <Message step={1}>
        <h2>Pass in Content</h2>
      </Message>
    </>
  );
};

const Steps = ({ step, next, prev, toggle, opened }) => {
  return (
    <>
      <button className="close" onClick={() => toggle((opened) => !opened)}>
        &times;
      </button>
      ;
      {opened && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <Message step={step}>{messages[step - 1]}</Message>
          <div className="buttons">
            <Button onClick={prev} textColor="#fff" bgColor="#7950f2">
              <span>⬅️</span> Previous
            </Button>
            <Button onClick={next} textColor="#fff" bgColor="#7950f2">
              Next<span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

const Message = ({ step, children }) => {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
};

const Button = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default App;

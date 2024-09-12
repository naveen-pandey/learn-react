import { useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

export default function App() {
	const [step, setStep] = useState(1); // useState returns an array with two elements, first one is the state and second one is a function to update the state.
	// So we destructure it and give it two variables, step and setStep.
  // useState is a hook in React. 'use' is a prefix used for React hooks.
  // hooks are only called on the top level of a functional component and not inside any other function or block.

	function handlePrevious() {
		if (step > 1) setStep(step - 1);
	}

	function handleNext() {
		if (step < 3) setStep(step + 1);
	}

	return (
		<div className="steps">
			<div className="numbers">
				<div className={step >= 1 ? "active" : ""}>1</div>
				<div className={step >= 2 ? "active" : ""}>2</div>
				<div className={step >= 3 ? "active" : ""}>3</div>
			</div>

			<p className="message">
				Step {step}: {messages[step - 1]}
			</p>
			<div className="buttons">
				<button
					style={{ backgroundColor: "#7950f2", color: "#fff" }}
					onClick={handlePrevious}>
					Previous
				</button>
				<button
					style={{ backgroundColor: "#7950f2", color: "#fff" }}
					onClick={handleNext}>
					Next
				</button>
			</div>
		</div>
	);
}

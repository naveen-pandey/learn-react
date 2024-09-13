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
	// always treat state as immutable in React, never try to modify it directly. Use set function to update it.

	const [isOpen, setIsOpen] = useState(true);

	function handlePrevious() {
		if (step > 1) setStep((s) => s - 1); // update the state according to the current state using callback function. 
    // It is a safe approach to update the state based on the previous state. It also avoids bugs caused by race conditions. It is also more secure as it prevents accidental modification of the state. 
    // If you simply need to update the state with a new value and you do not rely on the previous state, you can use a direct value.
	}

	function handleNext() {
		if (step < 3) setStep((s) => s + 1);

    // BAD PRACTICE
    // test.name="Fred"
    // setStep({name: "Fred"}) // When we are not setting the state based on current state then we can pass the value normally like here.
	}

	return (
		<>
			<button
				className="close"
				onClick={() => setIsOpen((is) => !is)}>
				&times;
			</button>
			{isOpen && (
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
			)}
		</>
	);
}

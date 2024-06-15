// Filename - src/reactcomponents.js:

import React from "react";
import ReactDOM from "react-dom";

// This is a functional component
const Welcome = () => {
    return <h1>Hello World!</h1>;
};

ReactDOM.render(
    <Welcome />,
    document.getElementById("root")
);

// Input field component
const Input=()=>
{
	return(
		<div>
			<input type="text" placeholder="Enter Text.." />
			<br />
			<br /> 
		</div>
	);
}

// Button Component
const Button=()=>
{
	return <button type = "submit">Submit</button>; 
}

// Form component
const Form=()=>
{
	return (
		<div>
			<Input />
			<Input />
			<Button />		 
		</div>
	);
}

ReactDOM.render(
	<Form />, 
	document.getElementById("root")
);


import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {

	const [redLightOn, setRedLightOn] = useState(false);
	const [yellowLightOn, setYellowLightOn] = useState(false);
	const [greenLightOn, setGreenLightOn] = useState(false);
	const [lightBlueLightOn, setColorLightBlueOn] = useState(false);
	const [newColor, setNewColorOn] = useState("none");

	
	const redHandleClick = () => {
		redLightOn === false ? setRedLightOn(true) : setRedLightOn(false);
		if (yellowLightOn === true || greenLightOn === true || lightBlueLightOn === true) {
			setYellowLightOn(false);
			setGreenLightOn(false);
			setColorLightBlueOn(false);
		}
	}
	
	const yellowHandleClick = () => {
		yellowLightOn === false ? setYellowLightOn(true) : setYellowLightOn(false);
		if (redLightOn == true || greenLightOn == true || lightBlueLightOn === true) {
			setRedLightOn(false);
			setGreenLightOn(false);
			setColorLightBlueOn(false);
		}
	}
	
	const greenHandleClick = () => {
		greenLightOn === false ? setGreenLightOn(true) : setGreenLightOn(false);
		if (redLightOn == true || yellowLightOn == true || lightBlueLightOn === true) {
			setRedLightOn(false);
			setYellowLightOn(false);
			setColorLightBlueOn(false);
		}
	}
	
	const buttonHandleClick = () => {
		setNewColorOn("flex");
	}
	
	const lightBlueHandleClick = () => {
		lightBlueLightOn === false ? setColorLightBlueOn(true) : setColorLightBlueOn(false);

		if (yellowLightOn == true || redLightOn == true || greenLightOn == true) {
			setRedLightOn(false);
			setYellowLightOn(false);
			setGreenLightOn(false);
		}
	}

	return (
		<div className="container traffic-ligths d-flex flex-column justify-content-center bg-dark rounded-4 p-3 mt-5" style={{ width: "10rem" }}>
			<div onClick={redHandleClick} className="red-ligth bg-danger mt-2 mx-auto" style={{ borderRadius: "50%", width: "100px", height: "100px", boxShadow: redLightOn ? "0 0 40px #FFFFFF" : "none" }}></div>
			<div onClick={yellowHandleClick} className="yellow-ligth bg-warning mt-2 mx-auto" style={{ borderRadius: "50%", width: "100px", height: "100px", boxShadow: yellowLightOn ? "0 0 40px #FFFFFF" : "none" }}></div>
			<div onClick={greenHandleClick} className="green-light bg-success mt-2 mx-auto" style={{ borderRadius: "50%", width: "100px", height: "100px", boxShadow: greenLightOn ? "0 0 40px #FFFFFF" : "none" }}></div>
			<div onClick={lightBlueHandleClick} className="bg-info mt-3 mb-3 mx-auto" style ={{display: newColor, borderRadius:"50%", width:"100px",height: "100px", boxShadow: lightBlueLightOn ? "0 0 40px #FFFFFF" : "none"}}></div>
			<button onClick={buttonHandleClick} className="bg-secondary rounded-4 text-light mt-2 p-3 mx-auto">Extra color</button>
		</div>
	);
};

export default Home;

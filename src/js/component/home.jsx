import React, { useState } from "react";



//create your first component
const Home = () => {

	// Creando hooks para después trabajar con ellos y poder modificarlos.

	const [redLightOn, setRedLightOn] = useState(false);
	const [yellowLightOn, setYellowLightOn] = useState(false);
	const [greenLightOn, setGreenLightOn] = useState(false);
	const [lightBlueLightOn, setColorLightBlueOn] = useState(false);
	const [newColor, setNewColorOn] = useState("d-none");


	// Función click a la luces. Cuando le demos pasara a a true el set. Si alguna de las otras luces está encendida se apagará
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

	const lightBlueHandleClick = () => {
		lightBlueLightOn === false ? setColorLightBlueOn(true) : setColorLightBlueOn(false);

		if (yellowLightOn == true || redLightOn == true || greenLightOn == true) {
			setRedLightOn(false);
			setYellowLightOn(false);
			setGreenLightOn(false);
		}
	}

	// Creado botón para hacer aparecer el extra color.
	const buttonHandleClick = () => {
		setNewColorOn("d-flex");
	}


	// Llamada a las funciones de click a los colores en onclick.
	// className usado con {``} porque metemos ${el operador ternario} dentro de la clase y no lo hacemos en stilos en linea.
	// Añadidas clases en index.css (box shadow y medidas determinadas) Para meterlas en className operador ${}
	// En style, boxshadow op. ternario si las luces estan apagadas el boxshadow desaparecerá.
	// en L.72 en el div donde aparecerá el nuevo color, hemos puesto el display como estado del useSte inicial propiedad bootstrap  y la variable newColor dada anteriormente en los estados. Si newColor es false, el valor de display será "d-none".
	// agregado col-12 para hacerlo responsive.

	return (
		<div className="container traffic-ligths d-flex flex-column justify-content-center bg-dark rounded-4 p-3 my-5 px-2">
			<div className="row">
				<div onClick={redHandleClick} className={`col-12 red-ligth bg-danger mt-2 mx-auto rounded-circle ${redLightOn ? "ligthOn" : "none"}`}></div>
				<div onClick={yellowHandleClick} className={`col-12 yellow-ligth bg-warning mt-2 mx-auto rounded-circle ${yellowLightOn ? "ligthOn" : "none"}`}></div>
				<div onClick={greenHandleClick} className={`col-12 green-light bg-success mt-2 mx-auto rounded-circle ${greenLightOn ? "ligthOn" : "none"}`}></div>
				<div onClick={lightBlueHandleClick} className={`col-12 light-blue bg-info mt-3 mb-3 mx-auto rounded-circle ${lightBlueLightOn ? "ligthOn" : "none"} ${newColor}`}></div>
				<button onClick={buttonHandleClick} className="col-8 bg-secondary rounded-4 text-light mt-2 p-3 mx-auto">Extra color</button>
			</div>
		</div>
	);
};

export default Home;

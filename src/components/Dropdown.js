/**
 * Creating the Dropdown component (Collapse blocks in About Page and Fiche Logement Page)
 * @param  { url }      Style : importing the CSS Style for Gallery component
 * @param  { url }      Illustrations : icons for up and down arrow of dropdowns
 * @return { function } Function : Creating the dropdown Component with props (from backend call) and state (open / close position of arrows)
 */

import "../assets/styles/componentsStyles/Dropdown.css";
import VectorUP from "../assets/images/VectorUP.svg";
import VectorDOWN from "../assets/images/VectorDOWN.svg";
import { useState } from "react";

export default function Dropdown(props) {
	const [selected, setSelected] = useState(null);

	const toggle = () => {
		if (selected === "OK") {
			return setSelected(null);
		}
		setSelected("OK");
	};

	return (
		<div className="dropdown">
			<div className="accordeon">
				<div className="accordeon__item">
					<div className="accordeon__item__title" onClick={() => toggle()}>
						<h2 className="accordeon__item__title--text">{props.title}</h2>
						<span className="accordeon__item__title--vectors	">
							{selected === "OK" ? (
								<img src={VectorUP} alt="vectorUp" className="vectorUp" />
							) : (
								<img src={VectorDOWN} alt="vectorDown" className="vectorDown" />
							)}
						</span>
					</div>
					<div
						className={
							selected === "OK"
								? "accordeon--content-show"
								: "accordeon--content"
						}
					>
						{props.details}
					</div>
				</div>
			</div>
		</div>
	);
}

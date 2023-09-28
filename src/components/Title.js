/**
 * Creating the Title component
 * @param  { url }      Style : importing the CSS Style for Title component
 * @return { function } Function : Creating the Title Component with props from Fiche Logement parent component
 */

import "../assets/styles/componentsStyles/Title.css";

export default function Title(props) {
	return (
		<>
			<h1 className="Title--name">{props.title}</h1>
			<h2 className="Title--location">{props.location}</h2>
		</>
	);
}

/**
 * Creating the Gallery component (Landing Page)
 * @param  { url }      Style : importing the CSS Style for Gallery component
 * @param  { url }      Component : importing the Thumb component to be displayed in the gallery
 * @param  { require }  Calling the backend for vacation places informations
 * @return { function } Function : Creating the Gallery Component with props (getting from the call of data from backend)
 */

import "../assets/styles/componentsStyles/Gallery.css";
import Thumb from "../components/Thumb";

let dataQuery = require("../back & data/logements.json");

export default function Gallery() {
	return (
		<>
			<div className="Gallery">
				{dataQuery.map((id, title) => {
					return (
						<Thumb
							key={id.id}
							id={id.id}
							location={id.location}
							cover={id.cover}
						>
							{id.title}
						</Thumb>
					);
				})}
			</div>
		</>
	);
}

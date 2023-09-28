/**
 * Creating the Section1 component (Banner with CTA)
 * @param  { url }      Style : importing the CSS Style for Section1 component
 * @return { function } Function : Creating the Section1 Component with props (getting from the call of data from backend)
 */

import "../assets/styles/componentsStyles/Section1.css";

export default function Section1(props) {
	return (
		<section className="resultSection">
			<h1 className="resultSection__title">{props.CTA}</h1>
			<div className="resultSection__background"></div>
		</section>
	);
}

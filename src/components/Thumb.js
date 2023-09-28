/**
 * Creating the Thumb component
 * @param  { url }      Style : importing the CSS Style for Thumb component
 * @param  { object }   Module : Import link from react router to allow navigation to dynamic vaction place page
 * @return { function } Function : Creating the Thumb Component with props (getting from the call of data from backend)
 */

import "../assets/styles/componentsStyles/Thumb.css";
import { Link } from "react-router-dom";

export default function Thumb(props) {
	let id = props.id;
	return (
		<Link className="ThumbBloc__link" to={`/FicheLogement/${id}`}>
			<div
				className="ThumbBloc"
				style={{
					backgroundImage: `url(${props.cover})`,
				}}
			>
				<span className="ThumbBloc__title">{props.children}</span>
			</div>
		</Link>
	);
}

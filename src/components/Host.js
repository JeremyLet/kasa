/**
 * Creating the Host component (Host name + illus)
 * @param  { url }      Style : importing the CSS Style for Host component
 * @return { function } Function : Creating the Host Component with props (getting from the call of data from backend)
 */

import "../assets/styles/componentsStyles/Host.css";

export default function Host(props) {
	return (
		<div className="Host">
			<p className="Host--name">{props.hostName}</p>
			<img
				src={props.hostPicture}
				alt="HostPicture"
				className="Host--picture"
			/>
		</div>
	);
}

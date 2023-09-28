/**
 * Creating the Tags component
 * @param  { url }      Style : importing the CSS Style for Tags component
 * @return { function } Function : Creating the Tag Component with props (getting from the call of data from backend)
 */

import "../assets/styles/componentsStyles/Tags.css";

export default function Tags(props) {
	return <span className="Tags">{props.tags}</span>;
}

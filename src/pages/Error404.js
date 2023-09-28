/**
 * Creating the Error page (when wrong or unknown Vacation Id or wrong URL)
 * @param  { object }   Modules : Importing Link from react router to return to landing
 * @param  { url }      Style : importing the CSS Style for Error Page
 *  @param  { url }      Component : importing Footer Component
 * @return { function } Function : Creating the Error page with necessary components
 */

import { Link } from "react-router-dom";
import "../assets/styles/pagesStyles/404.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error404 = () => {
	return (
		<>
		<Header effet="defaultNavbar"/>
			<div className="BlocError404">
				<h1 className="BlocError404--Title">404</h1>
				<h2 className="BlocError404--Details">
					Oups, La page que demandez n'existe pas
				</h2>
				<Link className="BlocError404--returnLanding" to="/">
					Retourner sur la page d'accueil
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default Error404;

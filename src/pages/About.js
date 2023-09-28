/**
 * Creating the About Page
 * @param  { url }      Style : importing the CSS Style for About Page
 * @param  { url }      Components : importing various components for creation of page (Section, Footer, Collapses, Commercial infos)
 * @return { function } Function : Creating the  About page with necessary components
 */

import "../assets/styles/pagesStyles/About.css";
import Header from "../components/Header";
import Section1 from "../components/Section1";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Commercials from "../back & data/CTA";

const About = () => {
	return (
		<>
		<Header effet="AboutNavbar"/>
			<div className="AboutBloc">
				<Section1 className="AboutBLoc__image" />
				<div className="AboutBloc__dropdowns">
					{[...Array(4)].map((index, nom) => {
						return (
							<Dropdown
								key={nom}
								title={Commercials[nom].nom}
								details={Commercials[nom].details}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;

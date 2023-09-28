/**
 * Creating the Fiche Logement Page
 * @param  { object }   Modules : Importing useParams and Navigate for getting ID of vacation place + Navigate for redirect when error
 * @param  { url }      Style : importing the CSS Style for Fiche Logement Page
 * @param  { url }      Components : importing various components for creation of page (Carrousel, Collapses, Titles, Tages, Footer, HostInfos or RateSystem)
 * @return { function } Function : Creating the  Fiche Logement page with necessary components
 */

// MODULES AND STYLE
import { useParams, Navigate } from "react-router-dom";
import "../assets/styles/pagesStyles/FicheLogement.css";

// COMPONENTS
import Header from "../components/Header"
import Carrousel from "../components/Carrousel";
import Title from "../components/Title";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import StarScale from "../components/Rate";
import Dropdown from "../components/Dropdown";

let data = require("../back & data/logements.json");

export default function FicheLogement() {
	const params = useParams();
	let result = data.find((e) => e.id === params.id);
	if (result !== undefined) {
		return (
			<>
			<Header effet="defaultNavbar"/>
				<div className="Body">
					<Carrousel cover={result.pictures[0]} pictures={result.pictures} />
					<div className="DetailsBlocContainer">
						<div className="DetailsBlocContainer__Title">
							<Title title={result.title} location={result.location} />
							<div className="DetailsBlocContainer__Tags">
								{result.tags.map((tags) => {
									return <Tags key={tags} tags={tags} />;
								})}
							</div>
						</div>
						<div className="DetailsBlocContainer__RateHost">
							<Host
								hostName={result.host.name}
								hostPicture={result.host.picture}
							/>
							<StarScale starValue={result.rating} />
						</div>
					</div>
					<div className="DetailsBlocContainer__Dropdowns">
						<Dropdown title="Description" details={result.description} />
						<Dropdown
							title="Equipements"
							details={result.equipments.map((equipments) => {
								return (
									<li className="Dropdown--equipments" key={equipments}>
										{equipments}
									</li>
								);
							})}
						/>
					</div>
				</div>
				<Footer />
			</>
		);
	} else {
		return <Navigate to="/error" />;
	}
}

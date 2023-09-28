/**
 * Creating a Header
 * @param  { object }   ReactModules : Import Link and Outlet from react router
 * @param  { url }      Logo : importing the Kasa Logo for the Header
 * @return { function } Construction of the layout component
 */

import { Outlet, Link } from "react-router-dom";
import "../assets/styles/componentsStyles/Header.css";
import LOGOH from "../assets/images/LOGOH.svg";

const Header = (props) => {	
	return (
		<>
			<header className="HeaderBloc">
			    <Link to="/">
				<img src={LOGOH} alt="LOGO" className="LOGO" />
				</Link>
				<nav className="HeaderBloc__Nav">
					<ul className="HeaderBloc__Nav--List">					
							<Link className={props.effet}  to="/">
								Accueil
							</Link>					
							<Link className={props.effet} to="/About">
								A propos
							</Link>						
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	);
};
export default Header;

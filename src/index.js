/**
 * Index page for the CRA project for render and calling router
 * @param  { string }   Module : Import of react-router
 * @param  { url }      Pages : importing router config + general style css for App
 * @return { const }    Render : Render of the project
 */

import ReactDOM from "react-dom/client";
import Routeur from "./Routeur";
import "./assets/styles/pagesStyles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Routeur />);

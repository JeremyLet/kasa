/**
 * Router file (definition of routes for the App)
 * @param  { object }   Modules : Necessary modules for React Router
 * @param  { url }      Pages : importing location of pagespages for the App
 * @return { function } App : Construction of the routes for App
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import About from "./pages/About";
import Error404 from "./pages/Error404";

function App() {
	return (
				<BrowserRouter>
				<Routes>
					<Route path="/" >
						<Route index element={<Home />} />
						<Route path="/About" element={<About />} />
						<Route path="/FicheLogement/:id" element={<FicheLogement />} />
						<Route path="/error" element={<Error404 />} />
						<Route path="*" element={<Navigate to="/error" />} />
					</Route>
				</Routes>
			</BrowserRouter>
	);
}

export default App;

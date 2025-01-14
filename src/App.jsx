import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainProductSearch from "./mainPage/MainProductSearch.jsx";
import SecondProductSearch from "./secondPage/SecondProductSearch.jsx";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<MainProductSearch />} />
					<Route path="/resault" element={<SecondProductSearch />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;

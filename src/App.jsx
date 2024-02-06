import { useState } from "react";

import { MovieContext, ThemeContext } from "./context/movieContext";
import Page from "./Page";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [cartData, setCartData] = useState([]);
	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
			<MovieContext.Provider value={{ cartData, setCartData }}>
				<Page />
			</MovieContext.Provider>
		</ThemeContext.Provider>
	);
}

export default App;

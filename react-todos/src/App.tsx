import React from "react";
import { ThemeProvider } from "styled-components";
import { basicTheme } from "./theme";

function App() {
	return (
		<ThemeProvider theme={basicTheme}>
			<div className="App"></div>
		</ThemeProvider>
	);
}

export default App;

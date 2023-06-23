import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/Global";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";

function Root() {
	const [isDark, setIsDark] = useState(false);
	const toggleDark = () => {
		setIsDark((prev) => !prev);
	};

	return (
		<>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<GlobalStyle />
				<Outlet context={{ toggleDark }} />
				{/* <ReactQueryDevtools initialIsOpen={true} /> */}
			</ThemeProvider>
		</>
	);
}

export default Root;

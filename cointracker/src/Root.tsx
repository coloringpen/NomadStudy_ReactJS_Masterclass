import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/Global";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

function Root() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<GlobalStyle />
				<Outlet />
				{/* <ReactQueryDevtools initialIsOpen={true} /> */}
			</ThemeProvider>
		</>
	);
}

export default Root;

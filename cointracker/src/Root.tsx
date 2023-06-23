import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { GlobalStyle } from "./styles/Global";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { isDarkAtom } from "./atoms";

function Root() {
	const isDark = useRecoilValue(isDarkAtom);
	return (
		<>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<GlobalStyle />
				<Outlet />
				{/* <ReactQueryDevtools initialIsOpen={true} /> */}
			</ThemeProvider>
		</>
	);
}

export default Root;

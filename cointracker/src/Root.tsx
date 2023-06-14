import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/Global";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Root() {
	return (
		<>
			<GlobalStyle />
			<Outlet />
			<ReactQueryDevtools initialIsOpen={true} />
		</>
	);
}

export default Root;

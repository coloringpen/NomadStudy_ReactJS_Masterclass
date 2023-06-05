import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/Global";

function Root() {
	return (
		<>
			<GlobalStyle />
			<Outlet />
		</>
	);
}

export default Root;

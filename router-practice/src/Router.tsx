import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import ComponentError from "./screens/ComponentError";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <Home />,
				errorElement: <ComponentError />,
			},
			{ path: "/about", element: <About /> },
		],
		errorElement: <NotFound />,
	},
]);

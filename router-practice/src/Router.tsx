import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import ComponentError from "./screens/ComponentError";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

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
			{
				path: "users/:userId",
				element: <User />,
				children: [
					{ path: "followers", element: <Followers /> },
				],
			},
		],
		errorElement: <NotFound />,
	},
]);

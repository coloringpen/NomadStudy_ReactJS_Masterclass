import Root from "./Root";
import { createBrowserRouter } from "react-router-dom";
import Coins from "./screens/Coins";
import Coin from "./screens/Coin";
// tsx 파일로 설정해야 component, 즉 jsx 사용할 수 있음!!

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <Coins />,
			},
			{ path: ":coinID", element: <Coin /> },
		],
	},
]);

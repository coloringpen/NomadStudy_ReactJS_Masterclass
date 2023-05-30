import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const darkTheme = {
	textColor: "whitesmoke",
	backgroundColor: "#111",
};

const lightTheme = {
	textColor: "#111",
	backgroundColor: "whitesmoke",
};
// 각각의 theme의 key들의 이름은 같아야 한다.
// 그래야 theme만 갈아끼워도 component의 변형없이 그대로 style을 적용할 수 있으므로

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={lightTheme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

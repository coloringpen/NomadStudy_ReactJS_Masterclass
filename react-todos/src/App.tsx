import React from "react";
import { GlobalStyle } from "./styles/Global";
import ToDoList from "./screens/ToDoList";

function App() {
	return (
		<>
			<GlobalStyle />
			<ToDoList />
		</>
	);
}

export default App;

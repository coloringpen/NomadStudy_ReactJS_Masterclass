import Circle from "./components/Circle";
import Recap from "./components/Recap";
import StateWithTS from "./components/StateWithTS";
import ThemeTest from "./components/ThemeTest";

function App() {
	return (
		<div>
			<Recap text={"hello"} active />{" "}
			{/*active만 넣어도, active={true}와 같은 효과 */}
		</div>
	);
}

export default App;

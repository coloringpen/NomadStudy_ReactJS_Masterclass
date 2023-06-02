import { Link, useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();
	const onBtnClick = () => {
		navigate("/about");
	};

	return (
		<header>
			<ul>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"/about"}>About</Link>
				</li>
			</ul>
			<button onClick={onBtnClick}>Click!</button>
		</header>
	);
}

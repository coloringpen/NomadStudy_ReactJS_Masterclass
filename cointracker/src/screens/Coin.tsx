import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Header, Title, Loader } from "../styles/CoinStyles";

interface IRouteState {
	name: string;
}

export default function Coin() {
	const { coinID } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const state = useLocation().state as IRouteState;
	console.log(state.name);
	console.log(coinID);
	return (
		<>
			<Container>
				<Header>
					<Title>{state?.name || "Loading"}</Title>
				</Header>

				{isLoading ? <Loader>on loading process</Loader> : null}
			</Container>
		</>
	);
}

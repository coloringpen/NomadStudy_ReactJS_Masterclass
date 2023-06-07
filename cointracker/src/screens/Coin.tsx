import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Header, Title, Loader } from "../styles/CoinStyles";

export default function Coin() {
	const { coinID } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const {
		state: { name },
	} = useLocation();
	console.log(name);
	console.log(coinID);
	return (
		<>
			<Container>
				<Header>
					<Title>COINS</Title>
				</Header>

				{isLoading ? <Loader>on loading process</Loader> : null}
			</Container>
		</>
	);
}

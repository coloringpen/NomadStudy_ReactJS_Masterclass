import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Header, Title, Loader } from "../styles/CoinStyles";

export default function Coin() {
	const { coinID } = useParams();
	const [isLoading, setIsLoading] = useState(true);
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

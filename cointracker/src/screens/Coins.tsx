import { Link } from "react-router-dom";
import {
	CoinStyle,
	CoinsList,
	Container,
	Header,
	Title,
} from "../styles/CoinStyles";

const coins = [
	{
		id: "btc-bitcoin",
		name: "Bitcoin",
		symbol: "BTC",
		rank: 1,
		is_new: false,
		is_active: true,
		type: "coin",
	},
	{
		id: "eth-ethereum",
		name: "Ethereum",
		symbol: "ETH",
		rank: 2,
		is_new: false,
		is_active: true,
		type: "coin",
	},
	{
		id: "hex-hex",
		name: "HEX",
		symbol: "HEX",
		rank: 3,
		is_new: false,
		is_active: true,
		type: "token",
	},
];

export default function Coins() {
	return (
		<>
			<Container>
				<Header>
					<Title>COINS</Title>
				</Header>
				<CoinsList>
					{coins.map((item) => (
						<CoinStyle key={item.id}>
							<Link to={`/${item.id}`}>{item.name} &rarr;</Link>
						</CoinStyle>
					))}
				</CoinsList>
			</Container>
		</>
	);
}

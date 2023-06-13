import { Link } from "react-router-dom";
import { CoinStyle, CoinsList, Container, Header, Img, Loader, Title } from "../styles/CoinStyles";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchCoins } from "../api";

interface ICoinsData {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
}

export default function Coins() {
	// const [coins, setCoins] = useState<ICoinsData[]>([]);
	// const [isLoading, setIsLoading] = useState(true);
	// useEffect(() => {
	// 	(async () => {
	// 		const data = await (
	// 			await fetch("https://api.coinpaprika.com/v1/coins")
	// 		).json();
	// 		setCoins(data.slice(0, 100));
	// 		setIsLoading(false);
	// 		console.log(coins);
	// 	})();
	// }, []);
	const { isLoading, data } = useQuery<ICoinsData[]>(["allCoins"], fetchCoins, {
		select: (data) => data.slice(0, 100),
	});

	return (
		<>
			<Container>
				<Header>
					<Title>COINS</Title>
				</Header>
				<CoinsList>
					{isLoading ? (
						<Loader>on loading process</Loader>
					) : (
						data?.map((item) => (
							<CoinStyle key={item.id}>
								<Link to={`/${item.id}`} state={{ name: item.name }}>
									<Img src={`https://static.coinpaprika.com/coin/${item.id}/logo.png`} />
									{item.name} &rarr;
								</Link>
							</CoinStyle>
						))
					)}
				</CoinsList>
			</Container>
		</>
	);
}

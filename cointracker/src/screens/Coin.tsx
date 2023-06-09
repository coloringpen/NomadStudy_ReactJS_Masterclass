import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Header, Title, Loader } from "../styles/CoinStyles";

interface IRouteState {
	name: string;
}

export default function Coin() {
	const { coinID } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const state = useLocation().state as IRouteState;
	const [coinDetailInfo, setCoinDetailInfo] = useState({});
	const [coinPriceInfo, setCoinPriceInfo] = useState({});

	useEffect(() => {
		(async () => {
			const coinDetailData = await (
				await fetch(`https://api.coinpaprika.com/v1/coins/${coinID}`)
			).json();

			const coinPriceData = await (
				await fetch(`https://api.coinpaprika.com/v1/tickers/${coinID}`)
			).json();
			setCoinDetailInfo(coinDetailData);
			setCoinPriceInfo(coinPriceData);
			setIsLoading(false);
			console.log(coinDetailData);
			console.log(coinPriceData);
		})();
	}, []);
	return (
		<>
			<Container>
				<Header>
					<Title>{state?.name || "Loading"}</Title>
					{/** state가 있으면 .name 가져오고, 아니면 "Loading을 가져오기" */}
				</Header>

				{isLoading ? <Loader>on loading process</Loader> : null}
			</Container>
		</>
	);
}

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Header, Title, Loader } from "../styles/CoinStyles";

interface IRouteState {
	name: string;
}

interface IInfoData {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
	logo: string;
	description: string;
	message: string;
	open_source: boolean;
	started_at: string;
	development_status: string;
	hardware_wallet: boolean;
	proof_type: string;
	org_structure: string;
	hash_algorithm: string;
	first_data_at: string;
	last_data_at: string;
}

interface IPriceData {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	circulating_supply: number;
	total_supply: number;
	max_supply: number;
	beta_value: number;
	first_data_at: string;
	last_updated: string;
	quotes: {
		USD: {
			ath_date: string;
			ath_price: number;
			market_cap: number;
			market_cap_change_24h: number;
			percent_change_1h: number;
			percent_change_1y: number;
			percent_change_6h: number;
			percent_change_7d: number;
			percent_change_12h: number;
			percent_change_15m: number;
			percent_change_24h: number;
			percent_change_30d: number;
			percent_change_30m: number;
			percent_from_price_ath: number;
			price: number;
			volume_24h: number;
			volume_24h_change_24h: number;
		};
	};
}

export default function Coin() {
	const { coinID } = useParams();
	const state = useLocation().state as IRouteState;
	const [isLoading, setIsLoading] = useState(true);
	const [coinDetailInfo, setCoinDetailInfo] = useState<IInfoData>();
	const [coinPriceInfo, setCoinPriceInfo] = useState<IPriceData>();

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

				{isLoading ? <Loader>on loading process</Loader> : "nono"}
			</Container>
		</>
	);
}

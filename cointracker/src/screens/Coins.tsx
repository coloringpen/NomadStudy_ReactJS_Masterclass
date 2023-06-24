import { Link, useOutletContext } from "react-router-dom";
import { CoinStyle, CoinsList, Container, Header, Img, Loader, Title } from "../styles/CoinStyles";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchCoins } from "../api";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

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
	const { isLoading, data } = useQuery<ICoinsData[]>(["allCoins"], fetchCoins, {
		select: (data) => data.slice(0, 100),
	});
	const setIsDark = useSetRecoilState(isDarkAtom);

	return (
		<>
			<Container>
				<Header>
					<Title>COINS</Title>
					<button onClick={() => setIsDark((prev) => !prev)}>go Dark mode</button>
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

import { useParams } from "react-router-dom";

export default function Coin() {
	const { coinID } = useParams();
	console.log(coinID);
	return <h1>Coin : {coinID}</h1>;
}

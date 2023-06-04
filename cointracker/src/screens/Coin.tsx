import { useParams } from "react-router-dom";

export default function Coin() {
	const { coinID } = useParams();
	console.log(coinID);
	return <div>Coin : {coinID}</div>;
}

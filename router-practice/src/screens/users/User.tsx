import { useParams, Outlet, Link } from "react-router-dom";
import { users } from "./../../db";

export default function User() {
	const { userId } = useParams();

	return (
		<>
			<h2>
				User with {userId} is named :{" "}
				{users[Number(userId) - 1].name}
			</h2>
			<hr />
			<Link to={"followers"}>See followers</Link>
			<Outlet
				context={{
					nameOfUser: users[Number(userId) - 1].name,
				}}
			/>
		</>
	);
}

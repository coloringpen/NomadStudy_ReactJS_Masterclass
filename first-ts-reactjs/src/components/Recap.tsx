import { Container, H1 } from "./ThemeTest";

interface RecapProps {
	text: string;
	active?: boolean;
}

export default function Recap({ text, active = false }: RecapProps) {
	/** event를 특정짓는 것은 사용할 모든 패키지들에서 항상 같은 방법으로 이루어지지 않는다
	 * 이것은 단지 ReactJS 내에서 사용하는 방식임
	 */
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {};

	return (
		<Container>
			<H1>{text}</H1>
			<button onClick={onClick}>Click Me!</button>
		</Container>
	);
}

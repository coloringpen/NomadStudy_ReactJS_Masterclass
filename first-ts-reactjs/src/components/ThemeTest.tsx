import styled from "styled-components";

export const Container = styled.div`
	background-color: ${(props) => props.theme.bgColor};
`;
export const H1 = styled.h1`
	color: ${(props) => props.theme.textColor};
`;

export default function ThemeTest() {
	return (
		<Container>
			<H1>protected!</H1>
		</Container>
	);
}

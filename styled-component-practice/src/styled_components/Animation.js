import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
	display: flex;
`;

const rotationAnimation1 = keyframes`
from{
	transform: rotate(0deg);
}
to{
	transform: rotate(360deg);
}`;

const rotationAnimation2 = keyframes`
0%{
	transform: rotate(0deg);
	border-radius: 20px;
}
50%{
	transform: rotate(360deg);
	border-radius: 100px;
}
100%{
	transform: rotate(0deg);
	border-radius: 20px;
}`;

const Box = styled.div`
	height: 200px;
	width: 200px;
	background-color: blanchedalmond;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${rotationAnimation2} 2s linear infinite;
	span {
		font-size: 36px;
		&:hover {
			font-size: 50px;
		}
		&:active {
			opacity: 0;
		}
	}
`;

export default function Animation() {
	return (
		<Wrapper>
			<Box>
				<span>🤩</span>
			</Box>
		</Wrapper>
	);
}

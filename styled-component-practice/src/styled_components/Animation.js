import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
	display: flex;
`;

const rotationAnimation = keyframes`
from{
	transform: rotate(0deg);
}
to{
	transform: rotate(360deg);
}`;

const Box = styled.div`
	height: 200px;
	width: 200px;
	background-color: blanchedalmond;
	animation: ${rotationAnimation} 2s linear infinite;
`;

export default function Animation() {
	return (
		<Wrapper>
			<Box />
		</Wrapper>
	);
}

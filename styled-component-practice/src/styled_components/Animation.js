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

const Emoji = () => {
	return <span>🍓</span>;
};

const Emoji2 = styled.p`
	font-size: 36px;
`;

const Box = styled.div`
	height: 200px;
	width: 200px;
	background-color: blanchedalmond;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${rotationAnimation2} 2s linear infinite;
	${Emoji2} {
		// 외부 styled component만 타게팅 가능. 그러므로 Emoji는 여기서 타겟 불가
		&:hover {
			font-size: 98px;
		}
	}
	/**
	span:hover{...} 하고 여기에 써두는 것과 같은
	span {
		&:hover{...}
	 }의 효과 */
`;

export default function Animation() {
	return (
		<Wrapper>
			<Box>
				<Emoji2>🤩</Emoji2>
			</Box>
		</Wrapper>
	);
}

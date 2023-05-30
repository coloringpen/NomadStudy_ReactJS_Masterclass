import styled, { keyframes } from "styled-components";

const Title = styled.h1`
	color: tomato;
`;

const Wrapper = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
	${Title} {
		color: cadetblue;
		&:hover {
			background-color: turquoise;
			font-size: 50px;
		}
	}
	h1:active {
		background-color: brown;
	}
`;

const animation = keyframes`
from{
    background-color: blueviolet;
}
to{
    background-color: aliceblue;
}`;

const Box = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${(props) => props.bgColor};
`;

const Circle = styled(Box)`
	border-radius: 50%;
`;

const Btn = styled.button`
	background-color: aquamarine;
	width: 200px;
	height: 100px;
	animation: ${animation} 1s linear infinite;
`;

const Input = styled.input.attrs({ required: true, maxLength: 20 })`
	background-color: violet;
	display: block;
`;

export default function Recap() {
	return (
		<Wrapper>
			<h1>hello</h1>
			<Title>It's me</Title>
			<div>
				<Box bgColor="teal" />
				<Box bgColor="blue" />
				<Circle bgColor="beige" />
				<Btn as="a">I'm button but not button</Btn>
			</div>
			<div>
				<Input />
				<Input />
				<Input />
				<Input />
				<Input />
			</div>
		</Wrapper>
	);
}

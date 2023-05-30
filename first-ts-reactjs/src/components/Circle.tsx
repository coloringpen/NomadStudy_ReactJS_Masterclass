import styled from "styled-components";

interface ContainerProps {
	bgColor: string;
	borderColor: string;
}

interface CircleProps {
	// 객체의 타입, 형태를 정의해두는 interface
	// 타입은 component를 정의할 때 주는 것임을 기억하기
	bgColor: string;
	borderColor?: string;
	text?: string;
}

const Container = styled.div<ContainerProps>`
	// styled components에 type 주기
	width: 200px;
	height: 200px;
	background-color: ${(props) => props.bgColor};
	border: 1px solid ${(props) => props.borderColor};
	border-radius: 50%;
	text-align: center;
`;
export default function Circle({
	bgColor,
	borderColor,
	text = "default value",
}: CircleProps) {
	return (
		<>
			<Container bgColor={bgColor} borderColor={borderColor ?? "green"}>
				{text}
			</Container>
		</>
	);
}

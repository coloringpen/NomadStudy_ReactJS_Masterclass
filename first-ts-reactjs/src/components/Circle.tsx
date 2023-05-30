import styled from "styled-components";

interface CircleProps {
	// 객체의 타입, 형태를 정의해두는 interface
	bgColor: string;
}

const Container = styled.div<CircleProps>`
	// styled components에 type 주기
	width: 200px;
	height: 200px;
	background-color: ${(props) => props.bgColor};
	border-radius: 50%;
`;
export default function Circle({ bgColor }: CircleProps) {
	return (
		<>
			<Container bgColor={bgColor} />
		</>
	);
}

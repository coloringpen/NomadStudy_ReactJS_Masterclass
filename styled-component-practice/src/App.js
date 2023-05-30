import styled from "styled-components";

// theme provider로 감싸진 component들은 모두 theme에 접근 가능해짐!
const Title = styled.h1`
	color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
	return (
		<Wrapper>
			<Title>Hello</Title>
		</Wrapper>
	);
}

export default App;

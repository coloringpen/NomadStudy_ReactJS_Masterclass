import styled from "styled-components";

export const Container = styled.div`
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
`;

export const Header = styled.header`
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CoinsList = styled.ul``;

export const CoinStyle = styled.li`
	background-color: #dff9fb;
	padding: 20px;
	border-radius: 15px;
	margin-bottom: 10px;
	a {
		display: flex;
		align-items: center;
		padding: 20px;
		transition: color 0.2s ease-in; // 변할 때는 이렇게 변하라~! 변하기 전 상태에 transition 설정
	}
	&:hover {
		a {
			color: ${(props) => props.theme.accentColor};
		}
	}
`;

export const Title = styled.h1`
	font-size: 48px;
	color: ${(props) => props.theme.accentColor};
`;

export const Loader = styled.span`
	text-align: center;
	display: block;
`;

export const Img = styled.img`
	margin-right: 10px;
	width: 35px;
	height: 35px;
`;

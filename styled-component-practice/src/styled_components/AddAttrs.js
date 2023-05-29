import styled from "styled-components";

const Father = styled.div`
	display: flex;
`;

const Btn = styled.button`
	color: white;
	background-color: tomato;
	border: 0;
	border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
	// minlength camel case로 표기해야함
	background-color: beige;
`;

export default function AddAttrs() {
	return (
		<Father as="header">
			<Btn>Log In</Btn>
			<Btn as="a" href="/">
				Log In
			</Btn>

			<Input />
			<Input />
			<Input />
		</Father>
	);
}

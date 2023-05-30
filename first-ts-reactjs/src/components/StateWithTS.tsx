import { useState } from "react";

export default function StateWithTS() {
	const [value, setValue] = useState("");

	// interface React.FormEvent<T = Element> formEvent에는 element 하나를 전달할 수 있다
	// 어떤 element(event가 일어날 element)일지도 정의해보자
	// 이 폼 이벤트는 input element에 의해 execute된다!
	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value }, // currentTarget의 값 중, value키의 값 가져오기
		} = event;

		setValue(value); // ts가 setValue는 string을 받아야함을 체크 중
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(event.currentTarget);
		console.log("hello", value);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					value={value}
					onChange={onChange}
					type="text"
					placeholder="username"
				/>
				<button>Log In</button>
			</form>
		</div>
	);
}

import { useState } from "react";

export default function ToDoList() {
	const [newTodDo, setNewToDo] = useState("");
	const onChangeNewToDo = (event: React.FormEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setNewToDo(value);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(newTodDo);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input onChange={onChangeNewToDo} value={newTodDo} placeholder="Write a to do!" />
				<button>Add</button>
			</form>
		</div>
	);
}

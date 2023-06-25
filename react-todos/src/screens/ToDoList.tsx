import { useState } from "react";

export default function ToDoList() {
	const [newTodDo, setNewToDo] = useState("");
	const [toDoError, setToDoError] = useState("");
	const onChangeNewToDo = (event: React.FormEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setToDoError("");
		setNewToDo(value);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (newTodDo.length < 10) {
			return setToDoError("too short!"); // state setter execution returns "undefined"
		}
		console.log("submit!");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input onChange={onChangeNewToDo} value={newTodDo} placeholder="Write a to do!" />
				<button>Add</button>
				{toDoError !== "" ? toDoError : null}
			</form>
		</div>
	);
}

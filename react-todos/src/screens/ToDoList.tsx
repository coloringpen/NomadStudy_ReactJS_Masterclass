import { useState } from "react";
import { useForm } from "react-hook-form";

// export default function ToDoList() {
// 	const [newTodDo, setNewToDo] = useState("");
// 	const [toDoError, setToDoError] = useState("");
// 	const onChangeNewToDo = (event: React.FormEvent<HTMLInputElement>) => {
// 		const {
// 			currentTarget: { value },
// 		} = event;
// 		setToDoError("");
// 		setNewToDo(value);
// 	};

// 	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault();
// 		if (newTodDo.length < 10) {
// 			return setToDoError("too short!"); // state setter execution returns "undefined"
// 		}
// 		console.log("submit!");
// 	};

// 	return (
// 		<div>
// 			<form onSubmit={onSubmit}>
// 				<input onChange={onChangeNewToDo} value={newTodDo} placeholder="Write a to do!" />
// 				<button>Add</button>
// 				{toDoError !== "" ? toDoError : null}
// 			</form>
// 		</div>
// 	);
// }

export default function ToDoList() {
	const { register, watch } = useForm();
	console.log(watch());

	return (
		<>
			<div>
				<form>
					<input {...register("email")} placeholder="Email" />
					<input {...register("firstName")} placeholder="First Name" />
					<input {...register("lastName")} placeholder="Last Name" />
					<input {...register("username")} placeholder="Username" />
					<input {...register("pw")} placeholder="password" />
					<input {...register("pwConfirm")} placeholder="password confirmation" />
					<button>Add</button>
				</form>
			</div>
		</>
	);
}

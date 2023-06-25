import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonStyle, FormFrameStyle } from "../styles/componentStyles";

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

interface IForm {
	email: string;
	firstName: string;
	lastName: string;
	username: string;
	pw: string;
	pwConfirm: string;
}

export default function ToDoList() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IForm>();
	const onValid = (data: any) => {
		console.log(data);
	};
	console.log(errors);
	return (
		<>
			<div>
				<FormFrameStyle onSubmit={handleSubmit(onValid)}>
					<input
						{...register("email", {
							required: "email is required",
							pattern: {
								value: /^[A-Za-z0-9._%+-]+@naver.com$/,
								message: "only naver email is allowed",
							},
						})}
						placeholder="Email"
					/>
					<span>
						{/* {errors.email?.type === "required"
							? "required"
							: errors.email?.type === "pattern"
							? "email required"
							: null} */}
						{errors.email?.message}
					</span>
					<input
						{...register("firstName", { required: "your firstname is required", minLength: 10 })}
						placeholder="First Name"
					/>
					<span>{errors.firstName?.message}</span>
					<input
						{...register("lastName", { required: "your lastname is required" })}
						placeholder="Last Name"
					/>
					<span>{errors.lastName?.message}</span>
					<input
						{...register("username", { required: "your username is required" })}
						placeholder="Username"
					/>
					<span>{errors.username?.message}</span>
					<input
						{...register("pw", {
							required: "password is required",
							minLength: { value: 10, message: "password should be longer than 10 chars" },
						})}
						placeholder="password"
					/>
					<span>{errors.pw?.message}</span>
					<input
						{...register("pwConfirm", { required: "password confirmation is required" })}
						placeholder="password confirmation"
					/>
					<span>{errors.pwConfirm?.message}</span>
					<ButtonStyle>Add</ButtonStyle>
				</FormFrameStyle>
			</div>
		</>
	);
}

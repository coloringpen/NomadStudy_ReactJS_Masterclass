import { useForm } from "react-hook-form";
import { ButtonStyle, FormFrameStyle } from "../styles/componentStyles";

interface NewToDo {
	newToDo: string;
}

export default function ReadToDoList() {
	const { register, handleSubmit, setValue } = useForm<NewToDo>();
	const onValid = (data: NewToDo) => {
		console.log("add to do", data.newToDo);
		setValue("newToDo", "");
	};

	return (
		<>
			<div>
				<FormFrameStyle onSubmit={handleSubmit(onValid)}>
					<input {...register("newToDo")} />
					<ButtonStyle>Add New To Do!</ButtonStyle>
				</FormFrameStyle>
			</div>
		</>
	);
}

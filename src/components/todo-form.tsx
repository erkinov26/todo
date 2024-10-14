import React, { useState } from "react";

interface TodoFormProps {
	addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (inputValue.trim() === "") return;
		addTodo(inputValue);
		setInputValue("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex space-x-2 mb-4">
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Add a new todo"
				className="flex-1 border border-gray-300 rounded-md p-2"
			/>
			<button
				type="submit"
				className="bg-blue-500 text-white rounded-md px-4">
				Add Todo
			</button>
		</form>
	);
};

export default TodoForm;

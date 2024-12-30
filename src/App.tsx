import React, { useState } from "react";
import { Todo } from "./constants/types";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list"; 
import Button from "./components/button";

const TodoApp: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">(
		"all",
	);

	const addTodo = (text: string) => {
		const newTodo: Todo = {
			id: Date.now(),
			text,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	const toggleComplete = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	const completeAll = () => {
		setTodos(todos.map((todo) => ({ ...todo, completed: true })));
	};

	const clearCompleted = () => {
		setTodos(todos.filter((todo) => !todo.completed)); // faqat uncompleted todos qoldiradi
	};

	const filteredTodos = () => {
		switch (filter) {
			case "completed":
				return todos.filter((todo) => todo.completed);
			case "uncompleted":
				return todos.filter((todo) => !todo.completed);
			default:
				return todos;
		}
	};

	return (
		<div className="w-[60%] mx-auto p-4 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-4">Todo List</h1>
			<TodoForm addTodo={addTodo} />
			<button
				onClick={completeAll}
				className="mb-4 bg-green-500 text-white rounded-md px-4 py-2">
				Complete All
			</button>


<h1>Hello World</h1>


			{/* Filter Buttons */}
			<div className="flex space-x-2 mb-4">
				<Button
					type="all"
					text="All"
					filter={filter}
					setFilter={setFilter}
				/>
				<Button
					type="completed"
					text="Completed"
					filter={filter}
					setFilter={setFilter}
				/>
				<Button
					type="uncompleted"
					text="Uncompleted"
					filter={filter}
					setFilter={setFilter}
				/>
			</div>

			{/* Clear Completed Button */}
			<button
				onClick={clearCompleted}
				className="mb-4 bg-red-500 text-white rounded-md px-4 py-2">
				Clear Completed
			</button>

			{/* Filtered Todo List */}
			<TodoList
				todos={filteredTodos()}
				toggleComplete={toggleComplete}
			/>
		</div>
	);
};

export default TodoApp;

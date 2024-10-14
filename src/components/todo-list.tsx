import React from "react";
import { Todo } from "../constants/types";

interface TodoListProps {
	todos: Todo[];
	toggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
	return (
		<ul className="space-y-2">
			{todos.map((todo) => (
				<li
					key={todo.id}
					className="flex items-center space-x-2">
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={() => toggleComplete(todo.id)}
						className="form-checkbox h-5 w-5 text-blue-600"
					/>
					<span
						className={`flex-1 ${
							todo.completed ? "line-through text-gray-500" : "text-gray-900"
						}`}>
						{todo.text}
					</span>
				</li>
			))}
		</ul>
	);
};

export default TodoList;

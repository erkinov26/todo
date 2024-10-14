import React from "react";
import { Todo } from "../constants/types";

interface DoneListProps {
	doneTodos: Todo[];
}

const DoneList: React.FC<DoneListProps> = ({ doneTodos }) => {
	return (
		<div>
			<h2 className="text-lg font-semibold">Done</h2>
			<ul className="space-y-2">
				{doneTodos.map((todo) => (
					<li
						key={todo.id}
						className="text-gray-500">
						{todo.text}
					</li>
				))}
			</ul>
		</div>
	);
};

export default DoneList;

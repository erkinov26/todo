// Button.tsx
import React from "react";

const Button = ({
	type,
	text,
	filter,
	setFilter,
}: {
	type: "all" | "completed" | "uncompleted";
	text: string;
	filter: "all" | "completed" | "uncompleted";
	setFilter: React.Dispatch<
		React.SetStateAction<"all" | "completed" | "uncompleted">
	>;
}) => {
	return (
		<button
			onClick={() => setFilter(type)}
			className={`flex-1 py-2 rounded-md ${
				filter === type ? "bg-blue-500 text-white" : "bg-gray-200"
			}`}>
			{text}
		</button>
	);
};

export default Button;

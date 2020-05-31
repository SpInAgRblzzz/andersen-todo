import React, { useState } from "react";

function TodoList() {
	const [inputValue, setInputValue] = useState("");
	return (
		<div>
			<nav>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button type="submit">Add ToDo</button>
			</nav>
			<ul>
				{[1, 2, 3, 4, 5].map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;

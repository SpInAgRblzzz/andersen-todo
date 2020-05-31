import React from "react";

function TodoInterface(props) {
	return (
		<nav>
			<input
				type="text"
				value={props.inputValue}
				onChange={props.inputHandler}
			/>
			<button type="submit" onClick={props.addTodoHandler}>
				Add ToDo
			</button>
		</nav>
	);
}

export default TodoInterface;

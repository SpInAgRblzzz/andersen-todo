import React from "react";

function TodoInterface(props) {
	return (
		<nav>
			{props.todoItemInterface ? null : (
				<input
					type="text"
					value={props.inputValue}
					onChange={props.inputHandler}
				/>
			)}

			{props.todoItemInterface && !props.correctionMode ? (
				<button onClick={props.correctionModeHandler}>Correct</button>
			) : null}
			<button type="submit" onClick={props.addTodoHandler}>
				{props.todoItemInterface
					? props.subTodoAdded
						? "Remove subToDo"
						: "Add subToDo"
					: "Add ToDo"}
			</button>
			{props.todoItemInterface ? (
				<button onClick={props.handleDelete}>Delete</button>
			) : null}
		</nav>
	);
}

export default TodoInterface;

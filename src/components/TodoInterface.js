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
				{props.todoItemInterface ? "Add subToDo" : "Add ToDo"}
			</button>
			{props.todoItemInterface ? (
				<>
					<button>Correct</button>
					<button>Delete</button>
				</>
			) : null}
		</nav>
	);
}

export default TodoInterface;

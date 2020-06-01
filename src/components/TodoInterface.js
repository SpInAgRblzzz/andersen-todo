import React from "react";

function TodoInterface(props) {
	return (
		<nav>
			{props.todoItemInterface ? null : (
				<form onSubmit={props.handleAddTodo}>
					<input
						type="text"
						value={props.inputValue}
						onChange={props.inputHandler}
						onSubmit={() => alert("sex")}
					/>
					<input type="submit" value="Add ToDo" />
				</form>
			)}

			{props.todoItemInterface && !props.correctionMode ? (
				<button onClick={props.toggleCorrectionMode}>Correct</button>
			) : null}
			{props.todoItemInterface ? (
				<button onClick={props.handleAddTodo}>
					{props.subTodoAdded ? "Remove subToDo" : "Add subToDo"}
				</button>
			) : null}
			{props.todoItemInterface ? (
				<button onClick={props.handleDelete}>Delete</button>
			) : null}
		</nav>
	);
}

export default TodoInterface;

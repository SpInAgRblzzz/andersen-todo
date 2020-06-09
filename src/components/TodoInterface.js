import React from "react";

function TodoInterface({
	inputValue,
	inputHandler,
	handleAddTodo,
	todoItemInterface,
	correctionMode,
	toggleCorrectionMode,
	subTodoAdded,
	handleDelete,
}) {
	return (
		<nav>
			{todoItemInterface ? null : (
				<form onSubmit={handleAddTodo}>
					<input
						type="text"
						value={inputValue}
						onChange={inputHandler}
					/>
					<input type="submit" value="Add ToDo" />
				</form>
			)}

			{todoItemInterface && !correctionMode ? (
				<button onClick={toggleCorrectionMode}>Correct</button>
			) : null}
			{todoItemInterface ? (
				<button onClick={handleAddTodo}>
					{subTodoAdded ? "Remove subToDo" : "Add subToDo"}
				</button>
			) : null}
			{todoItemInterface ? (
				<button onClick={handleDelete}>Delete</button>
			) : null}
		</nav>
	);
}

export default TodoInterface;

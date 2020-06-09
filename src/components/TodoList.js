import React, { useState } from "react";
import TodoInterface from "./TodoInterface";
import List from "./List";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

function TodoList() {
	const store = createStore(reducer, { todos: [] });

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const [id, setId] = useState(0);

	function handleAddTodo(e) {
		e.preventDefault();
		if (inputValue.trim() !== "") {
			setTodos([
				...todos,
				{ value: inputValue, id: id, isChecked: false },
			]);
			setId(id + 1);
			setInputValue("");
		}
	}

	const handleInput = (e) => setInputValue(e.target.value);

	return (
		<Provider store={store}>
			<div>
				<TodoInterface
					inputValue={inputValue}
					inputHandler={handleInput}
					handleAddTodo={handleAddTodo}
				/>
				<List todos={todos} setTodos={setTodos} />
				{/* <ul>
					{todos.length === 0
						? "The list is empty"
						: todos.map((todoItem) => (
								<TodoItem
									todoValue={todoItem.value}
									key={todoItem.id}
									id={todoItem.id}
									isChecked={todoItem.isChecked}
									todos={todos}
									setTodos={setTodos}
								/>
						  ))}
				</ul> */}
			</div>
		</Provider>
	);
}

export default TodoList;

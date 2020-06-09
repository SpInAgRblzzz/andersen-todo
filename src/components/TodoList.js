import React, { useState } from "react";
import TodoInterface from "./TodoInterface";
import List from "./List";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reducer from "./reducer";
import setTodos from "./actionCreators/setTodos";
import updateId from "./actionCreators/updateId";

const store = createStore(reducer, { todos: [], id: 0 });

function TodoList() {
	const СonnectedList = connect((state) => ({ todos: state.todos }))(List);

	const [inputValue, setInputValue] = useState("");
	//const [id, setId] = useState(0);

	function handleAddTodo(e) {
		e.preventDefault();

		if (inputValue.trim() !== "") {
			store.dispatch(setTodos(inputValue, false));
			store.dispatch(updateId());

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
				<СonnectedList setTodos={setTodos} />
			</div>
		</Provider>
	);
}

export default TodoList;

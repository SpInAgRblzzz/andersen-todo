import React, { useState } from "react";
import TodoInterface from "./TodoInterface";
import List from "./List";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reducer from "./reducer";
import setTodos from "./actionCreators/setTodos";

const store = createStore(reducer, { todos: [] });

function TodoList() {
	const СonnectedList = connect((state) => ({ todos: state.todos }))(List);

	const [inputValue, setInputValue] = useState("");
	const [id, setId] = useState(0);

	function handleAddTodo(e) {
		e.preventDefault();
		console.log(setTodos({ value: inputValue, id: id, isChecked: false }));
		if (inputValue.trim() !== "") {
			store.dispatch(
				setTodos({ value: inputValue, id: id, isChecked: false })
			);
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
				<СonnectedList setTodos={setTodos} />
			</div>
		</Provider>
	);
}

export default TodoList;

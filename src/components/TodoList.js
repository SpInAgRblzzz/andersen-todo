import React, { useState } from "react";
import TodoInterface from "./TodoInterface";
import List from "./List";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reducer from "./reducer";
import setTodos from "./actionCreators/setTodos";
import getTodoItemByIdRoute from "./assets/getTodoItemByIdRoute";

const store = createStore(reducer, { todos: [], id: 0 });

function TodoList({ currentIdRoute }) {
	const idRoute = currentIdRoute ? currentIdRoute : [];
	const СonnectedList = connect((state) => ({
		todos: getTodoItemByIdRoute(state, idRoute).todos,
	}))(List);

	const [inputValue, setInputValue] = useState("");

	function handleAddTodo(e) {
		e.preventDefault();

		if (inputValue.trim() !== "") {
			store.dispatch(setTodos(inputValue, false, idRoute));

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
				<СonnectedList idRoute={idRoute} />
			</div>
		</Provider>
	);
}

export default TodoList;

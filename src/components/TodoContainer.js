import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
	state = {
		todos: [
			{
				id: uuidv4(),
				title: "Setup development enviroment",
				completed: true,
			},
			{
				id: uuidv4(),
				title: "Develop website and add content",
				completed: true,
			},
			{
				id: uuidv4(),
				title: "Deploy to live server",
				completed: true,
			},
		],
	};
	//metodo para el boton Delet que se encuentra en el componente TodoItem
	//eliminar elementos de la lista
	delTodo = (id) => {
		this.setState({
			todos: [
				...this.state.todos.filter((todo) => {
					return todo.id !== id;
				}),
			],
		});
	};
	//metodo para mantener y modificar el checkbox
	handleChange = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};
	//metodo para agregar nuevos todo, los "..." indica que
	//el nuevo item se va a integrar con el resto de la lista ya existente
	addTodoItem = (title) => {
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false,
		};
		this.setState({
			todos: [...this.state.todos, newTodo],
		});
	};
	render() {
		return (
			<div className="container">
				<Header />
				<InputTodo addTodoProps={this.addTodoItem} />
				<TodoList
					todos={this.state.todos}
					handleChangeProps={this.handleChange}
					deleteTodoProps={this.delTodo}
				/>
			</div>
		);
	}
}
export default TodoContainer;

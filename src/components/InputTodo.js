import React, { Component } from "react";

class InputTodo extends Component {
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	state = {
		title: "",
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodoProps(this.state.title);
		this.setState({
			title: "",
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="form-container">
				<input
					type="text"
					placeholder="Add Todo..."
					value={this.state.title}
					name="title"
					onChange={this.onChange}
					className="input-text"
				/>
				<input type="submit" className="input-submit" value="Submit" />
			</form>
		);
	}
}
export default InputTodo;

import React from "react";


export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      textValue: "",
      todoList: []
    };
  }

  handleChange = (event) => {
    this.setState({ textValue: event.target.value });
  }

  handleClick = () => {
    this.setState((state) => ({
      todoList: [...state.todoList, state.textValue],
      textValue: ""
    }));
  }

  handleUpdate = (index) => {
    let newValue = prompt("Update Your Todo Here");
    let updatedArr = this.state.todoList.map((el, i) => {
      if (i === index) {
        return newValue;
      }
      return el;
    });
    this.setState({ todoList: updatedArr });
  }

  handleDelete = (index) => {
    let updatedArr = this.state.todoList.filter((el, i) => i !== index);
    this.setState({ todoList: updatedArr });
  }

  render() {
    let { textValue, todoList } = this.state;

    return (
      <>
      <h1>Task Tracker</h1>
        <div className="Addtodo">
        <div className="TodoWrapper">
          <input className="todo-input"
            type="text"
            value={textValue}
            onChange={this.handleChange}
            placeholder="Add your Todo here"
          />
          <button  className="todo-btn" onClick={this.handleClick}>Add</button>
        </div></div>
        <div>
          {todoList.map((el, i) => (
            <div className="TodoWrapper1"  key={i}>
              <p>{el}</p>
              <div className="butoon">
              <button className="todo-btn" onClick={() => this.handleUpdate(i)}>Update</button>
              <button className="todo-btn" onClick={() => this.handleDelete(i)}>Delete</button>
            </div></div>
          ))}
        </div>
      </>
    );
  }
}

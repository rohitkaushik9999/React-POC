import React, { useState } from "react";
import "./TodoInput.css";

const TodoForm = (props) => {
    const [enteredValue, setEnteredValue] = useState("");

    const addTodoHandler = (event) => {
      setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
      event.preventDefault();
      props.onSubmitTodoForm(enteredValue);

      setEnteredValue("");
    };

    return (
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <h3>Simple TODO App</h3>
          <label>Please add to-dos item through input fields</label>
          <div className="form-group">
            <input
              type="text"
              placeholder="Add todo.."
              value={enteredValue}
              onChange={addTodoHandler}
            />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
}

export default TodoForm;

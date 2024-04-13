import React, { useState } from "react";
import "./TodoInput.css";

function TodoData(props) {

  const [checkBoxFlag, setCheckBoxFlag] = useState(false);
  const DeleteRecord = () => {
    props.onDeleteRecord(props.record);
  };

  const checkBoxHandler = (event) => {
    setCheckBoxFlag(event.target.checked);
  }

  return (
    <li className="goal-item">
      <input type="checkbox" onChange={checkBoxHandler}></input>
      {checkBoxFlag && (
        <p>
          <strike>{props.record}</strike>
        </p>
      )}
      {!checkBoxFlag && <p>{props.record}</p>}
      <button onClick={DeleteRecord} style={{ backgroundColor: "red" }}>
        Delete
      </button>
    </li>
  );
}

export default TodoData;
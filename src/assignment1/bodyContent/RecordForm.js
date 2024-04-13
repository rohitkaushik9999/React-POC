import React, { useState } from "react";
import './RecordFrom.css';

function RecordForm(props) {
  const [enteredId, setEnteredId] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const record = {
        id: enteredId,
        name: enteredName,
        date: enteredDate,
        email: enteredEmail,
        phone: enteredPhone
    }
    console.log("Record From:", record);
    props.onSaveRecordFrom(record);

    setEnteredId("");
    setEnteredName("");
    setEnteredDate("");
    setEnteredEmail("");
    setEnteredPhone("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>ID</label>
          <input type="text" value={enteredId} onChange={idChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Email</label>
          <input
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Phone</label>
          <input
            type="text"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default RecordForm;

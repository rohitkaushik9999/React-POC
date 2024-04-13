import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoData from "./TodoData";
import "./TodoInput.css";
import { useEffect } from "react";

const TodoList = () => {

    
    const [todoList, setTodoList] = useState([]);
    const initialData = ["Develop website and add content", "Deploy to live server" ];
    useEffect(() => {
        setTodoList((prevUserInput) => {
          return [...prevUserInput, ...initialData];
        });
    }     
    , []);

    const saveTodoFormHandler = (record) => {
         setTodoList((prevUserInput) => {
           return [...prevUserInput, record];
         });
    };

    const deleteTodoHandler = (data) => {
        setTodoList((prevUserInput) => {
          const updatedRecord = prevUserInput.filter(
            (record) => record !== data
          );
          return updatedRecord;
        });
    }

    return (
      <div className="Todo-wrapper">
        <TodoForm onSubmitTodoForm={saveTodoFormHandler} />
        <ul className="listing-content">
          {todoList.map((data) => (
            <TodoData
              key={data}
              record={data}
              onDeleteRecord={deleteTodoHandler}
            />
          ))}
        </ul>
      </div>
    );
}

export default TodoList;

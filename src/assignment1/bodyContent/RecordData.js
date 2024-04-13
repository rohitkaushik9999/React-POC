import React, { useState } from "react";

function RecordData(props){

  const DeleteRecord = () => {
    props.onDeleteRecord(props.record.id);
  };

    return (
      <tr>
          <td>{props.record.id}</td>
          <td>{props.record.name}</td>
          <td>{props.record.date}</td>
          <td>{props.record.email}</td>
          <td>{props.record.phone}</td>
          <td>
            <button onClick={DeleteRecord} style={{backgroundColor:"red"}}>D</button>
          </td>
      </tr>
    );
}

export default RecordData;
import axios from "axios";
import React, { useState, useEffect } from "react";
import { MyScroll } from "./MyScroll";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

const endpoint = "http://localhost:8080/graphql";
const USERS_QUERY = `
  {
    allUsers {
      id,
	    name,
	    date,
	    email,
	    Phone
    }
  }
`;

const RestCallData = () => {
  let myScroll = MyScroll();
  const [tableContent, setTableContent] = useState([]);
  const countryName = useSelector((state) => state.country.countryName);
  const countryCode = useSelector((state) => state.country.countryCode);

  // const { data, isLoading, error } = useQuery("launches", () => {
  //   return axios({
  //     url: endpoint,
  //     method: "POST",
  //     data: {
  //       query: USERS_QUERY,
  //     },
  //   }).then((response) => 
  //     setTableContent(response.data.data.allUsers));
  // });

  // if (isLoading) return "Loading...";
  // if (error) return <pre>{error.message}</pre>;


  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) => setTableContent(json));

    //mainly for asynchronus call

    // axios
    //   .get(`http://localhost:8080/api/getRecords`)
    //   .then((response) => setTableContent(response.data));
    
    axios({
      url: "http://localhost:8080/api/getRecords",
      method: "GET",
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("token")
      },
    }).then((response) => setTableContent(response.data));
  }, []);

  const mystyle = {
    backgroundColor: "aqua",
    borderColor: "red",
    margin: "0px auto",
    padding: "10px",
  };
  return (
    <div>
      <div>
        {countryCode}
        {countryName}
      </div>
      <table style={mystyle} border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {tableContent.slice(0, myScroll).map((content) => {
            return (
              <tr key={content.id}>
                <td>{content.id}</td>
                <td>{content.name}</td>
                <td>{content.date}</td>
                <td>{content.email}</td>
                <td>{content.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RestCallData;

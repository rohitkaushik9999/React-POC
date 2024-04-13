import React, { useState } from 'react'
import { changeImage } from "./HomeEventHandler";
import EnhancedComponent from '../HOC/EnhancedComponent';
import ImageThumb from './ImageThumb';
import RecordForm from './RecordForm';
import RecordData from './RecordData'
import img1 from '../images/img1.jpg'
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../SliceWithMultiReducers/AuthSlice";

//class HomeComponent extends React.Component { 
function HomeComponent(props) {    
    
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         id: "1",
    //         name:"Rohit",
    //         email:"rohit.kaushik@globallogic.com",
    //         date: "",
    //         phone: "8010666674",
    //         adhaar: "1234567890"
    //     };
        
    //     this.changeState = this.changeState.bind(this);
    // };

    const dispatch = useDispatch();
    const countryName = useSelector((state) => state.country.countryName);
    const countryCode = useSelector((state) => state.country.countryCode);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
console.log("isAuthenticated in HomeCompoenet = ", isAuthenticated);
    const [userInput, setUserInput] = useState([
      {
        id: "1",
        name: "Rohit kaushik",
        email: "rohit.kaushik@globallogic.com",
        date: "2023-01-16",
        phone: "8377849525",
        adhaar: "0987654321",
      },
    ]);
    
    const changeState = () => {
        setUserInput([{
            id: "2",
            name:"kaushik",
            date: "2023-01-16",
            email:"kaushik@globallogic.com",
            phone: "8010666674"
        }]);
    };

    const saveRecordFormHandler = (record) => {
        setUserInput((prevUserInput) => {
          return [...prevUserInput, record];
        });
    };

    const deleteRecordHandler = (recordId) => {
         setUserInput((prevUserInput) => {
          const updatedRecord = prevUserInput.filter((record) => record.id !== recordId);
          return updatedRecord;
         });
    }

    const logoutHandler = () => {
      console.log("==========logout===============");
      dispatch(authActions.logout());
    };
  
        return (
          <div className="body-wrapper">
            <div className="calendar">
              {isAuthenticated && (
                <button onClick={logoutHandler}>Logout</button>
              )}
              <ImageThumb />
              {countryCode}
              {countryName}
              <div style={{ margin: "20px" }}>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userInput.map((data) => (
                      <RecordData
                        key={data.id}
                        record={data}
                        onDeleteRecord={deleteRecordHandler}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="scroll-image">
              <div className="img-box">
                <div className="img-item">
                  <img id="displayImg" src={img1} />
                  <div className="caption">Globallogic ofiices</div>
                </div>
                <div className="pagination">
                  <button id="img1" className="img-btn" onClick={changeImage}>
                    1
                  </button>
                  <button id="img2" className="img-btn" onClick={changeImage}>
                    2
                  </button>
                  <button id="img3" className="img-btn" onClick={changeImage}>
                    3
                  </button>
                  <button id="img4" className="img-btn" onClick={changeImage}>
                    4
                  </button>
                </div>
              </div>
            </div>

            <div className="img-search-bar">
              <RecordForm onSaveRecordFrom={saveRecordFormHandler} />
            </div>
          </div>
        );    
}

export default EnhancedComponent(HomeComponent);

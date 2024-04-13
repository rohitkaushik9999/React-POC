import React, { Component } from "react";
import HeaderComponent from "../header/HeaderComponent";
import HomeComponent from "../bodyContent/HomeComponent";
import FooterComponent from "../footer/FooterComponent";

class DashBoard extends React.Component {
    render(){
        return (
            <div className="App">
                <HeaderComponent />
                <HomeComponent />
                <FooterComponent />
            </div>
        );
    };
}

export default DashBoard;
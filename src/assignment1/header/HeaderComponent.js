import React, { Component } from 'react'
import { connect }from 'react-redux';
import ClockComponent from './ClockComponent'
import AnalogClockComponent from './AnalogClockComponent'
//import EnhancedComponent from '../HOC/EnhancedComponent';
import gllogo from '../images/gl.png';
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component {
    constructor(props) {   
        super(props); 
        this.state = {      
            clockName: "Analog",      
            name: "Rohit Kaushik",
            email: "rohit.kaushik@globallogic.com"  
        };  
        //this.logoutHandler = this.logoutHandler.bind(this);
    };

    logoutHandler() {
      console.log("==========logout===============");
      this.props.logout();
    };

    render() {     
        return (
          <div>
            <header className="header-wrapper">
              <div className="logo">
                <img src={gllogo} />
                <ClockComponent />
                {this.props.countryCode}
                {this.props.countryName}
              </div>

              <div className="navBar">
                {/* <div className="site-name">{this.props.assignmentName}</div> */}
                <div className="site-name">React Assignment...</div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/apiCall">API Call</Link>
                    </li>
                    <li>
                      <Link to="/ImageGallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/Chart">Chart</Link>
                    </li>
                    <li>
                      <Link to="/TodoList">Todo List</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="auth">
                <h3>{this.state.email}</h3>
                <AnalogClockComponent clockName={this.state.clockName} />
              </div>
            </header>
          </div>
        );  
      }  
}


const mapStateToProps = state => {
  return {
    countryName: state.country.countryName,
    countryCode: state.country.countryCode,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateCountryName: () => dispatch({ type: 'updateCountryName' }),
    updateCountryCode: () => dispatch({ type: 'updateCountryCode' }),
    login: () => dispatch({type: 'login' }),
    logout: () => dispatch({type: 'logout' }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);

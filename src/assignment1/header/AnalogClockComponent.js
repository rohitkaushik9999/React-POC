import React, { Component } from 'react'
import './HeaderEventHandler'

class AnalogClockComponent extends React.Component {
    
    render() {     
        return (
            <div>
                {/* <h4>{this.props.clockName}</h4> */}
                <div id="clockContainer">
                    <div id="hour"></div>
                    <div id="minute"></div>
                    <div id="second"></div>
                </div>
            </div>
        )
    };        
}


export default AnalogClockComponent


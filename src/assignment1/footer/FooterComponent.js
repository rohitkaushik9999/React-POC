import React, { Component } from 'react'
import EnhancedComponent from '../HOC/EnhancedComponent'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'

class FooterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: "Rohit Kaushik"};
        this.changeState = this.changeState.bind(this);
    ;}

    changeState(){
        if (this.state.name === "Rohit Kaushik")
          this.setState({ name: "Global Logic" });
        else
          this.setState({ name: "Rohit Kaushik" });
    };

    render() {  
        const { show, handleclick } = this.props;   
        return (
          <div>
            <footer className="footer-wrapper">
              <div className="aboutUs">
                <h3>About us</h3>
                GlobalLogic is an American digital services company providing
                software product design and development services. It is an
                independent subsidiary of Hitachi Ltd. GlobalLogic has corporate
                headquarters in San Jose, California
              </div>

              <div className="social-icon">
                <button onClick={this.changeState}>
                  <img src={facebook} />
                </button>
                <button onClick={handleclick}>
                  <img src={twitter} />
                </button>
                <button>
                  <img src={linkedin} />
                </button>
                <p>{this.props.assignmentName}</p>
                <p>{this.state.name}</p>
                <p>{show}</p>
              </div>

              <div className="contactUs">
                <h3>Contact us</h3>
                GlobalLogic is an American digital services company providing
                software product design and development services. It is an
                independent subsidiary of Hitachi Ltd. GlobalLogic has corporate
                headquarters in San Jose, California
              </div>
            </footer>
          </div>
        );  
      } 
      
      
    // componentWillMount() {
    //     console.log("Component Will Mount")
    // }
    // componentDidMount() {
    //     console.log("Component DID Mount")
    // }
    // changeState() {
    //     this.setState({hey: "This is React Batch"});
    // }
    // componentWillReceiveProps(newProps) {
    //     console.log("Component Will Recieve Props")
    // }
    // shouldComponentUpdate(newProps, nextState){
    //     return true;
    // }
    // componentWillUpdate(newProps, nextState) {
    //     console.log('Component Will Update')
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log('Component Did Update')
    // }
    // componentWillUnmount() {
    //     console.log('Component Will UNMOUNT')
    // }
    
}

export default EnhancedComponent(FooterComponent);

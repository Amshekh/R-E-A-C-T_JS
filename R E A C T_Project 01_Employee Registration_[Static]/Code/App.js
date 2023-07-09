import React, { Component } from 'react';
import './App.css';
import Registration from './Components/Registration.js';
import Greet from './Components/Greet.js';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isRegistered: false,
       Emp_Name: null,
       Emp_Email: null,
       Emp_Password: null,
    }
  }

  registrationHandler = (event) => {
    const Emp_Name = event.target.Emp_Name.value;
    const Emp_Email = event.target.Emp_Email.value;
    const Emp_Password = event.target.Emp_Password.value;
    this.setState({ Emp_Name, Emp_Email, Emp_Password, isRegistered: true });
    event.preventDefault();
  };
  
  render() {
    return (
      <div>
        {this.state.isRegistered ? 
        <Greet Emp_Name={this.state.Emp_Name} Emp_Email={this.state.Emp_Email} />
         : 
        <Registration submit={this.registrationHandler} />}
      </div>
    )
  }
}
export default App
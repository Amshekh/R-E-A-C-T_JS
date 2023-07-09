

import "./App.css";
import React, { Component } from "react";
import Employee from "./Components/Employee/Employee.js";
import Form from "./Components/Form";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employees: [
        {
          Name: "Karolina Kreglicka",
          Post: "Python Programmer",
        },
        {
          Name: "Michelle Stone",
          Post: "PL/SQL Developer"
        },
        {
          Name: "Clara Hesse",
          Post: "Game Developer",
        },
      ],
      isShow : true,
    };
  }

  toggleHandler = () => {
    this.setState({ isShow: !this.state.isShow });
  }

  removeHandler = (EmployeeIndex) => {
    const Employeescopy = this.state.Employees;
    Employeescopy.splice(EmployeeIndex, 1);
    this.setState({ Employees : Employeescopy });
  }; 

  render() {
      let Employees;
      if (this.state.isShow) {
        Employees = this.state.Employees.map((e, index) => {  // key needs to be included when creating list of elements in REACT
        return (
          <Employee 
            key={index} 
            Name={e.Name} 
            Post={e.Post} 
            remove= {() => this.removeHandler(index)}
          />
        );    
       });               
      }
      else {
        Employees = "";
      }
      return (
            <div className="App">
                {/* <button onClick={this.toggleHandler}> Toggle </button> */}
                {/* Employees */} 
                <Form />
           </div>
          ); 
  }
}

export default App;

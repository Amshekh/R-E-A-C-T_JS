

import React, { Component } from "react";
import EmployeeStyle from "./Employee.module.css";

class Employee extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
          <div className={EmployeeStyle.Employee_Box} onClick={this.props.remove}>
               <h1> 
                  <label className={EmployeeStyle.Label}>Name </label> : <i> {this.props.Name} </i>
                  <br />
                  <label>Post </label> : <i> {this.props.Post} </i>
               </h1> 
            </div>
        );
        
    }
}

export default Employee;
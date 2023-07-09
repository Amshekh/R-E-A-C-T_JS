

import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {};
    }

    nameChangeHandler = (event) => {
        console.log("Employee_Name", event.target.value);
    };

    nameChangeHandler = (event) => {
        console.log("select", event.target.value);
    };  
    

  render() {
    return (
      <div>
        <form>
            <div>
                <br></br>
                <label htmlFor=''> Employee_Name: </label>
                <input type="text" name="Emp_Name" onKeyUp={this.nameChangeHandler}/>
            </div>
            <br></br>
            <div>
              <label htmlFor=''> Country: </label>
              <select onChange={this.nameChangeHandler}>
                <option value="India"> India </option>
                <option value="USA"> USA </option>
                <option value="UK"> UK </option>
                <option value="Canada"> Canada </option>
              </select>
            </div>  
        </form>
      </div>
    );
  }
}

export default Form;
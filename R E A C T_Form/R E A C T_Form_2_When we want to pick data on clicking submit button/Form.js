


import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
      super(props)
      this.state = {
        Emp_Name: null,
        Emp_Country: null,
      };
    }
    submitHandler = (event) => {
      event.preventDefault();
      console.log(this.state);
      const Emp_Name = event.target.Emp_Name.value;
      const Emp_Country = event.target.Emp_Country.value;
      this.setState({Emp_Name, Emp_Country}, () => {
        console.log(this.state);
        event.target.Emp_Name.value = "";
        event.target.Emp_Country.value = "";
      });
    };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <br></br>
                <label htmlFor=''> Employee_Name: </label>
                <input type="text" name="Emp_Name"/>
            </div>
            <br></br>
            <div>
              <label htmlFor=''> Country: </label>
              <select name='Emp_Country'>
                <option value="India"> India </option>
                <option value="USA"> USA </option>
                <option value="UK"> UK </option>
                <option value="Canada"> Canada </option>
              </select>
            </div>
            <br></br> 
            <button type='submit'> Submit </button> 
        </form>
      </div>
    );
  }
}

export default Form;
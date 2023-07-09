

import React, { Component } from 'react';

class Controlled_Component extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Emp_Name: "Meike Niemeier"
    };
  }

  changeHandler = (event) => {
    console.log(this.state);
    const Emp_Name = event.target.value;
    this.setState({ Emp_Name }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <form>
          <br></br>
          <input 
                 type="text" 
                 name="Emp_Name"
                 value={this.state.Emp_Name} 
                 onChange={this.changeHandler}
          />  
        </form>
      </div>
    );
  }
}

export default Controlled_Component;
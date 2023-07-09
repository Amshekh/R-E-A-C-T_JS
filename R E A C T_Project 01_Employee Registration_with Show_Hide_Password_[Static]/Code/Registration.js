import React from 'react'

export default function Registration(props) {
  const btnStyle = {
    backgroundColor: "green",
    color: "white",
  }
  let btnText, password_BoxType;
  if (props.showPassword === true) {
    btnStyle.backgroundColor = "red";
    btnText = "Hide Password";
    password_BoxType = "text";
  }
  else {
    btnText = "Show Password";
    password_BoxType = "password";
  }
  return (
    <div className='container card p-3 mt-4 registration-container'>
        <form onSubmit={props.submit}>
          <h1 className='text-center'> Registration Form </h1>
          <br></br>
            <div className='form-group'>
                <label htmlFor='Emp_Name'> Employee Name </label>
                <input type="text" name="Emp_Name" required className='form-control'/> 
            </div>
            <div className='form-group'>
              <label htmlFor='Emp_Email'> Email </label>
              <input type="text" name="Emp_Email" required className='form-control'/>
            </div>
            <div className='form-group'>
              <label htmlFor='Emp_Password'> Password </label>
              <input type={password_BoxType} name="Emp_Password" required className='form-control'/>
            </div>
            <br></br>
            <button type='submit' className='btn btn-primary m-2'> Register </button>
            <button type='button' className='btn m-1' onClick={props.click} style={btnStyle} > {btnText} </button>
        </form>
    </div>
  )
}

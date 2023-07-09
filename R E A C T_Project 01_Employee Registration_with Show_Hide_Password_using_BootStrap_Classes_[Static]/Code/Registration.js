import React from 'react'

export default function Registration(props) {
  let btnText, password_BoxType;
  let btnClasses = ["btn", "m-1"];
  if (props.showPassword === true) {
    btnText = "Hide Password";
    password_BoxType = "text";
    btnClasses.push("btn-danger");
  }
  else {
    btnText = "Show Password";
    password_BoxType = "password";
    btnClasses.push("btn-success");
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
            <button type='button' className={btnClasses.join(" ")} onClick={props.click} > {btnText} </button>
        </form>
    </div>
  )
}

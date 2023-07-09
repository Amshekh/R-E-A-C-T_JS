import React from 'react'

export default function Greet(props) {
  return (
    <div className='container card p-3 mt-4 registration-container'>
      <h3> {props.Emp_Name} </h3>
      <h3> Thankyou for joining us.</h3>
      <h3> Check your {props.Emp_Email} inbox for verification mail </h3>
    </div>
  )
}

import React, { useState } from 'react';
import './index.css'



function App() {
  const [values,setValues]=useState({
    firstName:"",
    lastName:"",
    email:"",
  })
  const [submitted,setSubmitted]=useState(true)
  const [valid,setValid]=useState(false)
  const handleFirstName=(event)=>{
    setValues({...values,firstName:event.target.value})
  }
  const handleLastName=(event)=>{
    setValues({...values,lastName:event.target.value})
  }
  const handleEmail=(event)=>{
    setValues({...values,email:event.target.value})
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true)
    }
    setSubmitted(true)
  }
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* success message */}
        {submitted && valid ? <div class="success-message">Successfully registered</div>:null}
        <input
        onChange={handleFirstName}
         value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* show the error message */}
        {submitted && !values.firstName ? <span id="first-name-error">First Name required</span>:null}
        <input 
        onChange={handleLastName}
        value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* show the error message */}
        {submitted && !values.lastName ? <span id="last-name-error">Last Name required</span>:null}
        <input
        onChange={handleEmail}
         value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/*show the error message */}
        {submitted && !values.email ? <span id="email-error">Email required</span>:null }
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App
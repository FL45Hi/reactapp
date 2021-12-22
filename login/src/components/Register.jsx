import React, { useState, useEffect } from 'react';


const Register = () => {
  
  const [credentials, setCredentials] = useState({
    
    email: '',
    username: '',
    password: '',
  });

  // const [name, setName] = useState("");

  const handleInput = (e) => {
    setCredentials( { [e.target.name]: e.target.value });
  }

  const { username, password } = credentials;

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('You logged in '+$username)
    alert("Hello ")
    console.log(credentials)
  }
  
  return (
    <>
      <div className="App">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h1>Registration</h1>

          <div className='form-field'>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                // value={username}
                onChange={handleInput}
              />
            </div>

            <div className='form-field'>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                // value={username}
                onChange={handleInput}
              />
            </div>

            
            <div className='form-field'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                // value={password}
                onChange={handleInput}
              />
            </div>

            <div className='form-field'>
              <label htmlFor="gender ">Gender</label>
              <select 
              // onChange={handleSelect}
               defaultValue="Select Gender">
                <option defaultValue> Select Gender </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select> <br />
            </div>

            <div className='form-field'>
              <button type="submit" id="btn">Register</button>
            </div>

        </div>

        

        </form>

      </div>
      
  
    </>
  )
}

export default Register;

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
      <form onSubmit={handleSubmit}>
        <div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                // value={username}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                // value={password}
                onChange={handleInput}
              />
            </div>
        </div>

        <div><button type="submit" id="btn">Register</button></div>

        </form>

      </div>
      
  
    </>
  )
}

export default Register;

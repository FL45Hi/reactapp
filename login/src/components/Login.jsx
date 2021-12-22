import React, { useState, useEffect } from 'react';


const Login = () => {
  
  const [credentials, setCredentials] = useState({
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
        <div><h1>Login</h1></div>
        <div>
            <div className='form-field'>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
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
            <button type="submit" id="btn">Login</button>
          </div>

          </div>

        </form>

      </div>
      
  
    </>
  )
}

export default Login;

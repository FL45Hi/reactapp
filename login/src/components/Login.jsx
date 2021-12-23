import React, { useState, useEffect } from 'react';


const Login = () => {
  
  const initialValues = { username: "", password: ""};
  const [credentials, setCredentials] = useState(initialValues);

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentials( { ...credentials, [name]: value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(credentials));
    setIsSubmit(true);
    // alert('You logged in '+$username)
    // alert("Hello ")
    console.log(credentials)

  }

  useEffect( () => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit){
      console.log(credentials);     
    }    
  }, [errors]);

  const validate = (val) => {
    const err = {};

    if (!val.username) {
      err.username = "Username is required!";
    }
    if (!val.password) {
      err.password = "Password is required!";
    }
    else if (val.password.length < 4) {
      err.password = "Password must be more than 4 characters";
    } else if (val.password.length > 10) {
      err.password = "Password cannot exceed more than 10 characters";
    }

    return err;
  }
  
  return (
    <>
      <div className="App">

      {Object.keys(errors).length === 0 && isSubmit ? (
        <div className=" login-form "> Signed in Successfully</div>
      ) : (
        <pre>{JSON.stringify(credentials, undefined, 2)}</pre>
      )}

      <form className="login-form" onSubmit={handleSubmit}>
        <div><h1>Login</h1></div>
        <div>
            <div className='form-field'>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleInput}
              />
              <p>{errors.username}</p>
            </div>
            <div className='form-field'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleInput}
              />
              <p>{errors.password}</p>
            </div>

            <div style={{height:"1.5rem", marginTop:"20px" }}>
              
              <input type="checkbox" name="remember"></input>
              <label htmlFor="remember">Remember Me</label>
              
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

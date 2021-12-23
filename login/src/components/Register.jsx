import React, { useState, useEffect } from 'react';


const Register = () => {
  
  const initialValues = { username: "", email: "", password: "", gender: ""};
  const [data, setData] = useState(initialValues);

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData( { ...data, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(data));
    setIsSubmit(true);
    // alert('You logged in '+$data.username)
    
    // console.log(data);
  }

  useEffect( () => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit){
      console.log(data);
      
    }
  }, [errors]);

  const validate = (val) => {
    const err = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!val.username) {
      err.username = "Username is required!";
    }
    if (!val.email) {
      err.email = "Email is required!";
    } 
    else if ( !regex.test(val.email)) {
      err.password = "This is not valid Email Format.";
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
        <div className=" login-form "> Registered Successfully</div>
      ) : (
        <pre>{JSON.stringify(data, undefined, 4)}</pre>
      )}


      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h1>Registration</h1>

          <div className='form-field'>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={data.username}
                onChange={handleInput}
              />
              <p>{errors.username}</p>
            </div>

            <div className='form-field'>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={data.email}
                onChange={handleInput}
              />
              <p>{errors.email}</p>
            </div>

            
            <div className='form-field'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleInput}
              />
              <p>{errors.password}</p>
            </div>

            <div className='form-field'>
              <label htmlFor="gender ">Gender</label>
              <select name="gender" 
                 value={data.gender}
                 onChange={handleInput}>
                <option defaultValue> Select Gender </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select> <br />
              {/* <p>{errors.gender}</p> */}
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

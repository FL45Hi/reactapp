import React, { useEffect, useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

// useForm({
//   mode: 'onSubmit',
//   reValidateMode: 'onChange',
//   defaultValues: {},
//   resolver: undefined,
//   context: undefined,
//   criteriaMode: "firstError",
//   shouldFocusError: true,
//   shouldUnregister: false,
//   shouldUseNativeValidation: false,
//   delayError: undefined
// })

const Register = () => {

  const { register, handleSubmit, formState: { errors }, control } = useForm(
  );

  // update: "errors" change to "formState: { errors }" inV.7.x

  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data, e) => {
    setUserInfo(data);
    console.log(data);
    // alert(
    //   `Here are your details: \nName: ${data.name} \nEmail: ${data.email} \n`
    // );
  }
  // const handleError = (errors) => { };
  console.log(errors);

  const errorOptions = {
    name: { required: "Name is required" },
    email: {
      required: "Email is required",
      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, message: "This is not a valid email address" }
    },
    password: {
      required: { value: true, message: "Password is required" },
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      },
      maxLength: {
        value: 12,
        message: "Password must not exceed 12 characters"
      }
    }
  }

  return (

    <div className='App'>


      <Link to="/yupresolver"> React Hook Form With Resolver</Link>


      <Form className='form' onSubmit={handleSubmit(onSubmit)}>
        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        <FormGroup>
          <h3> React Hook Form : Register</h3>
        </FormGroup>

        <FormGroup>
          <Label>Name</Label>
          <input type="text" className="form-control"
            // name="name"
            // innerRef={register("name").ref}
            {...register("name", errorOptions.name)}
          />
          <small>
            {errors.name?.message}
          </small>

        </FormGroup>
        {/* for version 7 <input {...register(name)} /> synax used 
          but reactStrap is not genuine input element so the name value dont get passed. then
          use innerRef => <input innerRef={register(name).ref} for v.7.x 
          use innerRef => <input innerRef={register(name)} for v.6.x  */}

        <FormGroup>
          <Label for='email'>Email</Label>
          <input className="form-control"
            type="email"
            // name="email"
            // innerRef={register("email").ref}
            {...register("email", errorOptions.email)}
          />
          <small>
            {/* {errors.email?.message} */}
            {errors.email && errors.email.message}
          </small>

        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <input className="form-control"
            type="password"
            // name="password"
            // innerRef={register("password").ref}
            {...register("password", errorOptions.password)}
          />
          <small>
            {errors.password?.message}
          </small>

        </FormGroup>

        <FormGroup >
          <select className='form-control'
            name="City"
            aria-invalid={errors.City ? "true" : "false"}
            {...register("City", { required: "select a value" })}
          >
            <option value="">Select City...</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Other">Other</option>
          </select>

          <small>
            {errors.City?.message}
          </small>

        </FormGroup>

        <FormGroup>

          {/* <label htmlFor='ReactDatepicker'>React Datepicker</label> */}
          <Controller
            control={control}
            name="ReactDatepicker"
            render={({ field }) => (
              <ReactDatePicker
                className='form-control'
                placeholderText="Controlled Select date"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
              />
            )}
          />

        </FormGroup>

        <FormGroup>
          <label htmlFor="developer"> Are you a developer? </label>
          <input {...register("developer")} value="yes" type="checkbox" />
        </FormGroup>

        <Button type='submit' color="primary">Submit</Button>
      </Form>



    </div>

  )
}


function ReactHookForm() {
  return <Register />
}

export default ReactHookForm

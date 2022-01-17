import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import "./styles.css";
import { Form, FormGroup, Label, Button } from "reactstrap";


const schema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email().required(),
  age: yup.number().positive().required("age is required"),
  password: yup.string().min(5).max(12).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data)
    alert(`Here are your details: \nName: ${data.name} \nEmail: ${data.email} \nAge: ${data.age}`)
  };
  console.log(errors);
  return (
    <div className="App">
      <h3>React Hook Form optimized custom yup resolver</h3>

      <Form className="form" onSubmit={handleSubmit(onSubmit)}>

        <FormGroup>
        <label>Name</label>
        <input type="text" className="form-control" 
        {...register("name")} placeholder="(ex: John)" />
        <small>{errors.name && <p>{errors.name.message}</p>}</small>
        </FormGroup>

        <FormGroup>
        <label>Email</label>
        <input type="text" className="form-control" 
        {...register("email")} placeholder="(ex: ab@12.com)" />
        <small>
          {errors.email?.message}
        </small>
        </FormGroup>

        <FormGroup>
        <label>Age</label>
        <input type="text" className="form-control" {...register("age")} />
        <small>{errors.age?.message}</small>
        </FormGroup>

        <FormGroup>

        <Label>Password</Label>
        <input type="password" className="form-control"
          {...register("password")}
        />
        <small>{errors.password?.message}</small>
        </FormGroup>
        <FormGroup>
        <Label>Confirm Password</Label>
        <input type="password" className="form-control" {...register("confirmPassword") } />
        <small>
          {errors.confirmPassword && "Password Should Match"}
        </small>
        </FormGroup>


        <input type="submit" style={{backgroundColor: "coral"}}/>
      </Form>
    </div>
  );
}

export default HookForm

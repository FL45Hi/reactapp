import { useState } from 'react';
import {
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Label,
    Input,
    Button,
} from 'reactstrap';

const ReactStrapForm = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
        validate: {
            emailState: '',
        },
    });

    const handleChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        setState({ [name]: value, })
    };

    const validateEmail = (e) => {
        const emailRex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const { validate } = state;

        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success';
        } else {
            validate.emailState = 'has-danger';
        }

        setState({ validate });
    }


    const submitForm = (e) => {
        e.preventDefault();
        validateEmail();
        console.log(`Email: ${state.email}`);
    }


    const { email, password } = state;

        return (
            <div className="App">
                <h2>Sign In</h2>
                <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="example@example.com"
                            // valid={state.validate.emailState === "has-success"}
                            // invalid={state.validate.emailState === "has-danger"}
                            value={email}
                            onChange={handleChange}
                        />
                        <FormFeedback>
                            Uh oh! Looks like there is an issue with your email. Please input
                            a correct email.
                        </FormFeedback>
                        <FormFeedback valid>
                            That's a tasty looking email you've got there.
                        </FormFeedback>
                        <FormText>Your username is most likely your email.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                            value={password}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }


export default ReactStrapForm;
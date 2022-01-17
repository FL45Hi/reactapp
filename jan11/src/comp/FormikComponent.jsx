import React from 'react'

// The <Formik/> component exposes various other components that adds more abstraction and 
// sensible defaults. For example, components like <Form/>, <Field/>, and <ErrorMessage/> 
// are ready to go right out of the box.


/* Manually trigger validation ( we have to use render props on whole Form)
 <Formik >
 { formik => {
    return (
        <Form>      ...
        </Form
    )}
} </Formik>

and formik same as return object from useFormik(). means we can use formik.values, all formik props.

*/
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';

import * as yup from 'yup';

const validationSchema = yup.object().shape({
    username: yup.string().required("Give your Murim Name"),
    sect: yup.string().min(8, "Must be more than 8 characters").required("Sect Name is required"),
    realm: yup.string().required("Spectify Your Realm of Cultivation"),
    talent: yup.string().required()
})

const validate = values => {
    // values.username  values.sect  values.realm
    // errors.username  errors.sect  errors.realm
    // error.realm = "THe cultivation is required.."

    let errors = {}

    if (!values.username) {
        errors.username = 'Required'
    }
    if (!values.sect) {
        errors.sect = 'Required'
    }
    if (!values.realm) {
        errors.realm = 'Required'
    }

    return errors;
}

// const onSubmit = values => {
//     console.log("Form Values : ", values);
//     alert(JSON.stringify(values, undefined, 2)
//     )

// }
// This will not work after submit form with isSubmitting props. button will be disabled afterwords.

const onSubmit = (values, onSubmitProps )  => {
    console.log("Form Values : ", values);
    console.log("Submit Props : ", onSubmitProps);

    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    // after submitting form, field data will reset.

    alert(JSON.stringify(values, undefined, 2)
    )

}
// This is only for disable props isSubmitting

const initialValues = {

    username: '',
    sect: '',
    realm: '',
    talent: '',
    social: {
        kunlun: '',
        allience: '',
    },
    // nested object
    contact: ['', ''],
    // Array.
    elders: ['']
}

// console.log("Form Errors: ", Formik.errors);

// console.log("Visited Fields", Formik.touched);


function FormikComponent() {


    return (

        <div className='Murim'>

            <h1>Cultivator Details Form </h1>
            {/* bind "onSubmit" to "formik.handleSubmit" */}

            <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                // validateOnMount
                // formik will run valiadate on each populate object
            >

                {
                    formik => {

                        console.log("Formik props", formik)

                        

                        return (
                        
                            
                            <Form className="form">

                                
                                <div className='form-group'>
                                    <label htmlFor='username' >Enter Cultivator Name </label>
                                    <Field className="form-control" type='text'
                                        id='username' name='username' placeholder='Cultivator Name..'
                                    // {...Formik.getFieldProps('username')}
                                    />
                                    <ErrorMessage name='username' component='small' />
                                </div>

                                <div className='form-group' >
                                    <label htmlFor='sect' >Enter Sect Name </label>
                                    <Field className="form-control" type='text'
                                        id='sect' name='sect' placeholder='Sect Name'
                                    // {...Formik.getFieldProps('sect')}

                                    />
                                    <ErrorMessage name='sect' component='small' />
                                    {/* component props will add small element wrapaper to error msg */}
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='realm' >Enter Cultivation Realm </label>
                                    <Field className="form-control" type='text'
                                        id='realm' name='realm' placeholder='Cultivation Realm'
                                    // {...Formik.getFieldProps('realm')}
                                    />
                                    <ErrorMessage name="realm" component='small' />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='realm' >Enter Cultivation Realm </label>
                                    <Field as='textarea' className="form-control"
                                        id='talent' name='talent' placeholder='Cultivation Talent Remarks'
                                    // {...Formik.getFieldProps('realm')}
                                    />
                                    <ErrorMessage name="talent" component='small' />
                                </div>

                                <div className='form-group' >
                                    <label htmlFor='murim' >Enter Murim Province/Zhongyaun </label>
                                    <Field className="form-control" name='murim' placeholder='Murim Name'>
                                        {
                                            props => {
                                                const { field, form, meta } = props;
                                                console.log("Render Props : ", props)

                                                return (
                                                    <div>
                                                        <input type="text" id="murim" {...field} />
                                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                                    </div>
                                                )
                                            }
                                        }
                                    </Field>
                                    <ErrorMessage name='murim' component='small' />
                                </div>

                                <div className="form-group">
                                    <label>Kunlun profile</label>
                                    <Field type="text" id="kunlun" name="social.kunlun" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Alliance/Pantheon profile</label>
                                    <Field type="text" id="allience" name="social.allience" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label>Contact 1</label>
                                    <Field type="text" id="1" name="contact[0]" className="form-control" />

                                    <label>contact 2</label>
                                    <Field type="text" id="2" name="contact[1]" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label>List of Elders of Allience</label>
                                    <FieldArray name="elders" className="form-control">
                                        {
                                            fieldArrayProps => {
                                                console.log(" fieldarrayProps :", fieldArrayProps);
                                                const { push, remove, form } = fieldArrayProps;
                                                const { values } = form;
                                                const { elders } = values;
                                                return <div>
                                                    {elders.map((n, i) => (
                                                        <div key={i}>
                                                            <Field name={`elders[${i}]`} />
                                                            <button style={{ border: "none", borderRadius: "25%" }} onClick={() => remove(i)}> - </button>
                                                            <button style={{ border: "none", borderRadius: "25%" }} onClick={() => push('')}> + </button>
                                                        </div>
                                                    ))

                                                    }
                                                </div>
                                            }
                                        }
                                    </FieldArray>
                                </div>


                                {/* Maanual validation pressing the buttons */}
                                <button style={{ border: "1px solid grey", borderRadius: "5%" }} type='button'
                                    onClick={() => formik.validateField('talent')}
                                >
                                    Validate Talent
                                </button>

                                <button style={{ border: "1px solid grey", borderRadius: "5%" }} type='button'
                                    onClick={() => formik.validateForm()}
                                >
                                    Validate All
                                </button>


                                <button style={{ border: "1px solid grey", borderRadius: "5%" }} type='reset'
                                    onClick={() => formik.validateForm()}
                                >
                                    Reset Data
                                </button>

                                <button className='btn btn-primary' type='submit' 
                                // disabled={!(formik.isValid )}

                                disabled={formik.isSubmitting} //form submission is in progress..

                                // disabled={!(formik.dirty &&formik.isValid )}
                                // dirty for it will check change in field and disable  submit.
                                // dirty is disadvantages when we set all intialvalues and try to validate, it will not work beacuse of not change in fields.
                                >Submit</button>



                            </Form>

                        )
                    }


                }






            </Formik>
        </div>
    )
}

export default FormikComponent

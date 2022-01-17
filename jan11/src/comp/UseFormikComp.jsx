import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import * as yup from 'yup';

const validationSchema = yup.object({
    username: yup.string().required("Give your Murim Name"),
    sect : yup.string().required("Sect Name is required"),
    realm: yup.string().required("Spectify Your Realm of Cultivation")
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

function UseFormikComp() {

    const Formik = useFormik({
        initialValues: {
            username: '',
            sect: '',
            realm: ''
        },
        onSubmit: values => {
            console.log("Form Values : ", values);
        },
        // validate,
        validationSchema

    });

    console.log("Form Errors: ", Formik.errors);

    console.log("Visited Fields", Formik.touched)




    return (
        <div className='App'>
            <pre>
                {JSON.stringify(Formik.values, undefined, 2)}
                <Link to="/5"> Formik with React Context </Link>
            </pre>
            <h1>Cultivator Details Form </h1>
            {/* bind "onSubmit" to "formik.handleSubmit" */}
            <form className="form" onSubmit={Formik.handleSubmit} >
                <div className='form-group'>
                    <label htmlFor='username' >Enter Cultivator Name </label>
                    <input className="form-control" type='text'
                        id='username' name='username' placeholder='Cultivator Name..'
                        onChange={Formik.handleChange} value={Formik.values.username} />
                    <small>{Formik.errors?.username}</small>
                </div>

                <div className='form-group' >
                    <label htmlFor='sect' >Enter Sect Name </label>
                    <input className="form-control" type='text'
                        id='sect' name='sect' placeholder='Sect Name'
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        value={Formik.values.sect}  //also bind our email value
                    />
                    {Formik.touched.sect && Formik.errors.sect ? (
                        <small>{Formik.errors.sect}</small>
                    ) : null}
                </div>

                <div className='form-group'>
                    <label htmlFor='realm' >Enter Cultivation Realm </label>
                    <input className="form-control" type='text'
                        id='realm' name='realm' placeholder='Cultivation Realm'
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}  //track of visited fields.
                        value={Formik.values.realm}

                        // {...Formik.getFieldProps('realm')}
                        // This can be used with useFormik also
                    />

                    <small>{Formik.errors?.realm}</small>
                </div>

                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UseFormikComp

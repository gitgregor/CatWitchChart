import React from 'react';
import { Formik, Field, Form } from 'formik';
import '../../../STYLES/Styles/scssStyles/Formik-SCSS/loginForm.styles.scss'

const LoginFormik = () => (
    <div  {...{ className: "login-wrapper__formik" }} >
        <h2 style={{ textAlign: "center" }}>To add Person FILL UP this FORM please</h2>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form {...{ className: "form" }}>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Jane" />

                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Doe" />

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                />
                <button
                    {...{ className: "login-submit__formik" }}
                    type="submit">Add Person</button>
            </Form>
        </Formik>
    </div>
);

export default LoginFormik
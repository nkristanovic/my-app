import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Section from '../../components/Section/Section';
import LoaderBars from '../../components/Loader/Loader';
import {
    Form,
    FormRow,
    InputLabel,
    InputText,
    InputError,
    ButtonSubmit
} from '../../lib/style/generalStyles'


const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
            isAdmin: false
        },
        validationSchema: Yup.object ({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
            passwordConfirmation: Yup.string()
                .test(
                    'password-match',
                    'Passwords must match',
                    function(value) {
                        return this.parent.password === value
                    }
                )
        }),
        onSubmit: values => {
            setIsLoading(true);

            setTimeout(() => {
                setIsLoading(false);
                alert(JSON.stringify(values));
            }, 1000);
        },
    });

    return (
        <>
            <Section title="Register" withoutTopPadding={true}>
                {!isLoading
                    ? <Form onSubmit={formik.handleSubmit}>
                        <FormRow>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <InputText
                                id='email'
                                type='text'
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email
                                ?<InputError>{formik.errors.email}</InputError>
                                :null
                            }
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <InputText
                                id='password'
                                type='text'
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password
                                ?<InputError>{formik.errors.password}</InputError>
                                :null
                            }
                        </FormRow>
                        <ButtonSubmit type='submit'>Submit</ButtonSubmit>
                    </Form>
                : <LoaderBars />}
            </Section>
        </>
    )
}

export default Login;
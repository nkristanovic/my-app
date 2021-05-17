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
    ButtonSubmit,
    SuccessMessage
} from '../../lib/style/generalStyles'
import { loginUser } from '../../api/login';
import { getAllUser } from '../../api/user';

const Login = ({ setIsLoggedIn, setIsAdmin }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [isRequestFinished, setIsRequestFinished] = useState(false);
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object ({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true);
            setIsError(false);
            setIsRequestFinished(false);
            
            try
            {
                const response = await loginUser(values);
                const users = await getAllUser(response.token);
                const isAdmin = users.find(user => user.email === values.email).isAdmin;
                localStorage.setItem('ayuthToken', response.token);
                localStorage.setItem('isAdmin', isAdmin);

                setIsLoggedIn(true);
                setIsAdmin(isAdmin);

                setSuccessMessage('User is login successfully!');
                resetForm({});
                setTimeout(() => {
                    setIsRequestFinished(false);
                }, 4000);

            } catch (err) {
                setIsError(true);
                setSuccessMessage('Something went wrong!');
            } finally {
                setIsLoading(false);
                setIsRequestFinished(true);
            }
        },
    });

    return (
        <>
            <Section title="Login" withoutTopPadding={true}>
            {isRequestFinished && 
                <SuccessMessage isError={isError}>{successMessage}</SuccessMessage>
                }
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
                                type='password'
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password
                                ?<InputError>{formik.errors.password}</InputError>
                                :null
                            }
                        </FormRow>
                        <ButtonSubmit type='submit'>Login</ButtonSubmit>
                    </Form>
                : <LoaderBars />} 
            </Section>
        </>
    )
}

export default Login;
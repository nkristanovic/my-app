import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../../api/register';
import Section from '../../components/Section/Section';
import LoaderBars from '../../components/Loader/Loader';
import {
    Form,
    FormRow,
    CheckboxWrapper,
    InputLabel,
    InputText,
    InputCheckbox,
    InputError,
    ButtonSubmit,
    SuccessMessage
} from '../../lib/style/generalStyles';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [isRequestFinished, setIsRequestFinished] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            passwordConfirmation: '',
            isAdmin: false
        },
        validationSchema: Yup.object ({
            firstName: Yup.string()
                .required('First name is reuqired'),
            lastName: Yup.string()
                .required('Last name is required'),
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
        onSubmit: (values, {resetForm}) => {
            setIsLoading(true);
            setIsRequestFinished(false);

            const user = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                isAdmin: values.isAdmin
            };

            registerUser(user)
                .then(res => {
                    resetForm({});
                    setIsError(false);
                    setSuccessMessage('User is registered successfully!');
                    setTimeout(() => {
                        setIsRequestFinished(false);
                    }, 4000);
                })
                .catch(err => {
                    setIsError(true);
                    setSuccessMessage('User registration failed!');
                })
                .finally(() => {
                    setIsLoading(false);
                    setIsRequestFinished(true);
                })
            
        },
    });

    return (
        <>
            <Section title="Register" withoutTopPadding={true}>
            {isRequestFinished &&
                <SuccessMessage isError={isError}>{successMessage}</SuccessMessage>
                }
                {!isLoading
                    ? <Form onSubmit={formik.handleSubmit}>
                        <FormRow>
                            <InputLabel htmlFor='firstName'>First name</InputLabel>
                            <InputText
                                id='firstName'
                                type='text'
                                {...formik.getFieldProps('firstName')}
                            />
                            {formik.touched.firstName && formik.errors.firstName
                                ? <InputError>{formik.errors.firstName}</InputError>
                                : null
                            }
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='lastName'>Last name</InputLabel>
                            <InputText
                                id='lastName'
                                type='text'
                                {...formik.getFieldProps('lastName')}
                            />
                            {formik.touched.lastName && formik.errors.lastName
                                ?<InputError>{formik.errors.lastName}</InputError>
                                :null
                            }
                        </FormRow>
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
                        <FormRow>
                            <InputLabel htmlFor='passwordConfirmation'>Confirm password</InputLabel>
                            <InputText
                                id='passwordConfirmation'
                                type='password'
                                {...formik.getFieldProps('passwordConfirmation')}
                            />
                            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation
                                ?<InputError>{formik.errors.passwordConfirmation}</InputError>
                                :null
                            }
                        </FormRow>
                        <FormRow>
                            <CheckboxWrapper>
                                <InputCheckbox 
                                    id='isAdmin'
                                    type='checkbox'
                                    {...formik.getFieldProps('isAdmin')}
                                />
                                <InputLabel htmlFor='isAdmin'>Register as Admin</InputLabel>
                            </CheckboxWrapper>
                        </FormRow>
                        <ButtonSubmit type='submit'>Register</ButtonSubmit>
                    </Form>
                : <LoaderBars />}
            </Section>
        </>
    )
}

export default Register;
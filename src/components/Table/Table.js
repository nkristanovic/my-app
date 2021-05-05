import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Form,
    FormRow,
    InputLabel,
    InputText,
    InputError,
} from '../../lib/style/generalStyles';

const Table = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            category: '',
            date: '',
            timeFrom: '',
            timeTo: '',
            capacity: '',
            firm: ''
        },
        validationSchema: Yup.object ({
            title: Yup.string()
                .required('Title is requried'),
            description: Yup.string()
                .required('Description is requried'),
            category: Yup.string()
                .required('Category is requried'),
            date: Yup.string()
                .required('Date is requried'),
            timeFrom: Yup.string()
                .required('Time from is requried'),
            timeTo: Yup.string()
                .required('Time to is requried'),
            capacity: Yup.number()
                .required('Capacity is requried'),
            firm: Yup.string()
                .required('Firm is requried'),    
        })
    })
    return (
        <>
                <Form onSubmit={formik.handleSubmit}>
                    <FormRow>
                        <InputLabel htmlFor='title'>Title</InputLabel>
                        <InputText
                            id='title'
                            type='text'
                            {...formik.getFieldProps('title')}
                        />
                        {formik.touched.title && formik.errors.title
                            ? <InputError>{formik.errors.title}</InputError>
                            : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='decription'>Description</InputLabel>
                        <InputText
                            id='description'
                            type='textarea'
                            {...formik.getFieldProps('description')}
                        />
                        {formik.touched.description && formik.errors.description
                            ? <InputError>{formik.errors.description}</InputError>
                            : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='date'>Date</InputLabel>
                        <InputText
                            id='date'
                            type='date'
                            {...formik.getFieldProps('date')}
                        />
                        {formik.touched.date && formik.errors.date
                            ? <InputError>{formik.errors.date}</InputError>
                            : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='timeFrom'>Time from</InputLabel>
                        <InputText
                            id='timeFrom'
                            type='time'
                            {...formik.getFieldProps('timeFrom')}
                        />
                        {formik.touched.timeFrom && formik.errors.timeFrom
                            ? <InputError>{formik.errors.timeFrom}</InputError>
                            : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='timeTo'>Time to</InputLabel>
                        <InputText
                            id='timeTo'
                            type='time'
                            {...formik.getFieldProps('timeTo')}
                        />
                        {formik.touched.timeTo && formik.errors.timeTo
                            ? <InputError>{formik.errors.timeTo}</InputError>
                            : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='capacity'>Capacity</InputLabel>
                        <InputText
                            id='capacity'
                            type='number'
                            {...formik.getFieldProps('capacity')}
                        />
                        {formik.touched.capacity && formik.errors.capacity
                            ? <InputError>{formik.errors.capacity}</InputError>
                            : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='firm'>Firm</InputLabel>
                        <InputText
                            id='firm'
                            type='text'
                            {...formik.getFieldProps('firm')}
                        />
                        {formik.touched.firm && formik.errors.firm
                            ? <InputError>{formik.errors.firm}</InputError>
                            : null
                        }
                    </FormRow>
                </Form>
            <button>Add Event</button>
        </>
    )
}

export default Table;
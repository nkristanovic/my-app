import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../Modal/Modal';
import {
    Form,
    FormRow,
    FormColumn,
    InputLabel,
    InputText,
    TextArea,
    InputError,
    ButtonSubmit,
    Select,
    ButtonAddEvent
} from '../../lib/style/generalStyles';
import {
    Tr,
    Th,
    TableBody,
    TableWrapper,
    TableEmpty
} from './TableStyle';
const Table = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [events, setEvents] = useState([]);
    
    const formik = useFormik({
        initialValues: {
            id: 1,
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
        }),
        onSubmit: values => {
            setEvents ({
                ...events,
                values
            });
        },
    });
    
    return (
        <>
            <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
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
                        <TextArea
                            id='description'
                            {...formik.getFieldProps('description')}
                        />
                        {formik.touched.description && formik.errors.description
                            ? <InputError>{formik.errors.description}</InputError>
                            : null
                        }
                    </FormRow>
                    <FormColumn>
                        <FormRow>
                            <InputLabel htmlFor='category'>Category</InputLabel>
                            <Select
                                id='category'
                                {...formik.getFieldProps('category')}
                            >
                            <option value="">Select...</option>
                            <option value="1">#marketing</option>
                            <option value="2">#design</option>
                            <option value="3">#frontend</option>
                            <option value="4">#backend</option>
                            </Select>
                            {formik.touched.category && formik.errors.category
                                ? <InputError>{formik.errors.category}</InputError>
                                : null
                            }
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='date'>Date</InputLabel>
                            <InputText
                                id='date'
                                {...formik.getFieldProps('date')}
                            />
                            {formik.touched.date && formik.errors.date
                                ? <InputError>{formik.errors.date}</InputError>
                                : null
                            }
                        </FormRow>
                    </FormColumn>
                    <FormColumn>
                        <FormRow>
                            <InputLabel htmlFor='timeFrom'>Time from</InputLabel>
                            <InputText
                                id='timeFrom'
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
                                {...formik.getFieldProps('timeTo')}
                            />
                            {formik.touched.timeTo && formik.errors.timeTo
                                ? <InputError>{formik.errors.timeTo}</InputError>
                                : null
                            }
                        </FormRow>
                    </FormColumn>
                    <FormColumn>
                        <FormRow>
                            <InputLabel htmlFor='capacity'>Capacity</InputLabel>
                            <InputText
                                id='capacity'
                                {...formik.getFieldProps('capacity')}
                            />
                            {formik.touched.capacity && formik.errors.capacity
                                ? <InputError>{formik.errors.capacity}</InputError>
                                : null
                            }
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='firm'>Company</InputLabel>
                            <Select
                                id='firm'
                                {...formik.getFieldProps('firm')}
                            >
                            <option value="">Select...</option>
                            <option value="1">Speck</option>
                            <option value="2">Five</option>
                            <option value="3">Bornfight</option>
                            <option value="4">Agency 04</option>
                            </Select>
                            {formik.touched.firm && formik.errors.firm
                                ? <InputError>{formik.errors.firm}</InputError>
                                : null
                            }
                        </FormRow>
                    </FormColumn>
                    <FormRow>
                        <ButtonSubmit type="submit">Add Event</ButtonSubmit>
                    </FormRow>
                </Form>
            </Modal>
            <ButtonAddEvent onClick={() => setModalIsOpen(true)}>Add Event</ButtonAddEvent>
            {events.length > 0
            ?
            <TableWrapper>
                <TableBody>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Title</Th>
                        <Th>Date</Th>
                        <Th>Time from</Th>
                        <Th>Time to</Th>
                        <Th>Capacity</Th>
                        <Th>Company</Th>
                        <Th></Th>
                    </Tr>
                </TableBody>
            </TableWrapper>
            : <TableEmpty>There are no events yet!</TableEmpty>}
            
        </>
    )
}

export default Table;
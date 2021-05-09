import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../Modal/Modal';
import { MdDelete } from 'react-icons/md';
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
    TableHead,
    TableBody,
    TableWrapper,
    TableEmpty,
    Td,
    DeleteIcon
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
            company: ''
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
            company: Yup.string()
                .required('Company is requried'),    
        }),
        onSubmit: values => {
            setEvents (
                 [...events, values]
            );
            setModalIsOpen(false);
        },
    });

    const deleteRow = index => {
        const NewEvents = [...events];
        NewEvents.splice(index, 1);
        setEvents(NewEvents);
    };
    
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
                            <option value="Marketing">#marketing</option>
                            <option value="Design">#design</option>
                            <option value="Frontend">#frontend</option>
                            <option value="Backend">#backend</option>
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
                            <InputLabel htmlFor='company'>Company</InputLabel>
                            <Select
                                id='company'
                                {...formik.getFieldProps('company')}
                            >
                            <option value="">Select...</option>
                            <option value="Speck">Speck</option>
                            <option value="Five">Five</option>
                            <option value="Bornfight">Bornfight</option>
                            <option value="Agency 04">Agency 04</option>
                            </Select>
                            {formik.touched.company && formik.errors.company
                                ? <InputError>{formik.errors.company}</InputError>
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
            ? <TableWrapper>
                <TableHead>
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
                </TableHead>
                <TableBody>
                    {events.map ((event, index) => 
                    <Tr key={index}>
                        <Td>{event.id}</Td>
                        <Td>{event.title}</Td>
                        <Td>{event.date}</Td>
                        <Td>{event.timeFrom}</Td>
                        <Td>{event.timeTo}</Td>
                        <Td>{event.capacity}</Td>
                        <Td>{event.company}</Td>
                        <DeleteIcon>
                        <MdDelete onClick={() => deleteRow(index)} />
                        </DeleteIcon>
                    </Tr>
                    )}
                </TableBody>
            </TableWrapper>
            :<TableEmpty>There are no events yet!</TableEmpty>}
            
        </>
    )
}

export default Table;
import React, { FC } from 'react';
import { Paper } from '@material-ui/core';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

// Custom Components
import TextFieldWrapper from './TextFieldWrapper'
import axios from 'axios';
import { InputType } from '../../types/Input';

type Values = {
    body: String
}

const Input: FC<InputType> = ({ todos, setTodos }) => {
    
    const initialState = {
        body: '',
    }
    
    const formSchema = Yup.object().shape({
        body: Yup.string().required('Required'),
    })

    const handleSubmit = async (values: Values, form: any) => {
        const data = await axios.post(`${import.meta.env.VITE_API_URL}`, { body: `${values.body}`})
        setTodos([data.data, ...todos])
        form();
    }

    return (
        <Formik
            initialValues={{...initialState}}
            validationSchema={formSchema}
            onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        >
            <Form>
                <Paper style={{padding: '16px'}}>
                    <TextFieldWrapper name='body' label='Body' />
                </Paper>
            </Form>
        </Formik>
    )
}

export default Input;
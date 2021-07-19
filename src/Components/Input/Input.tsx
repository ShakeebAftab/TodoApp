import React from 'react';
import { Paper } from '@material-ui/core';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

// Custom Components
import TextFieldWrapper from './TextFieldWrapper'

type Values = {
    body: String
}

type FormReset = {
}

const Input = () => {
    
    const initialState = {
        body: '',
    }
    
    const formSchema = Yup.object().shape({
        body: Yup.string().required('Required'),
    })

    const handleSubmit = async (values: Values, form: any) => {
        console.log(`handleSubmit`);
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
import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'
import { useField } from 'formik'
import { InputFields } from '../../types/Input'



const useStyles = makeStyles(theme => ({
    field: {
        color: 'white'
    },
    label: {
        color: theme.palette.error.main
    }
}))

const TextFieldWrapper = ({ name, ...otherProps }: any) => {
    
    const classes = useStyles()
    const [field, meta] = useField(name)

    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'standard',
        autoComplete: false,
        color: "secondary",
        error: false,
        helperText: '',
    }

    if (meta && meta.touched && meta.error){
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return (
        <TextField {...configTextField} InputProps={{className: classes.field}} InputLabelProps={{className: classes.label}} />
    )
}

export default TextFieldWrapper;
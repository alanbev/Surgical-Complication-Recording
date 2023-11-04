import React, {  } from 'react';
import {Field, ErrorMessage } from 'formik';
import  {Box, } from '@mui/material/';
import '../CSS/report.css'


function RadioButton(props) {

    const { label, name, optionObject, ...rest } = props.features
    return (
        <Box  className="radioboxContainer">
        <label> {label} </label>
        <Field  name={name} {...rest}>
{({field }) => {
         return optionObject.map( (option) =>{
            return (
                <React.Fragment key = {option.key}>
                    <p className="checkboxItem">
                    <input
                    type = "radio"
                    id =  {option.value}
                    {...field}
                    value = {option.value}
                    checked = {field.value===(option.value)}
                    onMouseDown={props.onClick}
                    
    
                    />
                <label htmlFor = {option.value}> {option.key} </label>
                </p>
                </React.Fragment>
                )
            })
        }}
       </Field>
        </Box>
     
     );
}

export default RadioButton;
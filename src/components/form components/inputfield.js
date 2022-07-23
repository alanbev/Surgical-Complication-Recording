import React, {  } from 'react';
import {Field, ErrorMessage } from 'formik';
import  {Box, } from '@mui/material/';
import '../../CSS/report.css'



function InputField(props) {

    const { type, symptom, ...rest} = props
    const { label, name } = props.symptom
   

    return (
        <Box sx={{border:"solid", borderColor:"grey.300",borderRadius:"10px", width:"auto", margin:2, backgroundColor:"aliceblue", display:(symptom.show ? "block" : "none")}}>
        <label htmlFor={name}> {label} </label>
        <Field  className="modalInputBox" type={type} id={name}  name={name}  {...rest} />
       
        </Box>
     
     );
}

export default InputField;

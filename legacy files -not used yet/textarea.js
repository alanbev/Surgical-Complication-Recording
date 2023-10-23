import React, {  } from 'react';
import {Field, ErrorMessage } from 'formik';
import  {Box, } from '@mui/material/';



function TextArea(props) {

    const { label, name } = props.symptom

    return (
        <Box sx={{border:"solid", borderColor:"grey.300",borderRadius:"10px", width:"auto", margin:1, backgroundColor:"aliceblue"}}>
       <p> <label htmlFor={name}> {label} </label></p>
        <Field as = 'textarea'className="modalInputBox" id={name}  name={name}  />
       
        </Box>
     
     );
}

export default TextArea;

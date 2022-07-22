import React, {  } from 'react';
import {Field, ErrorMessage } from 'formik';
import  {Box, } from '@mui/material/';



function DropDown(props) {

    const { label, name, optionObject } = props.symptom
    
    return (
        <Box sx={{border:"solid", borderColor:"grey.300",borderRadius:"10px", width:"auto", margin:1, backgroundColor:"aliceblue"}}>

        <label htmlFor={name}> {label} </label>
        <Field as = 'select'className="modalInputBox" id={name}  name={name}  >

        {optionObject.map(option=>{
            return (
                <option key = {option.key} value = {option.value}>
                    {option.key}
                </option>
                )
        })}
       </Field>
        </Box>
     
     );
}

export default DropDown;

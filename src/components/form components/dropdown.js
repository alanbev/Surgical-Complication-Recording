import React from 'react';
import {Field} from 'formik';
import  {Box} from '@mui/material/';



function DropDown(props) {

    const { label, name, optionObject,show } = props.dataForControl
 
    return (
        <Box sx={{border:"solid", borderColor:"grey.300",borderRadius:"10px", width:"auto", margin:1, backgroundColor:"aliceblue", display:(show ? "block" : "none")}} >

        <label htmlFor={name}> {label} </label>
        <Field as = 'select'className="modalInputBox" id={name}  name={name}  >

        {optionObject.map(option=>{
            return (
                <option key = {option.key} value = {option.key} >
                    {option.value}
                   
                </option>
        
                )
        })}
       </Field>
        </Box>
     
     );
}

export default DropDown;

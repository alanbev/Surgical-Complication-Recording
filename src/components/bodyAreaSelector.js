import React, { Component,useState } from 'react';
import { Box, Button, Paper, Typography, Moda, Grid } from '@mui/material';
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import DropDown from './form components/dropdown';
import listOfComplications from '../Contents/ListOfComplications';


function BodyAreaSelector(props){

const initialValues={}

const dataForControl={}
dataForControl.name="BodyAreaDropdown"
dataForControl.label="Select the body area where the comlication occurred"
dataForControl.optionObject=[{key:"noSelection",value:"Select an Option"}]
dataForControl.show=true

const bodyAreas= Object.keys(listOfComplications)
bodyAreas.forEach(element => {
dataForControl.optionObject.push({key:element,value: listOfComplications[element]["displayAs"]})  
});

const onSubmit=(values)=>{
    if(values.BodyAreaDropdown !== "noSelection")
    {
    props.setBodyArea(values.BodyAreaDropdown)
    console.log(values.BodyAreaDropdown)
    }
}

return(
<>
<Formik
    initialValues={initialValues}
    onSubmit={onSubmit}>
<Form>
    <DropDown  dataForControl={dataForControl} key={0} /> 
    <Button sx={{ m: 1 }} variant='contained' size="small" type='submit'>Select area</Button>
</Form>

</Formik>
</>
)


}

export default BodyAreaSelector
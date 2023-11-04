import React, { useState } from 'react';
import { Box, Button, } from '@mui/material';
import { Formik, Form,} from 'formik';
import DropDown from './dropdown';
import listOfComplications from '../../Contents/ListOfComplications';


function BodyAreaSelector(props){

const initialValues={}

const dataForControl={}
dataForControl.name="BodyAreaDropdown"
dataForControl.label="First select the body area where the complication occurred"
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
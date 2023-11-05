import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Formik, Form} from 'formik';
import listOfComplications from '../../Contents/ListOfComplications.js';
import interventions from '../../Contents/interventions.js';
import DropDown from './dropdown.js';
import CheckboxGroup from './checkboxgroup.js';


function ComplicationForm(props){

const [initialValues, setInitialValues]=useState({complication:"", severityFeatures:[]})

const dataForControl={}
dataForControl.name="complication"
dataForControl.label="Then select the complication"

dataForControl.optionObject=[{key:"noSelection",value:"Select an Option"}]
dataForControl.show=true

const bodyArea= props.bodyArea
if (bodyArea !== undefined){
    listOfComplications[bodyArea]["complications"].forEach(element => {
    dataForControl.optionObject.push({key:element,value: element})  
});}

const features={}
features.name="severityFeatures";
features.label="Select all interventions required"
features.show=true
const options=[]
interventions.forEach(item=>
    {
    let newEntry = {key:item, value:item}
    options.push(newEntry)
    })
features.optionObject=options


const onSubmit=(values)=>{
    if(values.complication !== "noSelection")
    {
    props.setseverityFeatures(values.severityFeatures)
    props.setComplication(values.complication)
    props.setHasSubmitted(true)
   values.severityFeatures=[]
   values.complication="noSelection"
   setInitialValues({complication:"noSelection"})
    }
}

return(
<Box sx={{border:"solid",borderColor: "silver", borderRadius:2, marginLeft:5}}>
<Formik
    initialValues={initialValues}
    onSubmit={onSubmit}>
<Form>
    <DropDown  dataForControl={dataForControl} key={0} /> 
    <CheckboxGroup features={features} key={1}/>
    <Button sx={{ m: 1 }} variant='contained' size="small" type='submit'>Enter a new complication</Button>
</Form>

</Formik>
</Box>
)


}

export default ComplicationForm
import React, {useState, useRef, useEffect} from 'react';
import { Box, Typography,  Grid } from '@mui/material';
import '../../CSS/report.css';
import ComplicationList from './ComplicationList';
import BodyAreaSelector from './bodyAreaSelector';
import ComplicationForm from './complicationForm';
import clavienDindo from '../../utilities/clavienDindo';
import existingComplications from '../../Contents/existingcomplications';




function FormContainer(props){
const [bodyArea,setBodyArea] = useState()
const [complication, setComplication] = useState()
const [severityFeatures, setseverityFeatures] = useState([""])
const importedComplications=existingComplications
const allComplications= useRef(importedComplications)
const [complicationsToDisplay, setComplicationsToDisplay] =useState([])
const[hasSubmitted,setHasSubmitted]= useState(false)


const clavienDindoCalculator=clavienDindo

useEffect(()=>{
//update allComplications
if (complication !== undefined && complication !== "" && hasSubmitted === true) {
  const newComplication ={}
  const complicationDate = new Date()
  const clavienDindo = clavienDindoCalculator(severityFeatures)
  newComplication.date = complicationDate.toLocaleDateString("en-GB")
  newComplication.bodyArea = bodyArea
  newComplication.complication = complication
  newComplication.severityFeatures = severityFeatures
  newComplication.clavienDindo = clavienDindo
  allComplications.current.push(newComplication)
}
  setComplicationsToDisplay(allComplications.current)
 setHasSubmitted(false)

} ,[hasSubmitted])

return(
  
   <Box className="outerBox" sx={{m:2}}> 
      <Box className="outerBox" sx={{m:2}} >
        <Typography variant="h6">Existing Complications </Typography>
     <ComplicationList allComplications={complicationsToDisplay}/>
    
     </Box>
    <Grid container>
    <Grid container>
    </Grid>

    <Grid container>
    <Grid item>
      <BodyAreaSelector setBodyArea={setBodyArea}/>
    </Grid>
    <Grid item>
      <ComplicationForm bodyArea={bodyArea} setComplication = {setComplication} setseverityFeatures ={setseverityFeatures}setHasSubmitted={setHasSubmitted}/>
    </Grid>
    </Grid>
=
    </Grid>
  </Box>
 
)

}

export default FormContainer
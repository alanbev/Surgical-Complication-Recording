import React from 'react';
import {Typography,Grid } from '@mui/material';
import '../CSS/report.css'
import '../Contents/ListOfComplications.js'
import listOfComplications from '../Contents/ListOfComplications.js';

function ComplicationItem(props){

const complication=props.complication
const bodyAreaDisplay = listOfComplications[complication.bodyArea]["displayAs"]

return(
<Grid container>
<Grid item xs={2}>
<span><Typography variant='body1'>  {complication.date} </Typography> </span>
  
</Grid>
<Grid item xs={2}>
<span><Typography variant='body1'>{bodyAreaDisplay} </Typography> </span>
    
</Grid>
<Grid item xs={3}>
<span><Typography variant='body1'> {complication.complication}</Typography> </span>
   
</Grid>
<Grid item xs={4}>
<span><Typography variant='body1'> Clavien Dindo {complication.clavienDindo}</Typography> </span>
</Grid>
</Grid>

)
}
export default ComplicationItem
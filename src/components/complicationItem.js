import React from 'react';
import {Typography,Grid } from '@mui/material';
import '../CSS/report.css';

function ComplicationItem(props){

const complication=props.complication

return(
<Grid container>
<Grid item xs={2}>
    {complication.date}
</Grid>
<Grid item xs={2}>
    {complication.bodyArea}
</Grid>
<Grid item xs={3}>
    {complication.complication}
</Grid>
<Grid item xs={4}>
<span><Typography variant='body1'> Clavien Dindo {complication.clavienDindo}</Typography> </span>
</Grid>
</Grid>

)
}
export default ComplicationItem
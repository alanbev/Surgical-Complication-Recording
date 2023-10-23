import React, {useState} from 'react';
import { Box, Button, Paper, Typography, Moda, Grid } from '@mui/material';
import '../../CSS/report.css';
import ComplicationList from './ComplicatonList';
import BodyAreaSelector from '../bodyAreaSelector';


function FormContainer(props){
const [BodyArea,setBodyArea] = useState()

return(
  
   <Box className="outerBox" sx={{m:2}}>
    <Grid container>

    <Grid container>
    <Grid item>
      <Box className="outerBox" sx={{m:2}}>
     <ComplicationList />
     </Box>
    </Grid>
    </Grid>

    <Grid container>
    <Grid item>
      <BodyAreaSelector setBodyArea={setBodyArea}/>
    </Grid>
    </Grid>

    </Grid>
  </Box>
 
)

}

export default FormContainer
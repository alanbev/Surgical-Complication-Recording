import React from 'react';
import { Box, Button, Paper, Typography, Modal } from '@mui/material';
import FormMaker from './formmaker';
import '../../CSS/report.css'


function FormContainer(props){


return(
  
   <Box className="outerBox" sx={{m:2}}>
    <FormMaker /> 
  </Box>
 
)

}

export default FormContainer
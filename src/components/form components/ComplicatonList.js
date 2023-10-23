import React, { Component } from 'react';
import { Box, Button, Paper, Typography, Moda, Grid } from '@mui/material';
import ComplicationItem from '../complicationItem';

 

function CommplicatonList(props){

const complications=[]

const complicationDisplay= complications.forEach((item,index)=><ComplicationItem/>)






return(
<Box>
{complicationDisplay}




</Box>)
}
export default CommplicatonList



import React, {useEffect, useState} from 'react';
import ComplicationItem from '../complicationItem';

function ComplicationList(props){

const [allComplications,setAllComplications] = useState()
let complicationDisplay=[]

useEffect(()=>{
setAllComplications(props.allComplications)
},[props.allComplications]
)

if (allComplications !== undefined){ 
    complicationDisplay= allComplications.map((item,index)=><ComplicationItem complication = {item} key={index}/>)
}

return(
<>
{complicationDisplay}
</>
)
}

export default ComplicationList



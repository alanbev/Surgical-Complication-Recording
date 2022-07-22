



const symptomHandler = {
 
initialValuesBuilder:(questions)=>
    {
    let newObject={}
    questions.forEach(item => {
    
        let label=item["label"]
        let labelNoWhitespace= label.replaceAll(" ","_")
        if (item["controlType"] === "checkbox group")
            {
            newObject[labelNoWhitespace]=[] //initailise array to recieve multiple values if checkbox gropu
            }
        else 
            {
             newObject[labelNoWhitespace]="" //otherwise initialise string
            }
        })
    return newObject
    },


ListOptions:(optionsArray, control)=>
    { //generates option lists for modal symptom form items
    let options=[]

    if (control==="dropdown")
        {
        options.push({key:"Select an option", value: ""})
        }
    
    optionsArray.forEach(item=>
        {
        let newEntry = {key:item, value:item}
        options.push(newEntry)
        })
    return options
    },
}


export default symptomHandler
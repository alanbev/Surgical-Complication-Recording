const referalContents=[
    {
    label:"Name",
    controlType:"text",
    options:[]
    },

    {
    label:"Hospital number",
    controlType:"number",
    options:[]
    },

    {
    label:"Age",
    controlType:"number",
    options:[""]   
    },

        
    {
    label:"WHO Performance status",
    controlType:"dropdown",
    options:["0","1","2","3","4","5"]   
    },
        
    {
    label:"Consultant",
    controlType:"dropdown",
    options:["Barrow","Beveridge", "Bhowmick", "Hany", "Jadav", "Khan", "Mitchell", "Parkin", "Peristerakis"]   
    },

    {
    label:"Consultant referring",
    controlType:"dropdown",
    options:["Barrow","Beveridge", "Bhowmick", "Hany", "Jadav", "Khan", "Mitchell", "Parkin", "Peristerakis"]   
    },

        
    {
    label:"Urgent addition (Ignore addition deadline)",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

    {
    label:"Screening service patient",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

    {
    label:"LTH patient",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "Yes"  
    },

    {
    label:"Trust referring",
    controlType:"dropdown",
    options:["Blackpool", "East Lancs", "Morcambe Bay"],
    Conditional:["LTH patient", "false" ] 
    },


    {
    label:"Inpatient",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

    {
    label:"MDT to refer to",
    controlType:"dropdown",
    options:["Anal", "Colorectal","CUP" , "ERC", "Gynaecology", "Haematology", "Lung", "Neuro", "Sarcoma","Skin", "Upper GI", "Urology"],
    },

    {
    label:"Brief Clincal History",
    controlType:"textarea",
    options:[]
    },

    {
    label:"Investigations to discuss",
    controlType:"checkbox group",
    options:["Histology", "CT", "MR", "Other radiology", "Endoscopic investigations"],
    },

    {
    label:"Post Op discussion",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

    {
    label:"Operation",
    controlType:"text",
    options:[],
    Conditional:["LTH patient", "false" ] 
    },

    {
    label:"Post Radiotherapy discussion",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

{
label:"Question(s) for MDT",
controlType:"textarea",
options:[]
},
]


export default referalContents

    





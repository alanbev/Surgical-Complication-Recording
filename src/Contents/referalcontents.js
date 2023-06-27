const referalContents=[
    {
    label:"Name",
    controlType:"text",
    options:[]
    },

    {
    label:"NHS number",
    controlType:"number",
    options:[]
    },

    {
    label:"Date of Birth",
    controlType:"date",
    options:[""]   
    },

        
    {
    label:"WHO Performance status",
    controlType:"dropdown",
    options:["0","1","2","3","4","5"]   
    },

    {
    label:"MDT to refer to",
    controlType:"dropdown",
    options:["Anal", "Colorectal","CUP" , "ERC", "Gynaecology", "Haematology", "Lung", "Neuro", "Sarcoma","Skin", "Upper GI", "Urology"],
    },   
    
    
    {
    label:"MDT Consultant",
    controlType:"dropdown",
    options:["Unspecifed","Barrow","Beveridge", "Bhowmick", "Hany", "Jadav", "Khan", "Mitchell", "Parkin", "Peristerakis"]   
    },

    {
    label:"Consultant referring (if not MDT cons)",
    controlType:"text",
    options:[]   
    },

    {
    label:"Specialty of Consultant referring (if not MDT cons)",
    controlType:"text",
    options:[]   
    },


    {
    label:"Urgent addition (e.g. inpatient)",
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
    Conditional:["LTH_patient", "No"] 
    },


    {
    label:"Inpatient",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

   

    {
    label:"Brief Clinical History",
    controlType:"textarea",
    options:[]
    },

    {
    label:"Investigations to discuss",
    controlType:"checkbox group",
    options:["Histology", "CT", "MR", "Other radiology", "Endoscopic Ix"],
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
    Conditional:["Post_Op_discussion", "Yes" ] 
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

    





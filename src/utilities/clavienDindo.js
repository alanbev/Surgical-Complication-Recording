
const clavienDindo=(severityFeatures)=>{

    if(severityFeatures.includes("Fatal Outcome"))
    return "5";
    else if (severityFeatures.includes("ICU admission- multiple organ dysfunction"))
        return "4b"
    else if (severityFeatures.includes("ICU admission- single organ dysfunction"))
        return "4a"
    else if (severityFeatures.includes("General anaesthetic"))
        return "3b"
    else if (severityFeatures.includes("Surgical intervention") || severityFeatures.includes("Endoscopic intervention") || severityFeatures.includes("Radiological intervention"))
        return "3a"
    else if (severityFeatures.includes ("Antibiotics") || severityFeatures.includes("Blood transfusion") || severityFeatures.includes("Parenteral nutrition"))
        return "2"
    else 
        return "1"
}

export default clavienDindo
import React,{useState} from "react";

const FormHoook = (initialValue:string) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (evt:React.FormEvent<HTMLInputElement>)=>{
        setValue(evt.currentTarget.value);
    }
    const resetvaule = () =>{
        setValue("");
    }
    return {
        value,
        onChange,
        resetvaule
    }
}
export default FormHoook;
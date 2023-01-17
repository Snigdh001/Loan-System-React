import React,{useState} from "react";

const FormHoook = (initialValue:string) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (evt:React.FormEvent<HTMLInputElement>)=>{
        console.log(value)
        setValue(evt.currentTarget.value);
    }
    return {
        value,
        onChange
    }
}
export default FormHoook;
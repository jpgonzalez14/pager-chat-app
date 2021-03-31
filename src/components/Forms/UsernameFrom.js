import React, {useState} from "react";
import InputAlert from "../Alert/InputAlert";

const ALERT_MESSAGES = {message:'Message cannot be empty', isDanger: false};
export default function UsernameFrom({label, setUsername, history}) {

    const [inputValue, setInputValue] = useState('');
    const [alert, setAlert] = useState(null);

    const handleChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
        if (e.target.value.trim().length > 0)
            setAlert(null)
    };

    const onSubmit = (e, inputValue) => {
        e.preventDefault();
        if (inputValue.trim().length === 0){
            setAlert(ALERT_MESSAGES)
        } else {
            setUsername(inputValue);
            history.push('/chat');
        }
    };

    return (
        <div>
            <label className="display-block mb-4">{label}</label>
            <input className="mb-40 px-4 round-border-8" type="text" placeholder="username" onChange={handleChange}
                   value={inputValue}/>
            {
                alert && <InputAlert alertMessage={alert.message} isDanger={alert.isDanger}/>
            }
            <button className="form-button" onClick={(e) => onSubmit(e, inputValue)}>Next</button>
        </div>
    )
};
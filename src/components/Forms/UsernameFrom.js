import React, {useState} from "react";

export default function UsernameFrom({label, setUsername, history}) {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    const onSubmit = (e, inputValue) => {
        e.preventDefault();
        setUsername(inputValue);
        history.push('/chat');
    };

    return (
        <div>
            <label className="display-block mb-4">{label}</label>
            <input className="mb-40 px-4 round-border-8" type="text" placeholder="username" onChange={handleChange}
                   value={inputValue}/>
            <button className="form-button" onClick={(e) => onSubmit(e, inputValue)}>Next</button>
        </div>
    )
};
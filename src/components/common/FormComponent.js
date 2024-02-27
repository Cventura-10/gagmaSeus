import React from 'react';
import useInput from './hooks/useInput';

function FormComponent() {
    // Validator function to check if the input is longer than 5 characters
    const validateInput = value => value.length > 5;

    const { value, handleChange, isValid } = useInput('', validateInput);

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            {!isValid && <p>The input must be longer than 5 characters.</p>}
        </div>
    );
}

export default FormComponent;

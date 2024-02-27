import { useState, useEffect } from 'react';

/**
 * A custom hook to manage a form input field.
 * 
 * @param {string} initialValue Initial value of the input field.
 * @param {function} validator Function to validate the input value.
 */
function useInput(initialValue, validator) {
    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        setIsValid(validator(value));
    }, [value, validator]);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return { value, handleChange, isValid };
}

export default useInput;

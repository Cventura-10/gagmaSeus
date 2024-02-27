import React, { useRef, useEffect } from 'react';

function InputFocus() {
    const inputElement = useRef(null);

    useEffect(() => {
        // Focus the input element
        inputElement.current.focus();
    }, []);

    return <input ref={inputElement} type="text" />;
}

export default InputFocus;

import React, { useRef } from 'react';

function InfoInput({ name, onChange, value, placeholder, inputRef }) {

    return (
        <input type="text" 
        name={name}
        onChange={onChange} 
        value={value} 
        placeholder={placeholder}
        ref={inputRef} />
    );
}

InfoInput.defaultProps = {
    ref: null
}

export default InfoInput;

// import { useState } from "react";

// function InfoInput({ placeholder }) {
//     const [ name, setName ] = useState("0");
//     const [ age, setAge ] = useState(0);
//     const [ address, setAddress ] = useState("0");

//     const handleInputChange = (e) => {
//         setName(e.target.value);
//         setAge(e.target.value);
//         setAddress(e.target.value);
//     }

//     return (
//         <>
//             <input type="text" placeholder={ placeholder } onChange={handleInputChange} value={name}/>
//         </>
//     );
// }

// export default InfoInput;
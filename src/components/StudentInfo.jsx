import React from 'react';

function StudentInfo({ title, text }) {
    return (
        <h1>{title}: {text}</h1>
    );
}

export default StudentInfo;


// import { use(
    // <h1> </h1>function StudentInfo({ title }) {
//     const [ name, setName] = useState("0");
//     const [ age, setAge] = useState("0");
//     const [ address, setAddress] = useState("0");

//     return (
//         <>
//             <h1>{ title } : </h1>
//         </>
//     );
   
// }

// export default StudentInfo;
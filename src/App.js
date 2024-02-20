import logo from './logo.svg';
import './App.css';
import StudentInfo from './components/StudentInfo';
import InfoInput from './components/InfoInput';
import { useEffect, useRef, useState } from 'react';
import InfoButtons from './components/InfoButtons';

function App() {
  const studentObj = {
    name: "",
    age: "",
    address: ""
  }

  const [ student, setStudent ] = useState(studentObj);
  const [ inputValues, setInputValues ] = useState(studentObj);

  const inputRef = {
    name: useRef(),
    age: useRef(),
    address: useRef()
  }

  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  // const [ refresh, settRefresh ] = useState(false);

  // useEffect(() => {
  //   if(refresh) {
  //     setInputValues(studentObj);
  //   }
  //   settRefresh(true);
  // }, [student]);

  /**
   *  js 객체 특징
   *  1. 키 값은 문자열이어도 된다.
   *  2. 변수의 문자열 값을 키 값으로 쓰고 싶을 때 대괄호[]로 묶어서 참조할 수 있다.
   *  3. 변수명만 입력하면 객체의 속성과 value로 한 번에 정의할 수 있다.
   */

  const handleInputChange = (e) => {

    const { name, value } = e.target;
      setInputValues({
        ...inputValues,
        [name]: value
      });

  }

  const handleOnOk = () => {
    new Promise( (resolve, reject) => {
      setStudent(inputValues);
      resolve();
    }).then(()=> {
      setInputValues(studentObj);
    });
  
    // switch(name) {
    //   case "name":
    //     setName(value);
    //     break;
    //   case "age":
    //     setAge(value);
    //     break;
    //   case "address":
    //     setAddress(value);
    //     break;
    //   default:
    // }

    // if(name === "name") {
    //   inputValues.name =  value;
    // } else if(name === "age") {
    //   inputValues.age =  value;
    // } else {
    //   inputValues.address =  value;
    // }
  }

  const handleOnClean = () => {
    setStudent(studentObj);
  }



  return (
    <>
      <StudentInfo title="이름" text={student.name}/>
      <StudentInfo title="나이" text={student.age}/>
      <StudentInfo title="주소" text={student.address}/>

      <InfoInput 
        name={"name"} 
        onChange={handleInputChange}
        value={inputValues.name}
        placeholder='이름'
        inputRef={inputRef.name}
      />

      <InfoInput  
        name='age' 
        onChange={handleInputChange} 
        value={inputValues.age}
        placeholder='나이'
        inputRef={inputRef.age}
      />

      <InfoInput  
        name='address' 
        onChange={handleInputChange}
        value={inputValues.address}
        placeholder='주소'
        inputRef={inputRef.address}
      />

      <InfoButtons>
        <button onClick={handleOnOk}>추가</button>
        <button onClick={handleOnClean}>비우기</button>
      </InfoButtons>

      {/* <h1>이름 : {student.name}</h1>
        <h1>나이 : {student.age}</h1>
        <h1>주소 : {student.address}</h1> */}

      {/* <input type="text" 
        name='name' 
        onChange={handleInputChange} 
        value={inputValues.name} 
        placeholder='이름'
      /> */}
    </>
  );
}

export default App;

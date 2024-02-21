import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage2(props) {
    // const student = {
    //     id: 0,
    //     name: "",
    //     score: 0
    // }

    const [ studentList, setStudentList ] = useState([]);
    const [ inputValue, setInputValue ] = useState({
        id: "",
        name: "",
        score: 0
    });

    const [ updateId, setUpdateId ] = useState(0);
    const staticId = useRef(0);

    const [ scoreData, SetScoreData ] = useState({
        total: 0,
        avg: 0
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    }

    useEffect(() => {
        let sumScore = 0;
        let avgScore = 0;
        for(let i = 0; i < studentList.length; i++){
            sumScore += parseInt(studentList[i].score);
            scoreData.total = sumScore
            avgScore = (sumScore / studentList.length).toFixed(2);
            scoreData.avg = avgScore;
        }
        console.log(studentList);}
        , [studentList]);

    const handleAddClick = () => {
        // console.log(staticId);

        const student = {
            ...inputValue,
            id: staticId.current += 1
        };
        setStudentList([...studentList, student]);
    }

    const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter(student => student.id !== id)]);
    }

    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0]);
    }

    const handleUpdateSubmitClick = () => {
        const findIndex = studentList.indexOf(studentList.filter(student => student.id === updateId)[0]);
        const updateStudentList = [...studentList];

        updateStudentList[findIndex] = inputValue;
        setStudentList(updateStudentList);
        handleCancelClick();
    }

    const handleCancelClick = () => {
        setUpdateId(0);
        setInputValue({
            id: "",
            name: "",
            score: ""
        });
    }

    return (
        <div>
            <div>
                <input type="text" name='id' disabled={true} value={inputValue.id} placeholder='ID' />
                <input type="text" name='name' onChange={handleInputChange} value={inputValue.name} placeholder='이름' />
                <input type="text" name='score' onChange={handleInputChange} value={inputValue.score} placeholder='점수' />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>이름</th>
                    <th>점수</th>
                </thead>
                <tbody>
                    {studentList.map(student => {
                        return <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.score}</td>
                            <td>
                                {
                                    updateId !== student.id
                                    ? <button onClick={() => {handleUpdateClick(student.id);}}>수정</button>
                                    : <button onClick={handleUpdateSubmitClick}>확인</button>
                                }
                            </td>
                            <td>
                                {
                                    updateId !== student.id
                                    ? <button onClick={() => {handleDeleteClick(student.id);}}>삭제</button>
                                    : <button onClick={handleCancelClick}>취소</button>
                                }
                            </td>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}>{scoreData.total}</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}>{scoreData.avg}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StudentArrayPage2;
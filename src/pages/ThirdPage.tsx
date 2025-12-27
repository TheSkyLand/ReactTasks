import { ALL } from "dns";
import React from "react";
import { useState } from "react";
import { ChangeEventHandler } from "react";

export default function ThirdPage() {
    const [a, setA] = useState('')
    const [testArray, setTestArray] = useState([''])
    const [arrayEl, setArrayEl] = useState('');
    const [countNum, setCountNum] = useState(0);

    function addEl() {
        testArray.splice(1, 0, arrayEl)
        console.log(testArray)
    }
    function countA() {
        const count = testArray.filter(e => e === a).length //простая функция сортировки
        setCountNum(count); 
        console.log(countNum)
    }
    return (

        <div style={{display:"flex", flexDirection:"column", width:"300px"}}>
            <span>
                введите элемент который надо добавить в массив
                <input type="number" style={{ border: "1px black solid" }} value={arrayEl} onChange={(e) => setArrayEl(e.target.value)} />
                <button style={{ border: "1px black solid" }} onClick={addEl}>добавить</button>
            </span>
            <span>
                введите а
                <input type="number" style={{ border: "1px black solid" }} value={a} onChange={(e) => setA(e.target.value)} />
            </span>


            <button style={{ border: "1px black solid" }} onClick={countA}>посчитать</button>
            <ul>
                list
                <li>
                    {testArray}
                </li>
            </ul>
            <span>количество заходов:{countNum}</span>
        </div>


    )

}

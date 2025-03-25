import React from "react";
import { useState } from "react";
import { ChangeEventHandler } from "react";


export default function ThirdPage() {
    const [ArrayEl, setArrayEl] = useState('0')
    const [Array, setArray] = useState([])
    const [A, setA] = useState('0')
    let EnterCount = 0;
    for (let i = 0; i < Array.length; i++) {
        const ArrayEl = Array[i];
        Array.length = 10;
    }


    return (
            <div style={{ display: "flexbox"}}>
                заполните массив:<input type="number" value={ArrayEl} onChange={e => setArrayEl(e.target.value)} style={{ border: "solid 5px red" }}></input>
                <button>добавить элемент в массив</button>
                введите a:<input value={A} type="number" style={{ border: "solid 5px red" }}></input>
                <text>количество заходов:{0}</text>
                <ul>
                </ul>
            </div>
    )
}
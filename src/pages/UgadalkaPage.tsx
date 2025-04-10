import React from "react";
import { Button } from "@mui/material";


function generateArray(arr: number[]) {
    for (let i = 1; i < 101; i++) {
        arr.push(i)
    }
    console.log(arr)
}


const UgadalkaPage = () => {
    const [answer, setAnswer] = React.useState([50])
    const [start, setStart] = React.useState([1])
    const [end, setEnd] = React.useState([100])
    const [arr, setArr] = React.useState([generateArray])
    const [predict, setPredict] = React.useState(`${arr}`)









    function selectButton(key: number) {
        switch (key) {
            case 1:

                console.log(arr)
                break;
            case -1:
                console.log(arr)
                break;
            default:

                console.log(arr)
                break;
        }
    }


    return (
        <div onChange={(e) => setPredict}>
            ваше число {predict}?
            <span> </span>
            <Button onClick={() => selectButton(0)}>Да, это моё число </Button>
            <Button onClick={() => selectButton(1)}> Нет,  моё число меньше</Button>
            <Button onClick={() => selectButton(-1)}>Нет,  моё число больше </Button>
        </div>
    )
}


export default UgadalkaPage
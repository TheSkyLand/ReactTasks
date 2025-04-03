import React from "react";
import { Button } from "@mui/material";




const UgadalkaPage = () => {
    const [answer, setAnswer] = React.useState([50])
    const [start, setStart] = React.useState([1])
    const [end, setEnd] = React.useState([100])
    const [predict, setPredict] = React.useState("ваше число `${}`")
    const [arr, setArr] = React.useState([])
    function generateArray()
    {
        for (let i = 1; i > 101; i++) {
            let arr = []
            arr.push(i)
            console.log(arr)
        }
    }






    function selectButton(key: number) {
        switch (key) {
            case 1:

                console.log("2")
                break;
            case -1:
                console.log("1")
                break;
            default:
                console.log("3")
                break;
        }
    }


    return (
        <div>
            ваше число {predict}?
            <span> </span>
            <Button onClick={() => selectButton(0)}>Да, это моё число </Button>
            <Button onClick={() => selectButton(1)}> Нет,  моё число меньше</Button>
            <Button onClick={() => selectButton(-1)}>Нет,  моё число больше </Button>
        </div>
    )
}


export default UgadalkaPage
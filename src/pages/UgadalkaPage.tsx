import { kMaxLength } from "buffer";
import React from "react";
import { arrayBuffer } from "stream/consumers";


const UgadalkaPage = () => {
    const [inputNumber, setInputNumber] = React.useState(0)
    const [arr, setArr] = React.useState([0])

    for (let i = 0; i < 100; i++) {
        arr[i] = i + 1
    }

    function changeArr(event: any) {
        setArr(event.target.value)
    }

    function smaller() {
        Math.round(arr.length /= 2)
       
        console.log(arr)
    }
    function bigger() {
        for(let i = 50; i < 100; i++){
            arr[i] = i + 1

        }

        console.log(arr)
    }
    function endgame() {

    }
    return (<div>

        <span onChange={(e) => changeArr(e)}> ваше число {Math.max.apply(null, arr)} ?
        </span>
        <div style={{display:"flex", width:"100px",}}>
            <button style={{border:"5px black solid" }} onClick={endgame}>
                да
            </button>
            <button style={{border:"5px black solid" }} onClick={bigger} >
                нет оно БОЛЬШЕ
            </button>
            <button style={{border:"5px black solid"}} onClick={smaller} >
                нет оно МЕНЬШЕ
            </button>

        </div>

    </div>)
}


export default UgadalkaPage
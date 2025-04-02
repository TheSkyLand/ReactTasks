import { kMaxLength } from "buffer";
import React from "react";


const UgadalkaPage = () => {
    const [inputNumber, setInputNumber] = React.useState(0)

    let arr = []
    for (let i = 0; i < 101; i++) {
        arr[i] = i
    }


    function smaller() {
        for(let i = 0; i < 50; i++)
        {
            arr[i] = i
        }
        console.log(arr.length)
    }
    function bigger() {
        for(let i = 50; i < 101; i++)
            {
                arr.splice(i)
            }
        console.log(arr.length)
    }
    return (<div>
        <span> ваше число {Math.max.apply(null, arr)}?
        </span>
        <div>
            <button >
                да
            </button>
            <button onClick={bigger}>
                нет оно больше
            </button>
            <button onClick={smaller}>
                нет оно меньше
            </button>

        </div>

    </div>)
}


export default UgadalkaPage
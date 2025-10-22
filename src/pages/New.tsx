import { Button, Input, TextField } from "@mui/material"
import React from "react";

const Task1 = () => {
    const [num, setNum] = React.useState();
    const [seqEl, setSeqEl] = React.useState()
    const [seq, setSeq] = React.useState([4, 8, 2, 6, 2, 10, 6, 29, 58, 9]);
    let testArr: number[] = [];

    function changeNum(event: any) {
        setNum(event.target.value)
    }
    function changeSubSeqEl(event: any) {
        setSeqEl(event.target.value)
    }
    //executes the main function of the code
    function Submit(arr: any) {
        debugger

        for (let i = 1; i < seq.length; i++) {
            for (let j = 0; j < seq.length; j++) {
                if (seq[j] < seq[i + 1] && seq.length + 1 > seq.length) {
                    seq.splice(i, 1)
                }
            }
        }


        console.log(testArr)
        console.log(seq)
        console.log(`asfgsaga`)

    }
    //adds an element in array
    function Add(arr: any, seqEl: Number) {
        arr.push(seqEl)
        console.log(arr)
        return arr
    }
    //clears the array
    function Clear(arr: any) {
        arr.length = 0
    }


    return (
        <div>
            <span>
                input num
            </span>
            <TextField
                value={num}
                onInput={(e) => changeNum(e)}
            />
            <span>
                input subsequence
            </span>
            <TextField
                value={seqEl}
                onInput={(e) => changeSubSeqEl(e)}
            />
            <span>
                add
            </span>
            <Button
                onClick={(e) => Add(seq, Number(seqEl))}
            >
                Add
            </Button>

            <Button
                onClick={() => Submit(seq)}
            >
                Submit
            </Button>
            <Button
                onClick={() => Clear(seq)}
            >
                Clear
            </Button>
        </div>
    )
}

export default Task1

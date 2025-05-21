import { Box, Button, Input, TextField, Typography } from "@mui/material"
import React, { useState } from "react"


const TestPage = () => {
    const [arrOut, setArrOut] = useState([''])
    const [inputEl, setInputEl] = React.useState('')
    function sortfunc() {
        for (let i = 0; i < arrOut.length; i++) {
            for (let j = 0; j < arrOut.length - i; j++) {
                if (arrOut[j] > arrOut[j + 1]) {
                    [arrOut[j], arrOut[j + 1]] = [arrOut[j + 1], arrOut[j]]
                }
            }
        }
        
        console.log(arrOut)
    }

    function changeInputEl(event: any) {
        setInputEl(event.target.value)
    }
    function addEl() {
        arrOut.splice(1, 0, inputEl)
        console.log(`${arrOut}`)
    }

    return (
        <Box>
            <Typography>{arrOut}</Typography>
            <Input value={inputEl} onInput={(e) => changeInputEl(e)}
            />
            <Button onClick={addEl}>    
                add
            </Button>
            <Button onClick={() => sortfunc()}>
                sort
            </Button>
        </Box>
    )
}

export default TestPage

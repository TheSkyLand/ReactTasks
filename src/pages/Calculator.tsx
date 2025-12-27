import { Box, Button } from "@mui/material"
import CalculatorNumpad from "../components/CalculatorNumpad"
import React from "react"

// Work in progress/Заброшено(не перевод)
const Calculator = () => {
    const [InputNum, setInput] = React.useState('')

    let p = []
    for (let i = 0; i < 10; i++) {
        p.push(i) // массив для чисел numpad
    }

    const backNum = (value: Number) => {
        setInput(InputNum + value.toString())
    }


    return (
        <Box>
        {p.map((index, item) => (
                <CalculatorNumpad
                num={index}
                back={backNum}
                />
            ))}
        </Box>


    )
}

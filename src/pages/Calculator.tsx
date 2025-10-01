import { Box, Button } from "@mui/material"
import CalculatorNumpad from "../components/CalculatorNumpad"
import React from "react"


const Calculator = () => {
    const [InputNum, setInput] = React.useState('')

    let p = []
    for (let i = 0; i < 10; i++) {
        p.push(i)
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
                >

                </CalculatorNumpad>
            ))}
        </Box>


    )
}
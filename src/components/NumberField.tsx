import { Box, Button, Input, TextField, Typography } from "@mui/material"


interface NumberFieldProps {
    inputStr: string
}

const NumberField = (props: NumberFieldProps) => {
    return <TextField
        value={props.inputStr}
    />

}


export default NumberField
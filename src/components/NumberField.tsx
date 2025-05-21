import { Box, Button, Input, TextField, Typography } from "@mui/material"


interface NumberFieldProps {
    InputNum: string
}

const NumberField = (props: NumberFieldProps) => {



    return <TextField
        value={InputNum}
    />

}


export default NumberField
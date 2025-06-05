import { Box, Button, Input, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import React from "react"
import GotMean from "../components/GotMean"


const MeanPage = () => {
    const [array, setArray] = React.useState([])
    const [inputEl, setInputEl] = React.useState(0)
    let mean = 0
    function addItem(arr: any, inputEl: number) {
        arr.push(inputEl)
        console.log(arr)
        return arr
    }


    function gotMean(arr: any) {
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            count++
            mean += arr[i]
        }
        mean /= count
        console.log(mean)
    }



    function changeInputEl(event: any) {
        setInputEl(parseInt(event.target.value))
    }

    return <Box>
        <TextField type="number" value={inputEl} onChange={(e) => changeInputEl(e)} />
        <List>
            <ListItem>
                <ListItemText>{array}</ListItemText>
            </ListItem>
        </List>
        <Button onClick={(e) => addItem(array, inputEl)}>add</Button>
        <Button onClick={(e) => gotMean(array)}>got mean</Button>
        <Typography>{mean}</Typography>
    </Box>
}



export default MeanPage
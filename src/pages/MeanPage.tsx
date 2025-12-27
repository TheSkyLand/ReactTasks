import { Box, Button, Input, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import React from "react"
import GotMean from "../components/GotMean"


const MeanPage = () => {
    const [array, setArray] = React.useState([])
    const [inputEl, setInputEl] = React.useState(0)
    const [mean, setMean] = React.useState(0)
    function addItem(arr: any, inputEl: number) {
        arr.push(inputEl)
        console.log(arr)
        return arr
    }


    function gotMean(arr: any) {
        let count = 0 // количество чисел
        let local = mean; // не помню для чего
        for (let i = 0; i < arr.length; i++) {
            count++ // за каждое число находящееся в в массиве прибавляет 1 к количеству чисел
            local += arr[i] // после всего записывает в сумму число
        }
        local /= count // делит сумму на количество
        console.log(mean)
        setMean(local);
    }



    function changeInputEl(event: any) {
        setInputEl(parseInt(event.target.value)) // для обновления usestate переменных
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

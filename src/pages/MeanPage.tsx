import { Box, Button, Input, List, ListItem, ListItemText, Typography } from "@mui/material"
import React from "react"
import GotMean from "../components/GotMean"


const MeanPage = () => {
    const [array, setArray] = React.useState([''])
    //const [mean, setMean] = React.useState([''])
    const [inputEl, setInputEl] = React.useState('')
    function addItem(array: any) {
        array.push(inputEl)
    }

    /*
    function gotMean(arr: any) {
        for (let i = 0; i < arr.length; i++) {
            mean + array[i]
        }
    }
*/
    return <Box>
        <Input value={inputEl} onInput={() => setInputEl} />
        <List>
            <ListItem>
                <ListItemText>{array}</ListItemText>
            </ListItem>
        </List>
        <Button onClick={addItem}>add</Button>
        {/*<Button onClick={() => gotMean(array)}>got mean</Button>*/}
        {/*<Typography>{mean}</Typography>*/}
    </Box>
}



export default MeanPage
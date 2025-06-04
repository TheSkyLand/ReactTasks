import { Box, Button, Input, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import React from "react";
import { Simulate } from "react-dom/test-utils";

const Cafe = () => {
    const [money, setMoney] = React.useState('')
    const [days, setDays] = React.useState([''])
    const [coupons, setCoupons] = React.useState([''])
    let array = [15, 37, 60, 101, 12, 58, 102, 3, 100];
    let y: any = []
    let p: any = []
    let count = 0
    let summ = 0


    function changeMoney(event: any) {
        setMoney(event.target.value.toString())
    }

    function changeDays(event: any) {
        setDays(event.target.value)
    }


    function addEl(event: any) {
        days.push(money)
        console.log(days)
    }

    function testTest(arr: any) {

        for (let i = 0; i < arr.length; i++) {
            if (Number(arr[i]) >= 100) {
                y.push(i);
                count++
                coupons.push(arr)
            }
        }
        while (y.length > 1) {
            let maxEl = arr[y[0] + 1];
            let maxInd = y[0] + 1;
            for (let j = y[0] + 1; j < y[1]; j++) {
                if (maxEl < arr[j]) {
                    maxEl = arr[j];
                    maxInd = j;
                }
            }
            p.push(maxInd);
            y.splice(0, 1);

            for (let i = p; i < arr.length; i++) {
                debugger
                summ += arr[i]
            }
        }
        console.log(`дни: ${arr}`)
        console.log(`Дни в которые использованы купоны: ${p}`)
        console.log(`дни когда купон получен: ${y}`)
        console.log(`Количество купонов: ${count}`)
        console.log(`Сумма ${summ}`)

    }
    return (
        <Box>

            <span>vvedite chislo</span>
            <Input value={money} onInput={(e) => changeMoney(e)} />

            <ListItem value={days} onChange={changeDays}>
                <ListItemText>{days}</ListItemText>
            </ListItem>


            <Button style={{ border: "2px black solid" }} onClick={(e) => addEl(e)}>add</Button>
            <Button onClick={() => testTest(days)}>test </Button>
        </Box>
    )
}

export default Cafe

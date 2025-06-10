import { Box, Button, Input, Modal, TextField, Typography } from "@mui/material"
import React, { Component } from "react"
import "./mainstyles/styles.css"
import Numpad from "../components/Numpad"
import Products from "../components/Products"
import NumberField from "../components/NumberField"
import { ProductsData } from "../helpers/ProductsData"
import ModalEl from "../components/ModalEl"


const SwitchPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [output, setOutput] = React.useState({ name: '', img: '', code: 0, cost: 0 })
    let p = [];

    for (let i = 0; i < 10; i++) {
        p.push(i);
    }

    const [InputNum, setInput] = React.useState('');

    const backNum = (value: number) => {
        setInput(InputNum + value.toString());
    }

    const data = () => {
        ProductsData.find(function (item) {

            if (item.code.toString() === InputNum) {
                setOpen(true)
                setOutput({ name: `${item.name}`, img: ' ', code: item.code, cost: item.cost })
            }
        })
    }

    return (<div>
        <Typography className="main-title">Автомат симулятор</Typography>
        <Typography>окно с товарами</Typography>
        <ModalEl
            open={open}
            handleClose={() => setOpen(!open)}
            output={output}
        />
        <NumberField
            inputStr={InputNum}
        />
        <Box sx={{
            display: "block",
            width: "250px"
        }}>
            {p.map((item, index) => (
                <Numpad
                    num={index}
                    back={backNum}
                />
            ))}
            <Button
                onClick={() => data()}
                sx={{
                    color: "green"
                }}
            >Ok</Button>
            <Button
                onClick={() => setInput('')}
                sx={{
                    color: "red"
                }}
            >Clear</Button>
        </Box>
        <Box sx={{
            width: "1000px",
            height: "1000px",
            border: "black solid 1px"
        }}>
            {ProductsData.map((item, key) => (
                <Products
                    image={`${process.env.PUBLIC_URL + item.img}`}
                    cost={item.cost}
                    code={item.code}
                />
            ))}
        </Box>
    </div>
    )
}

export default SwitchPage
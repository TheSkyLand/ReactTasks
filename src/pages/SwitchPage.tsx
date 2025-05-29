import { Box, Button, Input, Modal, TextField, Typography } from "@mui/material"
import React, { Component } from "react"
import "./mainstyles/styles.css"
import Numpad from "../components/Numpad"
import Products from "../components/Products"
import NumberField from "../components/NumberField"
import { ProductsData } from "../helpers/ProductsData"
import { clear } from "@testing-library/user-event/dist/clear"

const SwitchPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let output = [];
    let p = [];

    for (let i = 0; i < 10; i++) {
        p.push(i);
    }

    const [InputNum, setInput] = React.useState('');

    const backNum = (value: number) => {
        setInput(InputNum + value.toString());
    }

    function Data() {
        ProductsData.find(function (item) {

            if (item.code.toString() === InputNum) {
                handleOpen()
                return (
                    console.log(item)
                )
            }
        })
    }

    return (<div>
        <Typography className="main-title">Автомат симулятор</Typography>
        <Typography>окно с товарами</Typography>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}
            >
                <Typography></Typography>
            </Box>
        </Modal>
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
                onClick={() => Data()}
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
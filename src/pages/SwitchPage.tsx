import { Box, Button, Input, Modal, TextField, Typography } from "@mui/material"
import React, { Component } from "react"
import "./mainstyles/styles.css"
import Products from "../components/Products"
import NumberField from "../components/NumberField"
import { ProductsData } from "../helpers/ProductsData"
import ModalEl from "../components/ModalEl"
import Numpad from "../components/SwitchNumpad"


const SwitchPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true); // открыть/закрыть модальное окно
    const handleClose = () => setOpen(false);

    const [output, setOutput] = React.useState({ name: '', img: '', code: 0, cost: 0 }) // переменная для вывода
    let p = [];

    for (let i = 0; i < 10; i++) {
        p.push(i); //заполняем массив для кнопок 1-9
    }

    const [InputNum, setInput] = React.useState(''); // переменная для ввода

    const backNum = (value: number) => {
        setInput(InputNum + value.toString()); // функция которая записывает в InputNum цифры из компонента Numpad
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

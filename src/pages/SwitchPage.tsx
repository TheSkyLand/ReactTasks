import { Box, Button, Input, TextField, Typography } from "@mui/material"
import React, { Component } from "react"
import "./mainstyles/styles.css"
import Numpad from "../components/Numpad"
import Products from "../components/Products"
import NumberField from "../components/NumberField"
import { ProductsData } from "../helpers/ProductsData"
import { clear } from "@testing-library/user-event/dist/clear"


const SwitchPage = () => {

    let p = [];

    for (let i = 0; i < 10; i++) {
        p.push(i);
    }

    const [InputNum, setInput] = React.useState('');

    const backNum = (value: number) => {
        setInput(InputNum + value.toString());
    }

    
    function confirm() {
        const ExitData = ProductsData.filter(code => backNum)
        
        return alert(ExitData)
    }
    
   console.log(ProductsData)

    return (
        <div className="main">
            <h1 className="main-title">Автомат симулятор</h1>
            <div>
                <Typography>окно с товарами</Typography>

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
                    onClick={() => confirm()}

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
            <div className="main-numpad">

            </div>
        </div>


    )
}

export default SwitchPage
import { Box, Button, Input, TextField } from "@mui/material"
import React, { Component } from "react"
import "./mainstyles/styles.css"
import Numpad from "../components/Numpad"
import Products from "../components/Products"
import { ProductsData } from "../helpers/ProductsData"


const SwitchPage = () => {

    let p = [];

    for (let i = 0; i < 10; i++) {
        p.push(i);
    }
    const backNum = (value: number) => {
        console.log(value);
    }

    return (
        <div className="main">
            <h1 className="main-title">Автомат симулятор 0.2</h1>
            <div>
                <span>окно с товарами</span>
                <TextField
                value={{backNum}}
                >

                </TextField>
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
                    sx={{
                        color:"green"
                    }}
                    >Ok</Button>
                    <Button
                    
                    sx={{
                        color:"red"
                    }}
                    >Clear</Button>
                </Box>
            </div>
            <div className="main-numpad">

            </div>
        </div>


    )
}

export default SwitchPage
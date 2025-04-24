import { Button, Input } from "@mui/material"
import { deflate } from "zlib"
import React, { Component } from "react"
import "./mainstyles/styles.css"
import Numpad from "../components/Numpad"
import InputField from "../components/InputField"

let p = [];

for (let i = 0; i < 10; i++) {
    p.push(i);
}

const SwitchPage = () => {

    const backNum = (value: number) => {
        console.log(value);
    }

    return (
        <div className="main">
            <h1 className="main-title">Автомат симулятор 0.2</h1>
            <InputField >
            </InputField>
            <div>
                <span>окно с товарами</span>
                <div className="main-window">
                    {p.map((item, index) => (
                        <Numpad
                            num={index}
                            back={backNum}
                        />
                    ))}
                </div>
            </div>
            <div className="main-numpad">

            </div>
        </div>


    )
}

export default SwitchPage
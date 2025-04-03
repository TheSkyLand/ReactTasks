import { Button, Input } from "@mui/material"
import { deflate } from "zlib"
import React, { Component } from "react"
import Avtomat from "../components/Avotmat"

const SwitchPage = () => {
    const [inputNum, setInputNum] = React.useState(0)
    const AvtomatItems = [{
        id: 1, name: 'cola', price: 100
    },
    {
        id: 2, name: 'fant', price: 200
    },
    {
        id: 3, name: 'fant', price: 200
    }
    ]
    const avtomatList = AvtomatItems.map(ident => <li>
        <b>{ident.id}</b>
        <b>{ident.name}</b>
        <b>{ident.price}</b>
    </li>)


    function changeInput(event: any) {
        setInputNum(event.target.value)
    }

    function addNum(numPut: number) {
        let num = numPut
        setInputNum(inputNum + num)
    }

    function switchfunc(inputNum: number) {
        /*
        for (let i = 0; i < Array.length; i++ )
        {
            AvtomatItems[i]
        }
*/
            switch (inputNum) {
                case 1:
                    console.log(AvtomatItems[0])
                    break;
                case 2:
                    console.log(AvtomatItems[1])
                    break;
                case 3:
                    console.log(AvtomatItems[2])
                    break;
                default:
                    break;
            }

    }

    return (
        <div style={{width:"100%"}}>
            <h1>Торговый автомат симулятор</h1>
            <div>

            </div>
            <span>{inputNum}</span>
            <div>
                <Input type="number" id="expamle" value={inputNum} onInput={(e) => changeInput(e)} />
            </div>
            <div style={{ width: "250px" }}>
                <div>
                    <li>
                        <ul>
                            {avtomatList}
                        </ul>
                    </li>
                </div>

<span></span>
                <div style={{display:"none"}}>
                    <Avtomat code={1} name="coca-cola" price={100} />
                    <Avtomat code={2} name="coca-cola" price={100} />
                    <Avtomat code={3} name="coca-cola" price={100} />
                    <Avtomat code={4} name="fanta" price={100} />
                    <Avtomat code={5} name="pepsi" price={100} />
                    <Avtomat code={6} name="suhariki" price={100} />
                </div>

                <div>
                    <Button onClick={(e) => addNum(1)}>1</Button>
                    <Button onClick={(e) => addNum(2)}>2</Button>
                    <Button onClick={(e) => addNum(3)}>3</Button>
                    <Button onClick={(e) => addNum(4)}>4</Button>
                    <Button onClick={(e) => addNum(5)}>5</Button>
                    <Button onClick={(e) => addNum(6)}>6</Button>
                    <Button onClick={(e) => addNum(7)}>7</Button>
                    <Button onClick={(e) => addNum(8)}>8</Button>
                    <Button onClick={(e) => addNum(9)}>9</Button>
                    <Button onClick={(e) => addNum(0)}>0</Button>
                </div>
                <Button onClick={(e) => switchfunc(inputNum)}> ok </Button>

                <Button onClick={(e) => setInputNum(0)}>clear</Button>

            </div>
        </div>

    )
}

export default SwitchPage
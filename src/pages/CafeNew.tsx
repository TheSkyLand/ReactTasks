import React from "react";

const CafeNew = () => {
    const [inputArr, setInputArr] = React.useState([35, 40, 101, 59, 63, 101, 59, 63])

    const [input, setInput] = React.useState(0)

    const [sum, setSum] = React.useState(0);

    let p: any = [] //массив в котором находятся дни с тратой меньше 101

    let b: any = []



    let count = 0; //количество купонов

    let coupons = 0;

    let max = inputArr[0]; //создаём переменную для хранения максимального числа

    const printArr = () => {
        for (let i = 0; i < inputArr.length; i++) {
            console.log(inputArr[i])
        }
    }

    const addEl = (event: any) => {
        const newList = [...inputArr]
        Number(newList.push(event))
        setInputArr(newList)
        printArr()
    }
    const changeEl = (event: any) => {
        setInput(
            Number(event.target.value)
        )
    }
    const changeInput = (event: any) => {
        setInput(event.target.value)
    }
    const rmEl = (inp: number) => {
        const newList = [...inputArr]
        Number(newList.splice(inp, 1))
        setInputArr(newList)
        printArr()
    }
    const test = (arr: any) => {
        let local = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 100) {
                count++
                coupons++
                b.push(i)
            }
            if (max < arr[i] && arr[i] < 100) {
                max = arr[i]
            }
        }
        while (b.length > 1) {
            max = arr[b[0] + 1];
            for (let i = b[0] + 1; i < b[1]; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                }
            }
            b.pop()
        }
        if (b.length <= 1) {
            for (let i = 0; i < arr.length; i++) {
                if (max < arr[i] && arr[i] < 100) {
                    max = arr[i]
                }
            }
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== max) {
                    p.push(arr[i])
                }
                if (arr[i] === max && coupons > 0) {
                    coupons--
                }
            }
        }
        for (let i = 0; i < p.length; i++) {
            local += p[i]
        }

        setSum(local)

        console.log("дни с использованием купона: ", p)

        console.log("день в который был использован купон: ", max)

        console.log("количество купонов получено: ", count)

        console.log("количество купонов осталось: ", coupons)

        console.log("неделя: ", arr)

        console.log("сумма ", sum)
    }

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                paddingTop: 300,
                width: "100%"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: 300,
                    height: "100%",
                    border: "1px solid black",
                    borderRadius: 50,
                    padding: 25,
                    marginRight: 10
                }}
            >
                <ul>{inputArr.map((index, key) => (
                    <li
                        style={{
                            width: "auto",
                            height: 40
                        }}
                    >
                        <input
                            onInput={(e) => changeEl(e)}
                            value={index}
                        ></input>
                        <button
                            style={{
                                width: 30,
                                height: 30,
                                border: "1px black solid",
                                borderRadius: 50
                            }}
                            onClick={() => rmEl(key)}
                        >X</button>
                    </li>
                ))}
                </ul>

                <div
                    style={{
                        width: "100%",
                        height: "300",
                        flexWrap: "wrap",
                        alignContent: "center",
                        justifyContent: "center",
                        margin: 5,

                    }}
                >
                    <input

                    onInput={(e) => changeInput(e)}
                    value={input}
                        style={{
                            border: "1px solid black",
                            margin: 5
                        }}
                    />
                    <button
                    onClick={() => addEl(input)}
                        style={{
                            border: "1px solid black",
                            margin: 5
                        }}
                    >Add Number</button>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    width: 300,
                    height: 300,
                    border: "1px solid black",
                    justifyContent: "center",
                    borderRadius: 50
                }}
            >
                <button
                    style={{
                        width: "100%",
                        height: "100%",

                    }}
                    onClick={() => test(inputArr)}
                >
                    Submit
                </button>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 300,
                    height: 150,
                    border: "1px solid black",
                    justifyContent: "center",
                    borderRadius: 50,
                    marginLeft: 10,
                    alignItems: "center"
                }}
            >
                <span>Минимальная сумма: {sum}</span>
                <span>Осталось купонов: {coupons}</span>
                <span>Купонов получено: {count}</span>
                <span>Количество дней: {inputArr.length}</span>
            </div>
        </div>
    )
}

export default CafeNew

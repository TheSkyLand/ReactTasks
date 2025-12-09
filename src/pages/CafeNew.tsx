import React from "react";

const CafeNew = () => {
    const [inputArr, setInputArr] = React.useState([1, 2, 101, 5, 6, 101, 101, 3, 101])

    const [input, setInput] = React.useState(0)

    const [arrEl, setArrel] = React.useState(0)

    const [sum, setSum] = React.useState(0);

    const [count, setCount] = React.useState(0); //количество купонов

    const [coupons, setCoupons] = React.useState(0);

    let p: any = [] //массив в котором находятся дни с тратой меньше 101

    let b: any = []

    let max = inputArr[0]; //создаём переменную для хранения максимального числа

    const addEl = (event: any) => {
        const newList = [...inputArr]
        Number(newList.push(event))
        setInputArr(newList)
    }
    const changeEl = (inp: any, event: any) => {
        const newList = [...inputArr]
        Number(newList[inp] = Number(event?.target.value))
        setInputArr(newList)
    }
    const changeInput = (event: any) => {
        const newList = [...inputArr]
        setInput(Number(event.target.value))
        setInputArr(newList)
    }
    const removeEl = (inp: number) => {
        const newList = [...inputArr]
        Number(newList.splice(inp, 1))
        setInputArr(newList)
        test(newList)
    }
    const test = (arr: any) => {
        debugger
        let sumNegate = 0;

        let sum = 0;

        let localCount = 0;

        let localCoupons = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
            if (arr[i] >= 100) {
                localCoupons++
                localCount++
                b.push(i)
            }

        }
        while (b.length > 1) {
            max = arr[b[0] + 1];
            for (let i = b[0] + 1; i < b[1]; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                }
                if (max < 100)
                {
                    localCoupons--
                    sumNegate += max
                }
            }
            b.splice(0, 1)
        }
        sum -= sumNegate

        setSum(sum)

        setCount(localCount)

        setCoupons(localCoupons)
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
                            type="number"
                            onChange={(e) => changeEl(key, e)}
                            value={index}
                        />
                        <button
                            style={{
                                width: 30,
                                height: 30,
                                border: "1px black solid",
                                borderRadius: 50
                            }}
                            onClick={() => removeEl(key)}
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

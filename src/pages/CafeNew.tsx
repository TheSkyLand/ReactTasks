import React from "react";

const CafeNew = () => {
    let arr = [35, 40, 101, 59, 63, 101, 59, 63];

    const [inputArr, setInputArr] = React.useState()



    let p: any = [] //массив в котором находятся дни с тратой меньше 101

    let b: any = []

    let sum = 0;

    let count = 0; //количество купонов

    let coupons = 0;

    let max = arr[0]; //создаём переменную для хранения максимального числа

    const addEl = (inp: number) =>
    {

    }

    const test = (arr: any) => {
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

        debugger
        while (b.length > 1) {
            max = arr[b[0] + 1];
            let maxindex = b[0] + 1
            for (let i = b[0] + 1; i < b[1]; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                    maxindex = i;
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
            sum += p[i]
        }

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
                }}
            >
                <ul>{arr.map((index) => (
                    <li>
                        <input
                        value={index}
                        ></input>
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
                        margin: 5
                    }}
                >
                    <input
                        style={{
                            border: "1px solid black",
                            margin: 5
                        }}
                    />
                    <button
                        style={{
                            border: "1px solid black",
                            margin: 5
                        }}
                    >Add Number</button>
                    <button
                        style={{
                            border: "1px solid black",
                            margin: 5
                        }}
                    >Remove Number</button>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    width: 300,
                    height: 300,
                    border: "1px solid black",
                    justifyContent: "center",
                }}
            >
                <button
                    onClick={() => test(arr)}
                >
                    Submit
                </button>

            </div>
        </div>
    )
}

export default CafeNew

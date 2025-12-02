import React from "react";

const CafeNew = () => {
    const [arr, setArr] = React.useState([5, 35, 40, 101, 59, 63])

    let p: any = [] //массив в котором находятся купоны больше 101

    let b: any = []

    let sum = 0;

    let count = 0; //количество купонов

    let max = arr[0]; //создаём переменную для хранения максимального числа
    let min = arr[0]

    const test = () => {
        debugger
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 100) {
                count++
            }
            if (max < arr[i] || max !== 100) {
                max = arr[i]
                if (min > arr[i]) {
                    min = arr[i]
                }
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== max && count > 0 && arr[i] !== min) {
                p.push(arr[i])
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === p[i - 1]) {
                sum += arr[i]
            }
        }

        console.log("дни с использованием купона: ", p)

        console.log("день в который был использован купон: ", max)

        console.log("количество купонов: ", count)

        console.log("неделя: ", arr)

        console.log("сумма ", sum)
    }

    return (
        <div>
            <button
                onClick={() => test()}
            >
                click me
            </button>
        </div>
    )
}

export default CafeNew

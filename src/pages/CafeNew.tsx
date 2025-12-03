import React from "react";

const CafeNew = () => {
    const [arr, setArr] = React.useState([35, 40, 101, 59, 63])

    let p: any = [] //массив в котором находятся дни с тратой меньше 101

    let b: any = []

    let sum = 0;

    let count = 0; //количество купонов

    let coupons = 0;

    let max = arr[0]; //создаём переменную для хранения максимального числа

    const test = () => {
        debugger
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 100) {
                count++
                coupons++
                b.push(i)
            }
            if (max < arr[i] || max >= 100) {
                max = arr[i]
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== max) {
                p.push(arr[i])
            }
        }
        while (b.length < 1) {
            let maxEl = arr[b[0] + 1];
            let maxInd = b[0] + 1;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === max && coupons > 0) {
                    coupons--
                }
            }
            for (let j = b[0] + 1; j < b[1]; j++) {
                if (maxEl < arr[j]) {
                    maxEl = arr[j];
                    maxInd = j;
                }
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === p[i]) {
                sum += arr[i]
            }
        }

        console.log("дни с использованием купона: ", p)

        console.log("день в который был использован купон: ", max)

        console.log("количество купонов получено: ", count)

        console.log("количество купонов осталось: ", coupons)

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

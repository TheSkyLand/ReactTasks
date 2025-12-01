import React from "react";

const CafeNew = () => {
    let arr = [5, 35, 40, 101, 59, 63]

    let p: any = []; //массив в котором находятся купоны больше 101

    let sum = 0;

    let count = 0; //количество купонов

    let max = arr[0]; //создаём переменную для хранения максимального числа

    const test = () => {
        debugger
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 100) {
                count++
            }
            if (max < arr[i] || max != 100) {
                max = arr[i]
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != max) {
                p.push(arr[i])
            }
        }
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        console.log("дни с использованием купона:", p)

        console.log("день в который был получен купон:", max)

        console.log("дни с купоном:", arr)

        console.log("сумма", sum)
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

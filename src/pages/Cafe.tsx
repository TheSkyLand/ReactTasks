import { debug } from "console";
import React from "react";

const Cafe = () => {
    const [money, setMoney] = React.useState('')
    const [days, setDays] = React.useState([''])
    const [coupons, setCoupons] = React.useState([''])
    const [array, setArray] = React.useState([''])
    let count = 0;
    let y: any = []
    let p: any = []

    function addEl(money: any) {
        array.splice(1, 0, money)
        console.log(array)
    }

    function submit(arr: any) {
        for (let i = 0; array.length > i; i++) {
            if (Number(array[i]) >= 100) {


                y.push(i)
                count++

            }
        }
        let maxEl = arr[y[0] + 1]
        let maxIndx = y[0] + 1
        while (y.length > 1) {
            let maxEl = arr[y[0] + 1];
            let maxIndx = y[0] + 1;
            for (let j = y[0] + 1; j < y[1]; j++) {
                if (maxEl < arr[j]) {
                    maxEl = arr[j];
                    maxIndx = j;
                }
            }
            p.push(maxIndx);

            y.splice(0, 1);
        }
        console.log(array)
        console.log(y)
        console.log(p)
    }

    return (
        <div>

            <input type="number" style={{ border: "1px black solid" }} value={money} onChange={(e) => setMoney(e.target.value)} />
            <button style={{ border: "1px black solid" }} onClick={() => addEl(array)}>добавить</button>

            <button onClick={() => submit(array)}>test</button>
        </div>
    )
}

export default Cafe
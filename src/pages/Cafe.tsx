import { debug } from "console";
import React from "react";

const Cafe = () => {
    const [money, setMoney] = React.useState('')
    const [days, setDays] = React.useState([''])
    const [coupons, setCoupons] = React.useState([''])
    let array = [15, 37, 60, 101, 12, 58, 102, 3, 100];
    let count = 0;
    let y: any = []
    let p: any = []

    /*
    function changeMoney(event: any) {
        setMoney(event.target.value)
    }
    function addEl() {
        days.splice(1, 0, money)
        console.log(days)
    }
*/
    function submit(arr: any) {
        for (let i = 0; array.length > i; i++) {
            if (Number(array[i]) >= 100) {


                y.push(i)
                count++

            }
        }
        let maxEl = arr[y[0] + 1] 
        let maxIndx = y[0] + 1
        while (array.length < 1) {
            for (let j = y[0]; y[0]; j++) {
                maxEl[j] = arr[j + 1] 


            }
        }

        console.log(array)

    }
    return (
        <div>
            <button onClick={() => submit(array)}>test</button>
        </div>
    )
}

export default Cafe
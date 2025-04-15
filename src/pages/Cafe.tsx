import React from "react";

const Cafe = () => {
    const [money, setMoney] = React.useState('')
    const [days, setDays] = React.useState([''])
    const [coupons, setCoupons] = React.useState([''])
    function changeMoney(event: any) {
        setMoney(event.target.value)
    }



    function addEl() {
        days.splice(1, 0, money)
        console.log(days)
    }

    function submit() {
        for (let i = 0; Array.length > i; i++) {
            if (Number(days[i]) >= 101) {
                
                days.concat(coupons)
            }
        }
        console.log(coupons)
    }
    return (
        <div>

            <span>vvedite chislo</span>
            <input value={money} onInput={(e) => changeMoney(e)}>

            </input>
            <button style={{ border: "2px black solid" }} onClick={addEl}>add</button>
            <button style={{ border: "2px black solid" }} onClick={submit}>submit</button>
        </div>
    )
}

export default Cafe
import React from "react"

const XYPage = () => {


    const [x1, setX1] = React.useState(0)
    const [y1, setY1] = React.useState(0)
    const [x2, setX2] = React.useState(0)
    const [y2, setY2] = React.useState(0)

    let [dots, setDots] = React.useState([
        { id: 0, x: x1, y: x1 },
        { id: 1, x: x2, y: x2 },
    ])

    function changeX1(event: any) {
        setX1(event.target.value)
    }
    function ChangeY1(event: any) {
        setY1(event.target.value)
    }
    function changeX2(event: any) {
        setX2(event.target.value)
    }
    function ChangeY2(event: any) {
        setY2(event.target.value)
    }

    
    function checkZone() {
        if (x1 < 0 && y1 > 0 && x2 < 0 && y2 > 0) {
            console.log("zone 1")
        }
        else if (x1 > 0 && y1 > 0 && x2 > 0 && y2 > 0) {
            console.log("zone 2")
        }
        else if (x1 < 0 && y1 < 0 && x2 < 0 && x2 < 0) {
            console.log("zone 3")
        }
        else if (x1 > 0 && y1 < 0 && x2 > 0 && y2 < 0) {
            console.log("zone 4")
        }
        else {
            console.log("не входит в ни одну из зон")
        }   
    }
    

    return (
        <div style={{ width: "200px", display: "flex", flexDirection: "column" }}>
            <span>
                X1: <input value={x1} onInput={(e) => changeX1(e)} />
                Y1: <input value={y1} onInput={(e) => ChangeY1(e)} />
            </span>
            <span>
                X2: <input value={x2} onInput={(e) => changeX2(e)} />
                Y2: <input value={y2} onInput={(e) => ChangeY2(e)} />
            </span>

            <div>
                <span> X1:{x1} </span>
                <span> Y1:{y1} </span>
            </div>

            <div>
                <span> X2:{x2} </span>
                <span> Y2:{y2} </span>
            </div>

            <button style={{ border: "1px" }} onClick={checkZone}>TEST</button>
        </div>
    )
}





export default XYPage
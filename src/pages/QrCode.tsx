

const QrPage = () => {
    let arr = [];

    let leftUpperSquareArr = [
        1, 1, 1, 1, 1, 1, 0,
        1, 0, 0, 0, 0, 1, 0,
        1, 0, 1, 1, 0, 1, 0,
        1, 0, 1, 1, 0, 1, 0,
        1, 0, 0, 0, 0, 1, 0,
        1, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0,
    ]
    let RightUpperSquareArr = [
        0, 1, 1, 1, 1, 1, 1,
        0, 1, 0, 0, 0, 0, 1,
        0, 1, 0, 1, 1, 0, 1,
        0, 1, 0, 1, 1, 0, 1,
        0, 1, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0,
    ]
    let leftLowerSquareArr = [
        0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 0,
        1, 0, 0, 0, 0, 1, 0,
        1, 0, 1, 1, 0, 1, 0,
        1, 0, 1, 1, 0, 1, 0,
        1, 0, 0, 0, 0, 1, 0,
        1, 1, 1, 1, 1, 1, 0,

    ]
    let squareArr = [
        1, 1, 1, 1, 1,
        1, 0, 0, 0, 1,
        1, 0, 1, 0, 1,
        1, 0, 0, 0, 1,
        1, 1, 1, 1, 1,

    ]
    for (let i = 0; i < 500; i++) {
        if (Math.random() >= 0.5) {
            arr.push(1)
        }
        else {
            arr.push(0)
        }
    }


    return (

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: 480
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        width: 70,
                        height: 70,
                    }}
                >
                    {leftUpperSquareArr.map((index, key) => (
                        <div
                            style={{
                                background: index === 1 ? "black" : "white",
                                width: 10,
                                height: 10,
                            }}
                        />
                    ))}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        width: 270,
                    }}
                >
                    {arr.map((index, key) => (
                        <div
                            style={{
                                background: index === 1 ? "black" : "white",
                                width: 10,
                                height: 10,
                            }}
                        />
                    ))}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        width: 70,
                        height: 70,
                    }}
                >
                    {RightUpperSquareArr.map((index, key) => (
                        <div
                            style={{
                                background: index === 1 ? "black" : "white",
                                width: 10,
                                height: 10,
                            }}
                        />
                    ))}
                </div>


            </div>

    )
}

export default QrPage

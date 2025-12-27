
//Не работает - Work In Progress
const QrPage = () => {
    let arr = [];

    let leftUpperSquareArr = [ //левый верхний квадратик
        1, 1, 1, 1, 1, 1, 0,
        1, 0, 0, 0, 0, 1, 0,
        1, 0, 1, 1, 0, 1, 0,
        1, 0, 1, 1, 0, 1, 0,  //1 - чёрный 0 - белый
        1, 0, 0, 0, 0, 1, 0,
        1, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0,
    ]
    let RightUpperSquareArr = [ //правый верхний квадратик
        0, 1, 1, 1, 1, 1, 1,
        0, 1, 0, 0, 0, 0, 1,
        0, 1, 0, 1, 1, 0, 1,
        0, 1, 0, 1, 1, 0, 1,
        0, 1, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0,
    ]
    let leftLowerSquareArr = [ //левый нижний квадратик
        0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 0,
        1, 0, 0, 0, 0, 1, 0,
        1, 0, 1, 1, 0, 1, 0,
        1, 0, 1, 1, 0, 1, 0,
        1, 0, 0, 0, 0, 1, 0,
        1, 1, 1, 1, 1, 1, 0,

    ]
    let squareArr = [ // квадрат где то снизу справа с отсупами от углов
        1, 1, 1, 1, 1,
        1, 0, 0, 0, 1,
        1, 0, 1, 0, 1,
        1, 0, 0, 0, 1,
        1, 1, 1, 1, 1,
    ]
    for (let i = 0; i < 621; i++) { //массив из рандомного набора чисел 0 и 1
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
            width: 410,
            height: 500,
        }}
        >
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    float: "left",
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
                                float: "right",
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
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                float: "left",
                                width: 70,
                                height: 70,
                            }}
                        >
                            {leftLowerSquareArr.map((index, key) => (
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
        </div>

    )
}

export default QrPage

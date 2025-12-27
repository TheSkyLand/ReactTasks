import { Button } from "@mui/material"

interface calculatorNumpadProps{
    num: number,
    back: (value: number) => void // emit(props-функция)
}

const CalculatorNumpad = (props: calculatorNumpadProps) => { //подключаем пропс
    const provide = (t: number) => { //функция для того, чтобы отрабатывал emit, в нашем случае он инициализируется в кнопке
        props.back(t)
    }

    return <Button onClick={() => provide(props.num)} className="main-buttons">
            {props.num}
        </Button>
} 

export default CalculatorNumpad
